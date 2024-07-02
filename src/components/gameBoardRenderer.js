import { colorMap } from '../constants/constants';

// Rending the board
const structureSizeRatio = 0.4;



export const DrawBoard = (canvas, ctx, images, mapData, playerData) => {

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
      highlightTile(ctx, mapData[i], images);
    }
}


function drawTile(ctx, tileData, images, playerData) {

    // Colour List (red, blue, green, yellow, purple, teal)

    // Structure List



    
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
  
  }


function highlightTile(ctx, tileData, images) {
    // Hexes that are hovered over / clicked
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


