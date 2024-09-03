import { CalculateResources } from './resourceFunctions';
import { aiparameters, resourceCosts } from '../constants/constants';
import { ValidateMove } from './boardFunctions';


// This just gets the production ratios from a tile list
export const calculateProductionRatios = (tileList) => {
    const {woodResource, foodResource, metalResource} = CalculateResources(tileList);
    const totalResourcesProd = (woodResource + foodResource + metalResource);
    const woodRatio  = totalResourcesProd === 0 ? 0 : woodResource/totalResourcesProd;
    const foodRatio  = totalResourcesProd === 0 ? 0 : foodResource/totalResourcesProd;
    const metalRatio = totalResourcesProd === 0 ? 0 : metalResource/totalResourcesProd;
    return {total: totalResourcesProd, woodRatio: woodRatio, foodRatio: foodRatio, metalRatio: metalRatio};
  }

// This function compares resource production ratios - from current vs target to new vs target
// The minimum changeScore is used to work out which is the best tile to develop / build on.
export const calculateResourcesRatio = (targetRatios, currProdPct, newProdPct) => {
    const currWoodDiff = (currProdPct.woodRatio - targetRatios.woodRatio);
    const currFoodDiff = (currProdPct.foodRatio - targetRatios.foodRatio);
    const currMetalDiff = (currProdPct.metalRatio - targetRatios.metalRatio);
    const newWoodDiff = (newProdPct.woodRatio - targetRatios.woodRatio);
    const newFoodDiff = (newProdPct.foodRatio - targetRatios.foodRatio);
    const newMetalDiff = (newProdPct.metalRatio - targetRatios.metalRatio);
    const currScore = currWoodDiff ** 2 + currFoodDiff ** 2 + currMetalDiff ** 2;
    const newScore = newWoodDiff ** 2 + newFoodDiff ** 2 + newMetalDiff ** 2;
    return {changeScore: newScore - currScore, currScore: currScore, newScore: newScore, newDiffs: {wood: newWoodDiff, food: newFoodDiff, metal: newMetalDiff}};
}

// Calculate Resource Ratios - similar to calculate production ratios, but uses a resources input rather than a tile list
export const calculateResourceRatiosWithAdd = (resources, resourceToAdd, valueToAdd) => {
    const totalResources = resources.wood + resources.food + resources.metal + (['wood', 'food', 'metal'].includes(resourceToAdd) ? valueToAdd : 0);
    const newWood  = resources.wood  + (resourceToAdd === 'wood'  ? valueToAdd : 0);
    const newFood  = resources.food  + (resourceToAdd === 'food'  ? valueToAdd : 0);
    const newMetal = resources.metal + (resourceToAdd === 'metal' ? valueToAdd : 0);

    return {woodRatio: newWood / totalResources, foodRatio: newFood / totalResources, metalRatio: newMetal / totalResources};
}

// Function for choosing the best resource (after working out what resources are needed based on possible actions)
export const CalculateBestResourceOrig = (resources, strategy) => {
    const targetRatios = aiparameters.find(param => param.strat === strategy).resourceRatios;
    const currRatio  = calculateResourceRatiosWithAdd(resources, 'none', 0 );
    const woodRatio  = calculateResourceRatiosWithAdd(resources, 'wood', 1 );
    const foodRatio  = calculateResourceRatiosWithAdd(resources, 'food', 1 );
    const metalRatio = calculateResourceRatiosWithAdd(resources, 'metal', 1 );
    const woodDiff  = calculateResourcesRatio(targetRatios, currRatio, woodRatio).newScore;
    const foodDiff  = calculateResourcesRatio(targetRatios, currRatio, foodRatio).newScore;
    const metalDiff = calculateResourcesRatio(targetRatios, currRatio, metalRatio).newScore;
    const minDiff = Math.min(woodDiff, foodDiff, metalDiff);
    console.log('current:', currRatio, ', wood:', woodRatio, ', food:', foodRatio, ', metal:', metalRatio)
    console.log('wood:', woodDiff, ', food:', foodDiff, ', metal:', metalDiff, ', min: ', minDiff);
    if (minDiff === woodDiff) {
        return 'wood';
    } else if (minDiff === foodDiff) {
        return 'food';
    } else {
        return 'metal';
    }
}

export const CalculateBestResource = (resources, strategy) => {

  if (strategy === 'e') {
    // Expansive strategy - pick resources based on a W:F:M ratio of 4:2:0, priority W:F
    if (resources.wood > 2 * resources.food) {
      return 'food';
    } else {
      return 'wood';
    }
  } else if (strategy === 'b') {
    // Builder strategy - pick resources based on a W:F:M ratio of 1:2:4
    if (resources.wood < 0.25 * resources.metal && resources.wood < 0.5 * resources.food) {
      return 'wood';
    } else if (resources.food < 0.5 * resources.metal) {
      return 'food';
    } else {
      return 'metal';
    }
  } else {
    // Mixed strategy - pick resources based ona  W:F:M ratio of 1:1:1, priorty W:M:F
    if (resources.wood === Math.min(resources.wood, resources.food, resources.metal)) {
      return 'wood'; 
    } else if (resources.food === Math.min(resources.wood, resources.food, resources.metal)) {
      return 'food'; 
    } else {
      return 'metal';
    }
  }

}




// Calculate the risk of the hex being taken over by any nearby players (computer or human)
export const calculateTakeOverRisk = (tiledata, mapData, currentPlayer) => {
    // Set up the player strength object
    const playerStructStrength = {};
    // If any other player has a structure strength equal to the player strength, then 
    // that hex is as risk of being taken over
    if (tiledata.structure === 4 || tiledata.startSquare === (currentPlayer + 1)) {
      // Tile either has a castle on it, or is the player's starting square.  No risk.
      return [[], 0, 0];  
    } else {
      // Go through all the neighbours:
      if (tiledata.neighbourids) {
        const tileids = [...tiledata.neighbourids];
        tileids.push(tiledata.id);
        //console.log('Running tile: ', tiledata.id, ' and returns tileids:', tileids);
        // Cycle through the ids, adding to the playerStructStrength object.
        tileids.forEach((tileid) => {
          const tileOwner = mapData[tileid].currentOwner;
          const tileStruct = mapData[tileid].structure;
          if (tileOwner !== 0) {
            if (!playerStructStrength[tileOwner]) {
              playerStructStrength[tileOwner] = 0;
            }
            playerStructStrength[tileOwner] += tileStruct;
          }
        });
      }
      //console.log('playerstructstrength:',playerStructStrength);
      
      const playerStrength = playerStructStrength[(currentPlayer+1)];
      // Now get counts for the number of players with a structure strength equal to, and greater than the current player
      let equalStrengthCount = 0;
      let greaterStrengthCount = 0;
      Object.entries(playerStructStrength).forEach(([player, strength]) => {
        if (parseInt(player) !== (currentPlayer + 1)) {
          if (strength === playerStrength) {
            equalStrengthCount += 1;
          } else if (strength > playerStrength) {
            greaterStrengthCount += 1;
          }
        }
      });

      return [playerStructStrength, equalStrengthCount, greaterStrengthCount];
    }
   
  }






  export const ComputerRankActions = (boardData, mapData, playerData, gamePlayData) => {
    // Just extract some commonly used values from the input objects
    const currentPlayer = gamePlayData.currentPlayer;
    const currPlayerData = playerData[currentPlayer];
    //console.log(currPlayerData.diff, currPlayerData.strat, aiparameters);

    // Get some parameters from the ai strategy
    const targetRatios = aiparameters.find(param => param.strat === currPlayerData.strat).resourceRatios;
    const minTiles = aiparameters.find(param => param.strat === currPlayerData.strat).minTiles;
    const structureToHexRatio = aiparameters.find(param => param.strat === currPlayerData.strat).structureToHexRatio;
    const buildWeight = aiparameters.find(param => param.strat === currPlayerData.strat).buildWeight;
    const expandWeight = aiparameters.find(param => param.strat === currPlayerData.strat).expandWeight;
    //console.log('AI Params: target ratios', targetRatios,', minTiles:', minTiles, ', StHRatio: ', structureToHexRatio, ', B+E Weights :[', buildWeight, ',', expandWeight, ']')
    // CALCULATIONS
    // Get the hex ids for hexes that the AI player controls, their neighbours, and the neighbours of their neighbours
    const playerTiles = mapData.filter((tile) => tile.currentOwner === (currentPlayer + 1));
    // Get all neighbours of player tiles
    const neighbourTiles = mapData.filter((tile) => playerTiles.flatMap((hex) => hex.neighbourids).includes(tile.id) && !playerTiles.flatMap((hex)=>hex.id).includes(tile.id));
    // And the neighbours of neighbours
    const nextToNeighbourTiles = mapData.filter((tile) => neighbourTiles.flatMap((hex) => hex.neighbourids).includes(tile.id) 
                                                      && !playerTiles.flatMap((hex)=>hex.id).includes(tile.id)
                                                      && !neighbourTiles.flatMap((hex)=>hex.id).includes(tile.id));
    //console.log('Player tiles:', playerTiles, 'NeighbourTiles:', neighbourTiles, 'nextToNeighbourTiles:', nextToNeighbourTiles)
    // Flag any resources the player doesn't currently produce
    const woodTiles = playerTiles.filter((tile)=> tile.tileType === 'w');
    const foodTiles = playerTiles.filter((tile)=> tile.tileType === 'f');
    const metalTiles = playerTiles.filter((tile)=> tile.tileType === 'm');


    // TILE RANKINGS
    // This goes the player tiles and adjacent tiles, working out scores relating to:
    // 1 - Change in resource production
    // 2 - Risk of being taken over by another player
    // 3 - Chance of taking over another player's hex

    // Get the resource production ratios and total amount of resources
    const currProdPct = calculateProductionRatios(playerTiles);
    
    
    // PLAYER TILES - ADD SCORES
    const playerTilesWithScores = playerTiles.map((tile) => {
      // PRODUCTION CHANGE SCORE
      const newTile = {...tile, structure: tile.structure === 4 ? 4 : tile.structure + 1};
      // Create a new array with the current tile replaced by the newTile
      const newPlayerTiles = playerTiles.map(t => t.id === tile.id ? newTile : t);
      // Upgrade the structure on the current tile
      const newProdPct = calculateProductionRatios(newPlayerTiles);
      // How does this improve the resources?
      const resourceTotalChange = newProdPct.total - currProdPct.total;
      const resourcesRatioChange = calculateResourcesRatio(targetRatios, currProdPct, newProdPct);
      //console.log('Tile: ', tile.id, ', Orig Prod:', currProdPct, ', New Prod:', newProdPct, 'total change: ', resourceTotalChange, ', ratio change: ', resourcesRatioChange);
      // RISK OF BEING TAKEN OVER BY ANOTHER PLAYER
      // Before building
      const takeOverRisk_prebuild = calculateTakeOverRisk(tile, mapData, currentPlayer);
      const takeOverRisk_pstbuild = calculateTakeOverRisk(newTile, mapData, currentPlayer);
      // Now determine the structure to hex ratio
      const structureValue = newPlayerTiles.reduce((sum, tile) => sum + tile.structure, 0);
      const hexValue = newPlayerTiles.length;
      return {...tile, action: 'build',  structureValue: structureValue, hexValue: hexValue
            , scoreResourceTotalChange: resourceTotalChange, scoreResourceRatioChange: resourcesRatioChange
            , takeOverRisk_prebuild:  takeOverRisk_prebuild, takeOverRisk_pstbuild: takeOverRisk_pstbuild}
    })
    //console.log(playerTilesWithScores);

    // Now, rank each neighbour tile to see how it improves resource production
    const neighbourTilesWithScores = neighbourTiles.map((tile=>{
        const newTile = {...tile, structure: 1, currentOwner: currentPlayer + 1};
        const newPlayerTiles = [...playerTiles, newTile];
        const newProdPct = calculateProductionRatios(newPlayerTiles);
        // How does this improve the resources?
        const resourceTotalChange = newProdPct.total - currProdPct.total;
        const resourcesRatioChange = calculateResourcesRatio(targetRatios, currProdPct, newProdPct);
        // RISK OF BEING TAKEN OVER BY ANOTHER PLAYER
        const takeOverRisk_prebuild = calculateTakeOverRisk(newTile, mapData, currentPlayer);
        // And what is the risk if the player was to build a house on the tile
        const newTileBuild = {...tile, structure: 2}
        const takeOverRisk_pstbuild = calculateTakeOverRisk(newTileBuild, mapData, currentPlayer);
        // Now determine the structure to hex ratio
        const structureValue = newPlayerTiles.reduce((sum, tile) => sum + tile.structure, 0);
        const hexValue = newPlayerTiles.length; 
        // Flag for if this building on an empty hex or taking over another player's hex
        const action = tile.currentOwner === 0 ? 'expand' : 'takeover';
        //console.log('Tile: ', tile.id, ', Orig Prod:', currProdPct, ', New Prod:', newProdPct, 'total change: ', resourceTotalChange, ', ratio change: ', resourcesRatioChange);
        return {...tile, action: action,  structureValue: structureValue, hexValue: hexValue
                        , scoreResourceTotalChange: resourceTotalChange, scoreResourceRatioChange: resourcesRatioChange
                        , takeOverRisk_prebuild:  takeOverRisk_prebuild, takeOverRisk_pstbuild: takeOverRisk_pstbuild}
    }))
    //console.log(neighbourTilesWithScores);

    // Combine these arrays
    const allActions = [...playerTilesWithScores, ...neighbourTilesWithScores];

    const allActionsRanked = allActions.map((action => {
      // Create a score
      // Weights:
      const scoreWeights = [1, 1, 1, 1, 1, 1];
    
      // Weight 1 - How many tiles short are they from their minimum
      const w1_tileCountWeight = (action.hexValue <= minTiles && action.action !== 'build') ? 5 : 0;

      // Now, check how this action will improve the structure to tile ratio
      const w2_structurehexratio = -1 * Math.abs((action.structureValue / action.hexValue) - structureToHexRatio);;

      // Resources total is no longer factored in.  Instead, this is now a flag for if this action results in the production of a resource the player doesn't currently produce.
      //const w3_resourcesTotal = action.scoreResourceTotalChange;
      const w3_generateNewResource = (mapData[action.id].tileType==='w' && woodTiles === 0) ? 2 :
                                     (mapData[action.id].tileType==='f' && foodTiles === 0) ? 2 :
                                     (mapData[action.id].tileType==='m' && metalTiles === 0) ? 2 : 0;
       
      const w4_resourcesRatio = Math.min(1, Math.max(-1, 1 - (action.scoreResourceRatioChange.newScore * 1) ));

      const w5_takeoverRisk1 = (action.takeOverRisk_prebuild[1] > 0 && action.takeOverRisk_pstbuild[2] === 0) ? -1 : (action.takeOverRisk_pstbuild[2] > 0 ? -2 : 0)

      const w6_actionType = action.action === 'takeover' ? 3 : action.action === 'build' ? buildWeight : expandWeight;

      const finalScore = w1_tileCountWeight * scoreWeights[0]
                     + w2_structurehexratio * scoreWeights[1]
                     + w3_generateNewResource * scoreWeights[2]
                     + w4_resourcesRatio * scoreWeights[3]
                     + w5_takeoverRisk1 * scoreWeights[4]
                     + w6_actionType * scoreWeights[5];

      // And add a random number for resolving ties
      const randomNumber = Math.random();

      return {...action, componentScores: [w1_tileCountWeight, w2_structurehexratio, w3_generateNewResource, w4_resourcesRatio, w5_takeoverRisk1, w6_actionType], finalScore: finalScore, randomiser: randomNumber};
    }))

    // Now sort actions in descending score order
    const allActionsSorted = allActionsRanked.slice().sort((a,b) => {
      if (b.finalScore !== a.finalScore) {
        return b.finalScore - a.finalScore;
      } else {
        // Final scores are the same, so sort using the randomiser
        return b.randomiser - a.randomiser;
      }
    })
    //console.log('Actions sorted:', allActionsSorted)
    return allActionsSorted;
    
  }

  // 
  export const ComputerSelectAction = (scoredactions, boardData, mapData, playerData, gamePlayData) => {
    const currentPlayer = gamePlayData.currentPlayer;
    // Cycle through the actions to flag what ones can be achieved
    var actionAllowed;
    var actionDisallowReason;
    var validation;
   
    const sortedActionsSelect = scoredactions.map((action => {

      const hexid = action.id;

      const cost = (action.action === 'takeover') ? resourceCosts.takeover : 
                   (action.action === 'expand') ? resourceCosts.expand :
                   (action.action === 'build' && mapData[action.id].structure === 1) ? resourceCosts.house :
                   (action.action === 'build' && mapData[action.id].structure === 2) ? resourceCosts.village :
                   (action.action === 'build' && mapData[action.id].structure === 3) ? resourceCosts.castle : 0;
      const wooddiff  = playerData[currentPlayer].wood  - cost.wood;
      const fooddiff  = playerData[currentPlayer].food  - cost.food;
      const metaldiff = playerData[currentPlayer].metal - cost.metal;
      const enoughResources = (wooddiff >= 0 && fooddiff >= 0 && metaldiff >= 0) ? 1 : 0;
      // Check how close they are
      const shortfall = Math.min(0, wooddiff) + Math.min(0, fooddiff) + Math.min(0, metaldiff);
    

      // Determine what actions are feasible
      validation = ValidateMove(action.action, hexid, boardData, mapData, currentPlayer, gamePlayData.numberPlayers);
      if (!validation.isAllowed) {
          actionAllowed = false;
          actionDisallowReason = validation.disallowReason;
      }  else if (enoughResources === 0) {
          actionAllowed = false
          actionDisallowReason = "Not enough resources";
      } else {
          actionAllowed = true;
          actionDisallowReason = 'na';
      }

      
      return {...action, actionAllowed: actionAllowed, actionDisallowReason:actionDisallowReason, actionCost: {wood:cost.wood, food:cost.food, metal:cost.metal, tech:cost.tech}, 
              availableResources: {wood: playerData[currentPlayer].wood, food: playerData[currentPlayer].food, metal: playerData[currentPlayer].metal, tech: playerData[currentPlayer].tech},
              resourceCalcs: {wood: wooddiff, food: fooddiff, metal: metaldiff, shortfall: shortfall}
            }
    }))
    //console.log('Actions allowed:', sortedActionsSelect)
    return sortedActionsSelect;
  }
  
  export const PerformAction = (bestAction, boardData, mapData, playerData, gamePlayData, UpdateMapData, UpdatePlayerData, UpdateGamePlayData, addLog) => {
    const currentPlayer = gamePlayData.currentPlayer;
    const hexid = bestAction.id;

    
  // Determine change to player resources 
    const playerDataUpdates = [{
        playerId: currentPlayer
        , dataToUpdate: {
            wood:  playerData[currentPlayer].wood  - (bestAction.action === 'pass' ? 0 : bestAction.actionCost.wood)
          , food:  playerData[currentPlayer].food  - (bestAction.action === 'pass' ? 0 : bestAction.actionCost.food)
          , metal: playerData[currentPlayer].metal - (bestAction.action === 'pass' ? 0 : bestAction.actionCost.metal)
          , tech:  playerData[currentPlayer].tech  - (bestAction.action === 'pass' ? 0 : bestAction.actionCost.tech)
        }
      }]
    //console.log(playerDataUpdates);

    var logTxt;
    if (bestAction.action === 'takeover') {
        UpdatePlayerData(playerDataUpdates);
        // Update the board data
        UpdateMapData(hexid, 'currentOwner', (currentPlayer + 1));
        UpdateMapData(hexid, 'structure', Math.max(1, mapData[hexid].structure - 1));
        // Add to log
        logTxt = 'Player ' + (currentPlayer + 1) + ' has taken over hex ' + hexid;
        addLog(logTxt);
    } else if  (bestAction.action === 'expand') {
        UpdatePlayerData(playerDataUpdates);
        // Update the board data
        UpdateMapData(hexid, 'currentOwner', (currentPlayer + 1));
        UpdateMapData(hexid, 'structure', 1);
        // Add to log
        logTxt = 'Player ' + (currentPlayer + 1) + ' has developed hex ' + hexid;
        addLog(logTxt);
    } else if (bestAction.action === 'build') {
        UpdatePlayerData(playerDataUpdates);
        // Update the board data
        const newStructValue = (mapData[hexid].structure += 1);
        UpdateMapData(hexid, 'structure', newStructValue);
        // Add to log
        const structureName = ['Camp', 'House', 'Village', 'Castle'][newStructValue - 1];
        logTxt = 'Player ' + (currentPlayer + 1) + ' has built a ' + structureName + ' on hex ' + hexid;
        addLog(logTxt);
    } else if (bestAction.action === 'pass') {
      addLog('Player ' + (gamePlayData.currentPlayer + 1) + ' has ended their turn.');
      UpdateGamePlayData('actionPhaseSet', -1);
      UpdateGamePlayData('currentPhase', 0);
      if ((currentPlayer + 1) === gamePlayData.numberPlayers) {
        addLog('');
        addLog('Start of turn:' + (gamePlayData.currentTurn + 1));
        UpdateGamePlayData('currentPlayer', 0);
        UpdateGamePlayData('currentTurn', gamePlayData.currentTurn + 1);
        
      } else {
        UpdateGamePlayData('currentPlayer', gamePlayData.currentPlayer + 1);
      }
    }
  }