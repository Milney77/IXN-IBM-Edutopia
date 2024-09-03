import { colourMap } from '../constants/constants';
import { resourceCosts } from '../constants/constants';

// Rending the board
const structureSizeRatio = 0.4;


export const DrawBoard = (canvas, ctx, images, mapData, playerData, gamePlayData, actionMenuParams) => {

    // Clear board
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the tiles
    for (let i = 0; i < mapData.length; i++) {
        //drawTile(ctx, boardStructure[rows][cols], rows, cols, tileWidth, tileHeight_full, tileHeight_trim, images);
        drawTile(ctx, mapData[i], images, playerData);
      }

    // Highlight tiles
    for (let i = 0; i < mapData.length; i++) {
      highlightTile(ctx, mapData[i], images, mapData, playerData, gamePlayData, canvas);
    }
    

    // Draw the action menu
    if (gamePlayData.currentPhase === 2 && playerData[gamePlayData.currentPlayer].compPlayer === 0) {
      DrawActionMenu(canvas, ctx, images, gamePlayData, playerData, actionMenuParams);
    }

    // 'Grey' out invalid hexes
    const playerFillCol = hexToRgba(colourMap[playerData[gamePlayData.currentPlayer].colour].background, 0.5);
    //console.log(playerFillCol);
    var greyOutTiles;
    var playerColourTiles;
    if (gamePlayData.actionPhaseSet === 1) {
      // Grey out hexes that the player doesn't own.
      // If they have structure level 4, overlay the player colour over that hex.
      greyOutTiles = mapData.filter((tile) => tile.actionable !== 1);
      playerColourTiles = mapData.filter((tile) => tile.actionable === 1 && tile.structure === 4);
      for (let i = 0; i < greyOutTiles.length; i++) {
        opaqueGreyHex(ctx, greyOutTiles[i]);
      }
      for (let i = 0; i < playerColourTiles.length; i++) {
        opaquePlayerColour(ctx, playerColourTiles[i], playerFillCol);
      }

    } else if (gamePlayData.actionPhaseSet === 2) {
      // Grey out hexes that are not adjacent to the player, or are owned by other players.
      // Player tiles have the player colour overlaid.
      greyOutTiles = mapData.filter((tile) => tile.actionable === 0 || tile.actionable === 3);
      playerColourTiles = mapData.filter((tile) => tile.actionable === 1);
      for (let i = 0; i < greyOutTiles.length; i++) {
        opaqueGreyHex(ctx, greyOutTiles[i]);
      }
      for (let i = 0; i < playerColourTiles.length; i++) {
        opaquePlayerColour(ctx, playerColourTiles[i], playerFillCol);
      }

  } else if (gamePlayData.actionPhaseSet === 3) {
    // Grey out hexes that are not adjacent to the player, or are empty.
    // Player tiles have the player colour overlaid.
    greyOutTiles = mapData.filter((tile) => tile.actionable === 0 || tile.actionable === 2);
    playerColourTiles = mapData.filter((tile) => tile.actionable === 1);
    for (let i = 0; i < greyOutTiles.length; i++) {
      opaqueGreyHex(ctx, greyOutTiles[i]);
    }
    for (let i = 0; i < playerColourTiles.length; i++) {
      opaquePlayerColour(ctx, playerColourTiles[i], playerFillCol);
    }
  }
 
  // Fireworks for the end of the game (TODO)

}




function drawTile(ctx, tileData, images, playerData, canvaswidth) {
    // Back to black - only need this while I have the grid above.
    ctx.strokeStyle = 'black'
    
    // Determine colours  colourMap[playerData.colour];

    // Complete a hex outline for ownership
    ctx.beginPath();
    for (var j = 0; j < 6; j++) {
      ctx.lineTo(tileData.xHexVert[j], tileData.yHexVert[j]);
    }
    ctx.closePath();
    // What Colour should this path be?
    if (tileData.currentOwner === 0) {
        ctx.fillStyle = 'grey';
    } else {
        ctx.fillStyle = colourMap[playerData[tileData.currentOwner - 1].colour].border;
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
      const playerStructRef = ['r', 'b', 'g', 'y', 'p', 't'].indexOf(playerData[tileData.currentOwner - 1].colour);
      // Draw structures
      ctx.drawImage(images[structimages[playerStructRef][tileData.structure - 1]]
              , tileData.xPos[0] + (1 - structureSizeRatio) / 2 * tileData.xPos[1]
              , tileData.yPos[0] + (1 - structureSizeRatio) / 2 * tileData.yPos[1]
             , structureSizeRatio * tileData.xPos[1]
              , structureSizeRatio * tileData.yPos[1])
    }


    /*
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

            */

  } 


function highlightTile(ctx, tileData, images, mapData, playerData, gamePlayData, canvas) {
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

      // Add a tool tip
      const resource = tileData.tileType === 'w' ? 'Wood' : tileData.tileType === 'f' ? 'Food' : tileData.tileType === 'm' ? 'Metal' : 'None';
      // Determine what action the player could take.
      var actionType;
      if (tileData.actionable === 0) {actionType = 'None';}
      else if (tileData.actionable === 1 && tileData.structure != 4) {actionType = 'Build';}
      else if (tileData.actionable === 2) {actionType = 'Develop';}
      else if (tileData.actionable === 3) {actionType = 'Takeover';}
      else {actionType = 'None';}

      // Determine costs of action.
      var actionCost;
      if (actionType === 'Build') {
        if (tileData.structure === 1) {
          actionCost = resourceCosts.house;
        } else if (tileData.structure === 2) {
          actionCost = resourceCosts.village;
        } else if (tileData.structure === 3) {
          actionCost = resourceCosts.castle;
        }
      } else if (actionType === 'Develop') {
        actionCost = resourceCosts.expand;
      } else if (actionType === 'Takeover') {
        actionCost = resourceCosts.takeover;
      } else {
        actionCost = {wood: 0, food: 0, metal: 0, tech: 0};
      }
      
      const tiptext1 = 'Tile ID: ' + tileData.id + ', Resource: ' + resource;
      const tiptext2 = 'Action: ' + actionType;
      const tiptext3 = 'Cost : [' + (actionCost.wood > 0 ? actionCost.wood + ' wood ' : '') + (actionCost.food > 0 ? actionCost.food + ' food ' : '') + (actionCost.metal > 0 ? actionCost.metal + ' metal ' : '') + ']'
      // Positioning parameters
      const topPoint = {x: tileData.xHexVert[1], y: tileData.yHexVert[1]};
      const bottomPoint = {x: tileData.xHexVert[4], y: (tileData.yHexVert[1] + tileData.yHexVert[4]) / 2};
      const padding = 5;
      const textheight = 18;
      ctx.font = '18px Arial';

      // Determine size
      const tiptext1length = ctx.measureText(tiptext1).width;
      const tiptext2length = ctx.measureText(tiptext2).width;
      const tiptext3length = ctx.measureText(tiptext3).width;
      
      var tipboxHeight;
      var tipboxWidth;
      if (gamePlayData.currentPhase !== 2) {
        tipboxHeight = padding * 2 + textheight;
        tipboxWidth = padding * 2 + tiptext1length;
      } else if (actionType === 'None') {
        tipboxHeight = padding * 2 + textheight * 2;
        tipboxWidth = padding * 2 + Math.max(tiptext1length, tiptext2length);
      } else {
        tipboxHeight = padding * 2 + textheight * 3;
        tipboxWidth = padding * 2 + Math.max(tiptext1length, tiptext2length, tiptext3length);
      }
      
      // Tips will always go at the top of the hex - unless its the first row, then it goes in the middle
      // But horizon position - needs to be contained in the screen width;
      const tipPosX = Math.min( canvas.width - tipboxWidth, Math.max(0, topPoint.x - Math.floor(tipboxWidth / 2)));
      var tipPosY;
      if (tileData.row === 0) {
        tipPosY = bottomPoint.y - Math.floor(tipboxHeight / 2);
      } else {
        tipPosY = topPoint.y - Math.floor(tipboxHeight / 2);
      }
      

      // Draw tooltip background
      ctx.fillStyle = '#333333'; // This should be pretty similar to the tooltip background in MaterialUI's built in tooltips.
      ctx.fillRect(tipPosX, tipPosY, tipboxWidth, tipboxHeight);

      // Draw tooltip text
      ctx.fillStyle = 'white';
      ctx.fillText(tiptext1, tipPosX + padding, tipPosY + textheight);
      if (gamePlayData.currentPhase === 2) {
        ctx.fillText(tiptext2, tipPosX + padding, tipPosY + textheight * 2);
        if (actionType !== 'None') {
          ctx.fillText(tiptext3, tipPosX + padding, tipPosY + textheight * 3);
        }
      }
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

function opaquePlayerColour(ctx, tileData, playerFillCol) {
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

  // Construct the rgba colour
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}


function DrawActionMenu(canvas, ctx, images, gamePlayData, playerData, actionMenuParams) {
  const actionMenuWidth = actionMenuParams.width;
  const actionMenuHeight = actionMenuParams.height;
  const actionMenuYOffset = actionMenuParams.yOffset;
  const actionMenuIconSize = actionMenuParams.iconSize;
  const actionMenuIconOffset = actionMenuParams.iconOffset;
  const playerBoxWidth = actionMenuParams.playerBoxWidth;
  const canvasWidth = actionMenuParams.screenwidthCanvas;
  const dimContextWidth = actionMenuParams.screenwidthDimContext;

  
  //console.log(actionMenuParams);
  var customMargin = Math.min(1.5, Math.max(0, 0.25 * Math.floor((playerBoxWidth - 100)/100)));
  
  //var customMargin;
  //if (playerBoxWidth <= 200) {
  //  customMargin = 1;
  //} else if (playerBoxWidth <= 300) {
  //  customMargin = 1;
  //} else if (playerBoxWidth <= 400) {
  //    customMargin = 1.5;
  //{ else {
  //    customMargin = 2;
  //}
  ctx.strokeStyle = colourMap[playerData[gamePlayData.currentPlayer].colour].border;
  
  ctx.fillStyle = colourMap[playerData[gamePlayData.currentPlayer].colour].background;


  // Determine where to show the menu
  const widthAdj = Math.max(0, (canvasWidth - dimContextWidth)) / 2;
  var xpos;
  if (gamePlayData.currentPlayer === gamePlayData.numberPlayers - 1) {
      // Show on the left of screen 
      xpos = canvas.width - actionMenuWidth - customMargin * 16 - widthAdj; 
  } else {
      // Show it on the right of screen
      xpos = widthAdj + gamePlayData.currentPlayer * playerBoxWidth + customMargin * 16 ; 
  }
  ctx.strokeRect(xpos, actionMenuYOffset, actionMenuWidth, actionMenuHeight)
  ctx.fillRect(xpos, actionMenuYOffset, actionMenuWidth, actionMenuHeight)
  //console.log('X:', xpos, ', Width Adj:', widthAdj, ', CurrPlayer: ', gamePlayData.currentPlayer, ',Box Width: ', playerBoxWidth, ', Margin:', customMargin);

  // Fill in the icons
  const iconlist = ['icon_action_v2_Build', 'icon_action_v2_develop', 
                    'icon_action_v2_Join', 'icon_action_v2_Trade', 'icon_action_v2_EndTurn'];

  ctx.fillStyle = 'white'
  for (var i = 0; i < 5; i++) {
    var icon_xpos = actionMenuIconOffset + xpos + i * actionMenuHeight;
    var icon_ypos = actionMenuYOffset + 1 * actionMenuHeight * (1 - actionMenuIconSize);
    const circleRadius = (actionMenuHeight * actionMenuIconSize) / 2;
    
    drawCircle(ctx, icon_xpos + circleRadius, icon_ypos + circleRadius, circleRadius, colourMap[playerData[gamePlayData.currentPlayer].colour].border)
    ctx.drawImage(images[iconlist[i]], icon_xpos + 0.25 * circleRadius, icon_ypos + 0.25 * circleRadius, circleRadius * 1.5 , circleRadius * 1.5 )
  }

  // Highlighting
  for (var i = 0; i < 5; i++) {
    var icon_xpos = actionMenuIconOffset + xpos + i * actionMenuHeight;
    var icon_ypos = actionMenuYOffset + 0.75 * actionMenuHeight * (1 - actionMenuIconSize);
    const circleRadius = (actionMenuHeight * actionMenuIconSize) / 2;
    if (actionMenuParams.iconHover[i] === 1) {
    fillCircle(ctx, icon_xpos + circleRadius, icon_ypos + circleRadius, circleRadius-1, colourMap[playerData[gamePlayData.currentPlayer].colour].border)
    // Add tool tip
    ctx.drawImage(images[iconlist[i]], icon_xpos + 0.25 * circleRadius, icon_ypos + 0.25 * circleRadius, circleRadius * 1.5 , circleRadius * 1.5 )
    addToolTip(ctx, icon_xpos, icon_ypos, actionMenuHeight, i);
    } 
  }

    
}


function drawCircle(ctx, x, y, rad, colour) {
    ctx.beginPath();
    ctx.arc(x, y, rad, 0, 2 * Math.PI);
    ctx.strokeStyle = colour;
    ctx.lineWidth = 2;
    ctx.stroke();
}

function fillCircle(ctx, x, y, rad, colour) {
  ctx.beginPath();
  ctx.arc(x, y, rad, 0, 2 * Math.PI);
  ctx.strokeStyle = colour;
  ctx.lineWidth = 2;
  ctx.fill();
}

function addToolTip(ctx, iconx, icony, actionMenuHeight, iconid) {
      const padding = 5;
      const actionMenuHelpText = ['Build - Upgrade a structure on your own hex'
                              , 'Develop - Take over an empty adjacent hex'
                              , 'TakeOver - Take over an adjacent hex owned by another player'
                              , 'Trade - Trade resources with the bank'
                              , 'End Turn'
      ];

      const text = actionMenuHelpText[iconid];
      ctx.font = '18px Arial';
      const textWidth = ctx.measureText(text).width;
      const textHeight = 18; // Approximate height of the text

      var x;
      if (iconid < 5) {
        x = iconx + padding;
      } else if (iconid === 5) {
        x = iconx + actionMenuHeight - textWidth - padding;
      } else {
        x = iconx + 0.5 * actionMenuHeight - 0.5 * textWidth;
      }
      var y = icony + actionMenuHeight + textHeight;

      // Draw tooltip background
      ctx.fillStyle = '#333333'; // This should be pretty similar to the tooltip background in MaterialUI's built in tooltips.
      ctx.fillRect(x, y - textHeight - padding * 2, textWidth + padding * 2, textHeight + padding * 2);

      // Draw tooltip text
      ctx.fillStyle = 'white';
      ctx.fillText(text, x + padding, y - padding);
}

