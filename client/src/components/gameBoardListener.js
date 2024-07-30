// Function to check if a point is inside a polygon
// Uses a ray-casting method
const isPointInPolygon = (point, vertices) => {
    const [x, y] = point;
    let isInside = false;
    for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
      const [xi, yi] = vertices[i];
      const [xj, yj] = vertices[j];
      const intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) isInside = !isInside;
    }
    return isInside;
  }
  
  
  function checkMouseInHex(ColArray, RowArray, xpos, ypos, mapData) {
    //console.log('Checking coords (', xpos, ',', ypos, ') in row arrays ', RowArray, ' and column arrays ', ColArray)
    // Filter the tiles to just those in the row or two rows that need to be checked
    const tilesToCheck = mapData.filter((tile) => (RowArray.includes(tile.row)) && ColArray.includes(tile.col));
    //console.log('Tiles checked: ', tilesToCheck.length)
    // Loop through the tiles to check
    for (var j = 0; j < tilesToCheck.length; j++) {
      const tileData = tilesToCheck[j];
      // Pass the x&y coords and the verticies of the current tile being checked to the polygon checker
      if (tileData && isPointInPolygon([xpos, ypos], tileData.xHexVert.map((x, i) => [x, tileData.yHexVert[i]]))) {
        tileData.hover = 1;
        return tileData.id;
      }
    }
    
    return null;
  }
  
  export function mouseXY_to_HexID(mouseX, mouseY, tileWidth, tileHeight_full, tileHeight_trim, tilesHOffset, tilesVOffset, boardData, mapData, gamePlayData, actionMenuParams, canvas) {
    // Reset hover
    var hexID = -99;
    // Set the 'hover' property to zero for every tile.
    mapData.forEach(tile => {tile.hover = 0;});
    actionMenuParams.iconHover = [0, 0, 0, 0, 0, 0];

    // Create a holder variable for what the mouse is over.
    var mousePosition;
    
    var approxRow;
    // First, get an idea as to where the mouse is vertically - is it in the player info section, or on the game board
    if (mouseY < tileHeight_full * tilesVOffset) {
      // Above board
      approxRow = -1;
    } else if (mouseY > tileHeight_full * tilesVOffset + tileHeight_trim * (boardData.rows - 1) + tileHeight_full) {
      // Below board
      approxRow = -2;
    } else {
      // Get a 'rough' idea as to which row the mouse is in (to reduce the amount of checking required)
      approxRow = (mouseY - tileHeight_full * tilesVOffset) / (tileHeight_trim)
    }
  
    // Now get an idea of which column the mouse is over
    var approxCol;
    if (mouseX < tileWidth * 0.5 * tilesHOffset) {
      // To left of board
      approxCol = -1;
    } else if (mouseX > tileWidth * (tilesHOffset + Math.max(boardData.evenRowCols, boardData.oddRowCols))) {
      approxCol = -2;
    } else {
      approxCol = Math.floor((mouseX - tileWidth * 0.5 * tilesHOffset) / tileWidth);
    }

    // Now check if the mouse is in the action menu
    // Where would the action menu be (based on current player)
    const playerBoxWidth = actionMenuParams.playerBoxWidth;
    const customMargin = actionMenuParams.customMargin;

    var amXpos;
    var amYpos = actionMenuParams.yOffset;
    if (gamePlayData.currentPlayer === gamePlayData.numberPlayers - 1) {
        // Show it on the left of player display box
        amXpos = canvas.width - actionMenuParams.width - customMargin * 16; 
        //console.log(canvas.width, actionMenuParams.width, customMargin)
    } else {
        // Show it on the left of player display box
        amXpos = gamePlayData.currentPlayer * playerBoxWidth + customMargin * 16; 
    }
    //console.log('actionMenuParams.xOffset1', actionMenuParams.xOffset1, ', actionMenuParams.XOffset2', actionMenuParams.actionMenuXOffset2, ', canvaswidth: ', canvas.width);
    //console.log('Mouse XY: (', mouseX, ',', mouseY, '), Menu XYWH: (', amXpos, ',', amYpos, ',', actionMenuParams.width, ',', actionMenuParams.height);
    if (mouseX >= amXpos && mouseX <= (amXpos + actionMenuParams.width) && mouseY >= amYpos && mouseY <= (amYpos + actionMenuParams.height)
        && gamePlayData.currentPhase === 2)
    {
      // Prevent any further searching for the mouse location
      approxRow = -1;
      approxCol = -1;

      // Determine which circle the mouse is over
      var cirlceRad = (actionMenuParams.height * actionMenuParams.iconSize) / 2;
      var iconRough = Math.floor((mouseX - amXpos) / (actionMenuParams.height));
      var iconRoughCenterX = amXpos + actionMenuParams.iconOffset + iconRough * actionMenuParams.height + cirlceRad;
      var iconRoughCenterY = amYpos + 0.5 * (actionMenuParams.height * (1 - actionMenuParams.iconSize)) + cirlceRad;
      var distance = ((mouseX - iconRoughCenterX) ** 2  + (mouseY - iconRoughCenterY) ** 2) ** (0.5);
      if (distance <= cirlceRad) {
        actionMenuParams.iconHover[iconRough] = 1;
        mousePosition = {type: 'am', id: iconRough};
      } 
    }

   
    if (approxRow >= 0 && approxCol >= 0) {
      // First row
      if (approxRow < 1) {
        hexID = checkMouseInHex([approxCol - 1, approxCol, approxCol + 1], [0], mouseX, mouseY, mapData);
      } else if (approxRow >= boardData.rows) {
        hexID = checkMouseInHex([approxCol - 1, approxCol, approxCol + 1], [boardData.rows-1], mouseX, mouseY, mapData);
      } else {
        hexID = checkMouseInHex([approxCol - 1, approxCol, approxCol + 1], [Math.floor(approxRow)-1,Math.floor(approxRow)], mouseX, mouseY, mapData);
      }
  
      // Now check the intersection of the mouse coords and each tile in the rows.
      if (hexID && hexID >= 0 && hexID <= mapData.length) {
        //console.log('Mouse is over hexID:', hexID);
        mapData[hexID].hover = 1;
        mousePosition = {type: 'hex', id: hexID};
      } else if (hexID === 0) {
        mapData[hexID].hover = 1;
        mousePosition = {type: 'hex', id: hexID};
      } else {
        //console.log('Mouse is not over any hex tile');
      }
    }

    return (mousePosition);
};
  