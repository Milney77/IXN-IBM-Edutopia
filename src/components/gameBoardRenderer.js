import { colorMap } from '../constants/constants';

// Rending the board
const structureSizeRatio = 0.4;


export const DrawBoard = (canvas, ctx, images, mapData, playerData, gamePlayData, actionMenuParams) => {

    // Clear board
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the tiles
    for (let i = 0; i < mapData.length; i++) {
        //drawTile(ctx, boardStructure[rows][cols], rows, cols, tileWidth, tileHeight_full, tileHeight_trim, images);
        drawTile(ctx, mapData[i], images, playerData);
      }

    // Highlight tiles
    for (let i = 0; i < mapData.length; i++) {
      highlightTile(ctx, mapData[i], images);
    }

    // Draw the action menu
    if (gamePlayData.currentPhase === 2) {
      DrawActionMenu(canvas, ctx, images, gamePlayData, playerData, actionMenuParams);
    }



    // 'Grey' out invalid hexes
    const playerFillCol = hexToRgba(colorMap[playerData[gamePlayData.currentPlayer].color].background, 0.5);
    //console.log(playerFillCol);
    var greyOutTiles;
    var playerColorTiles;
    if (gamePlayData.actionPhaseSet === 1) {
      // Grey out hexes that the player doesn't own.
      // If they have structure level 4, overlay the player color over that hex.
      greyOutTiles = mapData.filter((tile) => tile.actionable !== 1);
      playerColorTiles = mapData.filter((tile) => tile.actionable === 1 && tile.structure === 4);
      for (let i = 0; i < greyOutTiles.length; i++) {
        opaqueGreyHex(ctx, greyOutTiles[i]);
      }
      for (let i = 0; i < playerColorTiles.length; i++) {
        opaquePlayerColor(ctx, playerColorTiles[i], playerFillCol);
      }

    } else if (gamePlayData.actionPhaseSet === 2) {
      // Grey out hexes that are not adjacent to the player, or are owned by other players.
      // Player tiles have the player color overlaid.
      greyOutTiles = mapData.filter((tile) => tile.actionable === 0 || tile.actionable === 3);
      playerColorTiles = mapData.filter((tile) => tile.actionable === 1);
      for (let i = 0; i < greyOutTiles.length; i++) {
        opaqueGreyHex(ctx, greyOutTiles[i]);
      }
      for (let i = 0; i < playerColorTiles.length; i++) {
        opaquePlayerColor(ctx, playerColorTiles[i], playerFillCol);
      }

  } else if (gamePlayData.actionPhaseSet === 3) {
    // Grey out hexes that are not adjacent to the player, or are empty.
    // Player tiles have the player color overlaid.
    greyOutTiles = mapData.filter((tile) => tile.actionable === 0 || tile.actionable === 2);
    playerColorTiles = mapData.filter((tile) => tile.actionable === 1);
    for (let i = 0; i < greyOutTiles.length; i++) {
      opaqueGreyHex(ctx, greyOutTiles[i]);
    }
    for (let i = 0; i < playerColorTiles.length; i++) {
      opaquePlayerColor(ctx, playerColorTiles[i], playerFillCol);
    }
  }
}






function drawTile(ctx, tileData, images, playerData) {

    // Back to black - only need this while I have the grid above.
    ctx.strokeStyle = 'black'
    
    // Determine colors  colorMap[playerData.color];

    // Complete a hex outline for ownership
    ctx.beginPath();
    for (var j = 0; j < 6; j++) {
      ctx.lineTo(tileData.xHexVert[j], tileData.yHexVert[j]);
    }
    ctx.closePath();
    // What Color should this path be?
    if (tileData.currentOwner === 0) {
        ctx.fillStyle = 'grey';
    } else {
        ctx.fillStyle = colorMap[playerData[tileData.currentOwner - 1].color].border;
    }
    ctx.stroke();
    ctx.fill();
    
    // Fill the inner area based on tile type
    var innerImage;
    if (tileData.tileType === 'f') {
      innerImage = images['tile_food']
    } else if (tileData.tileType === 'w') {
      innerImage = images['tile_wood']
    } else if (tileData.tileType === 'm') {
      innerImage = images['tile_metal']
    } else {
      innerImage = images['tile_sea']
    }
    ctx.drawImage(innerImage, tileData.xPos[0]+1, tileData.yPos[0]+1, tileData.xPos[1]-2, tileData.yPos[1]-2)
  
    // Place Structures
    const structimages = [['struct_red_camp', 'struct_red_house', 'struct_red_village', 'struct_red_castle'],
                          ['struct_blue_camp', 'struct_blue_house', 'struct_blue_village', 'struct_blue_castle'],
                          ['struct_green_camp', 'struct_green_house', 'struct_green_village', 'struct_green_castle'],
                          ['struct_yellow_camp', 'struct_yellow_house', 'struct_yellow_village', 'struct_yellow_castle'],
                          ['struct_purple_camp', 'struct_purple_house', 'struct_purple_village', 'struct_purple_castle'],
                          ['struct_teal_camp', 'struct_teal_house', 'struct_teal_village', 'struct_teal_castle']
                        ]
    if (tileData.structure > 0) {
      const playerStructRef = ['r', 'b', 'g', 'y', 'p', 't'].indexOf(playerData[tileData.currentOwner - 1].color);
      // Draw structures
      ctx.drawImage(images[structimages[playerStructRef][tileData.structure - 1]]
              , tileData.xPos[0] + (1 - structureSizeRatio) / 2 * tileData.xPos[1]
              , tileData.yPos[0] + (1 - structureSizeRatio) / 2 * tileData.yPos[1]
             , structureSizeRatio * tileData.xPos[1]
              , structureSizeRatio * tileData.yPos[1])
    }



    // DELETE WHEN DONE
    // Hex ID
    ctx.fillStyle = 'black';
    ctx.fillRect(tileData.xPos[0] + (1 - structureSizeRatio) / 2 * tileData.xPos[1] 
      , tileData.yPos[0] + (1 - structureSizeRatio) / 2 * tileData.yPos[1] + 10
      , 15, 15);
    ctx.fillStyle = 'white';
    ctx.fillText(tileData.id
            , tileData.xPos[0] + (1 - structureSizeRatio) / 2 * tileData.xPos[1]
            , tileData.yPos[0] + (1 - structureSizeRatio) / 2 * tileData.yPos[1] + 20)
    // Actionable Status
    ctx.fillStyle = 'black';
    ctx.fillRect(tileData.xPos[0] + (1 - structureSizeRatio) / 2 * tileData.xPos[1] +20
      , tileData.yPos[0] + (1 - structureSizeRatio) / 2 * tileData.yPos[1] + 30
      , 15, 15);
    ctx.fillStyle = 'white';
    ctx.fillText(tileData.actionable
            , tileData.xPos[0] + (1 - structureSizeRatio) / 2 * tileData.xPos[1] + 20
            , tileData.yPos[0] + (1 - structureSizeRatio) / 2 * tileData.yPos[1] + 40)
  
  }


function highlightTile(ctx, tileData, images) {
    // Hexes that are hovered over
    if (tileData.hover === 1) {
      ctx.beginPath();
      for (var j = 0; j < 6; j++) {
        ctx.lineTo(tileData.xHexVert[j], tileData.yHexVert[j]);
      }
      ctx.closePath();
      ctx.strokeStyle = 'white';
      ctx.lineWidth  = 3;
      ctx.stroke();
    }

 }


 function opaqueGreyHex(ctx, tileData) {
      ctx.beginPath();
      for (var j = 0; j < 6; j++) {
        ctx.lineTo(tileData.xHexVert[j], tileData.yHexVert[j]);
      }
      ctx.closePath();
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
      ctx.fill();
 }

function opaquePlayerColor(ctx, tileData, playerFillCol) {
    ctx.beginPath();
    for (var j = 0; j < 6; j++) {
      ctx.lineTo(tileData.xHexVert[j], tileData.yHexVert[j]);
    }
    ctx.closePath();
    ctx.fillStyle = playerFillCol;
    ctx.fill();
}


function hexToRgba(hex, opacity) {
  // Remove the hash at the start if it's there
  hex = hex.replace('#', '');

  // Parse r, g, b values
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  // Construct the rgba color
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}


function DrawActionMenu(canvas, ctx, images, gamePlayData, playerData, actionMenuParams) {

  const actionMenuWidth = actionMenuParams.width;
  const actionMenuHeight = actionMenuParams.height;
  const actionMenuYOffset = actionMenuParams.yOffset;
  const actionMenuIconSize = actionMenuParams.iconSize;
  const actionMenuIconOffset = actionMenuParams.iconOffset;
  const playerBoxWidth = actionMenuParams.playerBoxWidth;
  //console.log(actionMenuParams);
  var customMargin;
  if (playerBoxWidth <= 200) {
    customMargin = 1;
  } else if (playerBoxWidth <= 300) {
    customMargin = 1;
  } else if (playerBoxWidth <= 400) {
      customMargin = 1.5;
  } else {
      customMargin = 2;
  }
  
  ctx.strokeStyle = colorMap[playerData[gamePlayData.currentPlayer].color].border;
  
  ctx.fillStyle = colorMap[playerData[gamePlayData.currentPlayer].color].background;


  // Determine where to show the menu
  var xpos;
  if (gamePlayData.currentPlayer === gamePlayData.numberPlayers - 1) {
      // Show on the left of screen 
      xpos = canvas.width - actionMenuWidth - customMargin * 16; 
  } else {
      // Show it on the right of screen
      xpos = gamePlayData.currentPlayer * playerBoxWidth + customMargin * 16; 
  }
  ctx.strokeRect(xpos, actionMenuYOffset, actionMenuWidth, actionMenuHeight)
  ctx.fillRect(xpos, actionMenuYOffset, actionMenuWidth, actionMenuHeight)


  // Fill in the icons
  const iconlist = ['icon_action_v2_Research', 'icon_action_v2_Generate', 'icon_action_v2_develop', 
                    'icon_action_v2_Join', 'icon_action_v2_Trade', 'icon_action_v2_EndTurn'];

  ctx.fillStyle = 'white'
  for (var i = 0; i < 6; i++) {
    var icon_xpos = actionMenuIconOffset + xpos + i * actionMenuHeight;
    var icon_ypos = actionMenuYOffset + 0.5 * actionMenuHeight * (1 - actionMenuIconSize);
    const circleRadius = (actionMenuHeight * actionMenuIconSize) / 2;
    if (actionMenuParams.iconHover[i] === 1) {
      fillCircle(ctx, icon_xpos + circleRadius, icon_ypos + circleRadius, circleRadius-1, colorMap[playerData[gamePlayData.currentPlayer].color].border)
      // Add tool tip
      addToolTip(ctx, icon_xpos, icon_ypos, actionMenuHeight, i);
    } 
    drawCircle(ctx, icon_xpos + circleRadius, icon_ypos + circleRadius, circleRadius, colorMap[playerData[gamePlayData.currentPlayer].color].border)
    ctx.drawImage(images[iconlist[i]], icon_xpos + 0.25 * circleRadius, icon_ypos + 0.25 * circleRadius, circleRadius * 1.5 , circleRadius * 1.5 )
  }

    
}



function drawCircle(ctx, x, y, rad, color) {
    ctx.beginPath();
    ctx.arc(x, y, rad, 0, 2 * Math.PI);
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
}

function fillCircle(ctx, x, y, rad, color) {
  ctx.beginPath();
  ctx.arc(x, y, rad, 0, 2 * Math.PI);
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.fill();
}

function addToolTip(ctx, iconx, icony, actionMenuHeight, iconid) {
      const padding = 5;
      const actionMenuHelpText = ['Research special abilities'
                              , 'Develop your own hex'
                              , 'Develop an empty, neighbouring hex'
                              , 'Take control of another players hex neighbouring your own'
                              , 'Trade resources with the bank'
                              , 'End Turn'
      ];

      const text = actionMenuHelpText[iconid];
      ctx.font = '12px Arial';
      const textWidth = ctx.measureText(text).width;
      const textHeight = 12; // Approximate height of the text

      var x;
      if (iconid === 0) {
        x = iconx + padding;
      } else if (iconid === 5) {
        x = iconx + actionMenuHeight - textWidth - padding;
      } else {
        x = iconx + 0.5 * actionMenuHeight - 0.5 * textWidth;
      }
      var y = icony + actionMenuHeight + textHeight;

      // Draw tooltip background
      ctx.fillStyle = 'yellow';
      ctx.fillRect(x, y - textHeight - padding * 2, textWidth + padding * 2, textHeight + padding * 2);

      // Draw tooltip text
      ctx.fillStyle = 'black';
      ctx.fillText(text, x + padding, y - padding);
}