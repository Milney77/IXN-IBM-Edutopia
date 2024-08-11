export const BoardInitialisation = (mapData, boardData, tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset) => {
    // Now using the map data object, let's add the x and y coordinates for the tile (assuming its a rectangle),
    // and the 6 coordinates that define the hexagon
    for (var i = 0; i < mapData.length; i++) {
      const tileData = mapData[i];
      var xpos;
      if ((tileData.row % 2 === 0 && boardData.evenRowCols > boardData.oddRowCols) || (tileData.row % 2 === 1 && boardData.evenRowCols < boardData.oddRowCols)) {
        // It is a longer row, so only apply half the horizontal offset
        xpos = tileWidth * (0.5 * tilesHOffset) + tileData.col * tileWidth;
      } else {
        // Its a shorter row, so apply the full horizontal offset
        xpos = tileWidth * (1.0 * tilesHOffset) + tileData.col * tileWidth;
      }
      var ypos = tileWidth * tilesVOffset + tileData.row * tileHeightTrim;

      // Save this information
      mapData[i].xPos = [xpos, tileWidth];
      mapData[i].yPos = [ypos, tileHeightFull, tileHeightTrim];
      // Get the verticies of the hex
      mapData[i].xHexVert = [xpos, xpos + tileWidth / 2, xpos + tileWidth, xpos + tileWidth, xpos + tileWidth / 2, xpos];
      mapData[i].yHexVert = [ypos + tileHeightFull * 1 / 4, ypos, ypos + tileHeightFull * 1 / 4
                          , ypos + tileHeightFull * 3 / 4, ypos + tileHeightFull, ypos + tileHeightFull * 3 / 4];
      // Set the hover flag to zero
      mapData[i].hover = 0;

      // Determine neighbours
      const neighbours_sameRow = mapData.filter((tile) => tile.row === tileData.row && (tile.col + 1 === tileData.col || tile.col - 1 === tileData.col)  && tile.tileType !== 's');
      var neighbours_diffRow;
      if ((boardData.evenRowCols > boardData.oddRowCols && mapData[i].row % 2 === 0) || (boardData.evenRowCols < boardData.oddRowCols && mapData[i].row % 2 === 1)) {
        // Row is one of the longer rows
        neighbours_diffRow = mapData.filter((tile) => (tile.row + 1 === tileData.row || tile.row - 1 === tileData.row) && (tile.col === tileData.col || tile.col + 1 === tileData.col) && tile.tileType !== 's');
      } else {
        neighbours_diffRow = mapData.filter((tile) => (tile.row + 1 === tileData.row || tile.row - 1 === tileData.row) && (tile.col === tileData.col || tile.col - 1 === tileData.col) && tile.tileType !== 's');
      }
      // Have created the list of tiles - convert these to a list of indexes (indicies?)
      mapData[i].neighbourids = [...neighbours_sameRow.map((tile) => tile.id), ...neighbours_diffRow.map((tile) => tile.id)];
      } ;
}


export const CalculateVictoryPoints = (boardData, gamePlayData, mapData, playerData, UpdateGamePlayData, UpdatePlayerData, addCurrentInstruction, addLog) => {
    // Re-calculate victory points for all players (just in case a player has taken over other player hexes, have to do this for everyone
    const currentPlayer = gamePlayData.currentPlayer;
    const playerDataUpdates = [];
    // Flag to check whether an update needs to be applied to playerData
    let needsUpdate = false;
    // Loop through all players, and adjust victory points as required
    for (var currPlayer = 0; currPlayer < gamePlayData.numberPlayers; currPlayer++) {
        // Get the set of player tiles
        const playerTiles = mapData.filter((tile) => tile.currentOwner === (currPlayer + 1));
        // Set victory points to the number of tiles they own
        let victoryPoints = playerTiles.length;
        // Now add victory points based on what structures they have
        playerTiles.forEach((tile) => {
            if (tile.structure === 1) {
            victoryPoints += 0;
            } else if (tile.structure === 2) {
            victoryPoints += 1;
            } else if (tile.structure === 3) {
            victoryPoints += 2;
            } else if (tile.structure === 4) {
            victoryPoints += 3;
            }
        });
        //console.log('VICTORY POINTS CALCULATIONS - current player: ', currPlayer, ', tiles:', playerTiles.length, ', VPs:', victoryPoints);
        // Check if victory points have changed for a player - if so, push that player & data to the playerDataUpdates array.
        if (playerData[currPlayer].vp !== victoryPoints) {
            // This player needs their vp updated
            playerDataUpdates.push({
            playerId: currPlayer
            , dataToUpdate: { vp: victoryPoints }
            }); 
            // Flag that an update needs to happen
            needsUpdate = true;
            }   
        }

    // Update player data with all necessary updates
    if (needsUpdate) {
        //console.log(playerData, playerDataUpdates)
        UpdatePlayerData(playerDataUpdates);
    }

};


export const CalculateHexStatus = (currentPlayer, mapData) => {
    // Now, flag each hex as follows:
    // 1 - Hex is owned by player
    // 2 - Empty hex adjacent to a player hex
    // 3 - Other player controlled hex adjacent to player hex
    // 0 - Otherwise
    const playerTiles = mapData.filter((tile) => tile.currentOwner === currentPlayer + 1);
    // Get a list of all hexes adjacent to player hexes
    const allNeighbours = playerTiles.flatMap((hex) => hex.neighbourids);
    // Select all hex not owned by anyone
    const emptyTiles = mapData.filter((tile) => allNeighbours.includes(tile.id) && tile.currentOwner === 0);
    // Select neighbourhood hexes owned by other players
    const oppositionTiles = mapData.filter((tile) => allNeighbours.includes(tile.id) && tile.currentOwner > 0 && tile.currentOwner !== currentPlayer + 1
    );
    // Assign a value to each hex
    mapData.forEach((tile) => {
      if (playerTiles.map((tile) => tile.id).includes(tile.id)) {
        tile.actionable = 1;
      } else if (emptyTiles.map((tile) => tile.id).includes(tile.id)) {
        tile.actionable = 2;
      } else if (oppositionTiles.map((tile) => tile.id).includes(tile.id)) {
        tile.actionable = 3;
      } else {
        tile.actionable = 0;
      }
    });
};


  export const ValidateMove = (actiontype, hexid, boardData, mapData, currentPlayer, numberPlayers) => {
    var isAllowed = true;
    var disallowReason = 'na';
    const playerTiles = mapData.filter((tile) => tile.currentOwner === (currentPlayer + 1));

    if (actiontype === 'build') {
      // Checks:
      // Player is trying to upgrade above a castle
      // Player has reached max number of castles or villages
      const currStructure = mapData[hexid].structure;
      const countCastles = playerTiles.filter((tile) => tile.structure === 4).length;
      const countVillages = playerTiles.filter((tile) => tile.structure === 3).length;
      if (currStructure === 4) {
        isAllowed = false;
        disallowReason = "Can't upgrade beyond a Castle";
      } else if ((currStructure === 3 && countCastles === boardData.maxCastles) || (currStructure === 2 && countVillages === boardData.maxVillages)) {
        isAllowed = false;
        disallowReason = "Maximum number of " + (currStructure === 3 ? "Castles (" + boardData.maxCastles : "Villages (" + boardData.maxVillages) + ") reached";
      }
    }

    else if (actiontype === 'develop') {
      // Nothing to validate.
    }

    else if (actiontype === 'takeover') {
      // Checks:
      // Cannot take over a castle
      // Cannot take over a player's starting square
      // Can only take over a hex if the neighbourhood has equal or more attacking player structures than defending player structures
      const attackPlayer = currentPlayer + 1;
      const defendPlayer = mapData[hexid].currentOwner;
      let attackPlayerStruct = 0;
      let defendPlayerStruct = mapData[hexid].structure;
      mapData[hexid].neighbourids.forEach((tileid) => {
        if (mapData[tileid].currentOwner === attackPlayer) {
          attackPlayerStruct += mapData[tileid].structure;
        } else if (mapData[tileid].currentOwner === defendPlayer) {
          defendPlayerStruct += mapData[tileid].structure;
        }
      })
      // Check 1 - Can't take over a castle
      if (mapData[hexid].structure === 4) {
        isAllowed = false;
        disallowReason = "Can't takeover a Castle";
      // Can't take over a starting square
      } else if (mapData[hexid].startSquare > 0 && mapData[hexid].startSquare <= numberPlayers) {
        isAllowed = false;
        disallowReason = "Cannot take over a players' starting square";
      // Have to have greater structure strength than defender.
      } else if (attackPlayerStruct <= defendPlayerStruct) {
        isAllowed = false;
        disallowReason = "Attacker structure strength (" + attackPlayerStruct + ") is not greater than defender strength (" + defendPlayerStruct + ")";
      } 

    }

    return {isAllowed: isAllowed, disallowReason: disallowReason};
  }