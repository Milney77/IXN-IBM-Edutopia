// Simple function to calculate resources based on structures - makes it easy to change :)
export const CalculateResourcesStructure = (structure) => {
    if (structure === 1) {
      return 1;
    } else if (structure === 2) {
      return 2;
    } else if (structure === 3) {
      return 3;
    } else if (structure === 4) {
      return 3;
    } else {
      return 0;
    }
  };


// Function to calculate the resources generated from a players tiles.
export const CalculateResources = (tilesList) => {
    // Calculate how much resources should be gained
    let wood = 0;
    let food = 0;
    let metal = 0;

    // Loop through the player tiles
    tilesList.forEach((tile) => {
      if (tile.tileType === 'w') {
        wood += CalculateResourcesStructure(tile.structure);
      } else if (tile.tileType === 'f') {
        food += CalculateResourcesStructure(tile.structure);
      } else if (tile.tileType === 'm') {
        metal += CalculateResourcesStructure(tile.structure);
      }
    });

    // Now if a player has a castle, generate extra resources for all castle neighbourhood tiles they control
    const castleTile = tilesList.filter((tile)=>tile.structure === 4);
    const castleResources = {w: 0, f: 0, m: 0}
    if (castleTile.length > 0) {
      const allNeighbourIds = castleTile.flatMap(item => [item.id, ...item.neighbourids]);
      // Cycle through the player tiles
      allNeighbourIds.forEach((id)=>{
        const tile = tilesList.find(tile => tile.id === id);
        if (tile) {
          castleResources[tile.tileType] ++;
        }
      })
    }
    // Add the casteResources to the total
    wood += castleResources.w;
    food += castleResources.f;
    metal += castleResources.m;

    return {woodResource: wood, foodResource: food, metalResource: metal};
  };


  export const GenerateResources = (gamePlayData, mapData, playerData, UpdatePlayerData, UpdateGamePlayData, addLog ) => {
    const currentPlayer = gamePlayData.currentPlayer;
    const playerTiles = mapData.filter((tile) => tile.currentOwner === (currentPlayer + 1));
    // Calculate how much resources should be gained
    const {woodResource, foodResource, metalResource} = CalculateResources(playerTiles);
    const logTxt = 'Generating resources for Player ' + (currentPlayer + 1) + ' = Wood: ' + woodResource + ', food: ' + foodResource + ', metal: ' + metalResource;
    const playerDataUpdates = [{
      playerId: gamePlayData.currentPlayer
      , dataToUpdate: {
          wood:  playerData[currentPlayer].wood  + woodResource
        , food:  playerData[currentPlayer].food  + foodResource
        , metal: playerData[currentPlayer].metal + metalResource
      }
    }]
    UpdatePlayerData(playerDataUpdates);
    addLog(logTxt);
  };
