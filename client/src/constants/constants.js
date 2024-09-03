import { useState, useCallback } from 'react';

// STATIC DATA //
export const imageSources = [
    { name: 'tile_food', url: 'images/tiles/food.png' }, 
    { name: 'tile_wood', url: 'images/tiles/wood.png' }, 
    { name: 'tile_metal', url: 'images/tiles/metal.png' }, 
    { name: 'tile_sea', url: 'images/tiles/sea.png' }, 
    { name: 'tile_border_grey', url: 'images/tiles/outer-grey.png' }, 
    { name: 'tile_border_red', url: 'images/tiles/outer-red.png' }, 
    { name: 'tile_border_blue', url: 'images/tiles/outer-blue.png' }, 
    { name: 'tile_border_yellow', url: 'images/tiles/outer-yellow.png' }, 
    { name: 'tile_border_green', url: 'images/tiles/outer-green.png' }, 
  
    { name: 'struct_red_camp', url: 'images/structures/red0-camp.png' }, 
    { name: 'struct_red_house', url: 'images/structures/red1-house.png' }, 
    { name: 'struct_red_village', url: 'images/structures/red2-village.png' }, 
    { name: 'struct_red_castle', url: 'images/structures/red3-castle.png' }, 
    { name: 'struct_blue_camp', url: 'images/structures/blue0-camp.png' }, 
    { name: 'struct_blue_house', url: 'images/structures/blue1-house.png' }, 
    { name: 'struct_blue_village', url: 'images/structures/blue2-village.png' }, 
    { name: 'struct_blue_castle', url: 'images/structures/blue3-castle.png' }, 
    { name: 'struct_yellow_camp', url: 'images/structures/yellow0-camp.png' }, 
    { name: 'struct_yellow_house', url: 'images/structures/yellow1-house.png' }, 
    { name: 'struct_yellow_village', url: 'images/structures/yellow2-village.png' }, 
    { name: 'struct_yellow_castle', url: 'images/structures/yellow3-castle.png' }, 
    { name: 'struct_green_camp', url: 'images/structures/green0-camp.png' }, 
    { name: 'struct_green_house', url: 'images/structures/green1-house.png' }, 
    { name: 'struct_green_village', url: 'images/structures/green2-village.png' }, 
    { name: 'struct_green_castle', url: 'images/structures/green3-castle.png' }, 
    
    { name: 'struct_purple_camp', url: 'images/structures/purple0-camp.png' }, 
    { name: 'struct_purple_house', url: 'images/structures/purple1-house.png' }, 
    { name: 'struct_purple_village', url: 'images/structures/purple2-village.png' }, 
    { name: 'struct_purple_castle', url: 'images/structures/purple3-castle.png' }, 
    { name: 'struct_teal_camp', url: 'images/structures/teal0-camp.png' }, 
    { name: 'struct_teal_house', url: 'images/structures/teal1-house.png' }, 
    { name: 'struct_teal_village', url: 'images/structures/teal2-village.png' }, 
    { name: 'struct_teal_castle', url: 'images/structures/teal3-castle.png' }, 



    { name: 'icon_action_develop', url: 'images/icons/icon-develop.png'},
    { name: 'icon_action_resources', url: 'images/icons/icon-generateresources.png'},
    { name: 'icon_action_research', url: 'images/icons/icon-research.png'},
    { name: 'icon_action_takeover', url: 'images/icons/icon-takeover.png'},
    { name: 'icon_action_trade', url: 'images/icons/icon-trade.png'},

    { name: 'icon_action_v2_develop',  url: 'images/icons/icon-v2-Develop.png'}, 
    { name: 'icon_action_v2_EndTurn',  url: 'images/icons/icon-v2-EndTurn.png'}, 
    { name: 'icon_action_v2_Generate', url: 'images/icons/icon-v2-Generate.png'}, 
    { name: 'icon_action_v2_Build',    url: 'images/icons/icon-v2-Build.png'}, 
    { name: 'icon_action_v2_Join',     url: 'images/icons/icon-v2-Join.png'}, 
    { name: 'icon_action_v2_Research', url: 'images/icons/icon-v2-Research.png'}, 
    { name: 'icon_action_v2_Trade',    url: 'images/icons/icon-v2-Trade.png'}, 

    { name: 'icon_food', url: 'images/icons/icons-food.png'},
    { name: 'icon_metal', url: 'images/icons/icons-metal.png'},
    { name: 'icon_wood', url: 'images/icons/icons-tech.png'},
    { name: 'icon_tech', url: 'images/icons/icons-wood.png'},
    { name: 'icon_vp', url: 'images/icons/vp-symbol.png'},

    { name: 'ibm_skills_build_button',    url: 'images/icons/ibm-skills-build-logo-placeholder.png'},
    { name: 'ibm_skills_build_button_v2', url: 'images/icons/icon-v2-skillsbuild.png'},

  
  ];

export const colourMap = {
    r: { border: '#ff0000', background: '#ffcccc' },
    b: { border: '#0000ff', background: '#ccccff' },
    g: { border: '#00ff00', background: '#ccffcc' },
    y: { border: '#ffff00', background: '#ffffcc' },
    p: { border: '#800080', background: '#e6ccff' },
    t: { border: '#008080', background: '#ccffff' },
}; 


export const resourceCosts = {
    house:    {wood: 0,  food: 2,  metal: 4,  tech: 0, },
    village:  {wood: 1,  food: 3,  metal: 6,  tech: 0, },
    castle:   {wood: 2,  food: 4,  metal: 8,  tech: 0, },
    takeover: {wood: 2,  food: 4,  metal: 2,  tech: 0, },
    expand:   {wood: 4,  food: 2,  metal: 0,  tech: 0, },
}

export const tradingRatios = {
    tradeRatioFood: 3,
    tradeRatioWood: 3,
    tradeRatioMetal: 3,
    tradeRatioTech: 1,
    tradeBankRatioFood: 1,
    tradeBankRatioWood: 1,
    tradeBankRatioMetal: 1,
    tradeBankRatioTech: 50
}

export const initresources = {
    wood: 5
    , food: 5
    , metal: 5
    , tech: 0
}

export const aiparameters = [
    { strat: 'e'
      , resourceRatios: {woodRatio:  0.5, foodRatio:  0.25, metalRatio: 0.25}
      , minTiles: 4
      , structureToHexRatio: 1.25
      , buildWeight: -0.25
      , expandWeight: 0.25
    },
    { strat: 'b'
        , resourceRatios: {woodRatio:  0.25, foodRatio:  0.25, metalRatio: 0.5}
        , minTiles: 2
        , structureToHexRatio: 1.75
        , buildWeight: 0.25
        , expandWeight: -0.25
      },
      { strat: 'm'
        , resourceRatios: {woodRatio:  0.333, foodRatio:  0.333, metalRatio: 0.333}
        , minTiles: 3
        , structureToHexRatio: 1.5
        , buildWeight: 0
        , expandWeight: 0
      }
];



// DATA THAT CAN CHANGE DURING THE USE OF THE APP //

// Game Board Data
const boardData1 = {
    name: 'small', imageRef: 'small.png', rows: 3, evenRowCols: 5, oddRowCols: 6, maxPlayers: 2, victoryPoints: 10, maxCastles: 1, maxVillages: 2, minQuizzes: 1, mapData: [
    { id: 0, row: 0, col: 0, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
    { id: 1, row: 0, col: 1, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
    { id: 2, row: 0, col: 2, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
    { id: 3, row: 0, col: 3, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
    { id: 4, row: 0, col: 4, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
    { id: 5, row: 1, col: 0, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
    { id: 6, row: 1, col: 1, tileType:'w', startSquare: 1, structure: 0, currentOwner: 0},
    { id: 7, row: 1, col: 2, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
    { id: 8, row: 1, col: 3, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
    { id: 9, row: 1, col: 4, tileType:'f', startSquare: 2, structure: 0, currentOwner: 0},
    { id: 10, row: 1, col: 5, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
    { id: 11, row: 2, col: 0, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
    { id: 12, row: 2, col: 1, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
    { id: 13, row: 2, col: 2, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
    { id: 14, row: 2, col: 3, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
    { id: 15, row: 2, col: 4, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
    ]};
    
    const boardData2 = {
        name: 'medium', imageRef: 'medium.png', rows: 5, evenRowCols: 10, oddRowCols: 9, maxPlayers: 4, victoryPoints: 20, maxCastles: 1, maxVillages: 4, minQuizzes: 2, mapData: [
        { id: 0, row: 0, col: 0, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 1, row: 0, col: 1, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 2, row: 0, col: 2, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 3, row: 0, col: 3, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 4, row: 0, col: 4, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 5, row: 0, col: 5, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 6, row: 0, col: 6, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 7, row: 0, col: 7, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 8, row: 0, col: 8, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 9, row: 0, col: 9, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 10, row: 1, col: 0, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 11, row: 1, col: 1, tileType:'w', startSquare: 1, structure: 0, currentOwner: 0},
        { id: 12, row: 1, col: 2, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 13, row: 1, col: 3, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 14, row: 1, col: 4, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 15, row: 1, col: 5, tileType:'f', startSquare: 4, structure: 0, currentOwner: 0},
        { id: 16, row: 1, col: 6, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 17, row: 1, col: 7, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 18, row: 1, col: 8, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 19, row: 2, col: 0, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 20, row: 2, col: 1, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 21, row: 2, col: 2, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 22, row: 2, col: 3, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 23, row: 2, col: 4, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 24, row: 2, col: 5, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 25, row: 2, col: 6, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 26, row: 2, col: 7, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 27, row: 2, col: 8, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 28, row: 2, col: 9, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 29, row: 3, col: 0, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 30, row: 3, col: 1, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 31, row: 3, col: 2, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 32, row: 3, col: 3, tileType:'m', startSquare: 3, structure: 0, currentOwner: 0},
        { id: 33, row: 3, col: 4, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 34, row: 3, col: 5, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 35, row: 3, col: 6, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 36, row: 3, col: 7, tileType:'f', startSquare: 2, structure: 0, currentOwner: 0},
        { id: 37, row: 3, col: 8, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 38, row: 4, col: 0, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 39, row: 4, col: 1, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 40, row: 4, col: 2, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 41, row: 4, col: 3, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 42, row: 4, col: 4, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 43, row: 4, col: 5, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 44, row: 4, col: 6, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 45, row: 4, col: 7, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 46, row: 4, col: 8, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
        { id: 47, row: 4, col: 9, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
        ]};
        
        const boardData3 = {
            name: 'large', imageRef: 'large.png', rows: 8, evenRowCols: 16, oddRowCols: 15, maxPlayers: 6, victoryPoints: 30, maxCastles: 1, maxVillages: 6, minQuizzes: 3, mapData: [
            { id: 0, row: 0, col: 0, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 1, row: 0, col: 1, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 2, row: 0, col: 2, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 3, row: 0, col: 3, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 4, row: 0, col: 4, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 5, row: 0, col: 5, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 6, row: 0, col: 6, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 7, row: 0, col: 7, tileType:'f', startSquare: 6, structure: 0, currentOwner: 0},
            { id: 8, row: 0, col: 8, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 9, row: 0, col: 9, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 10, row: 0, col: 10, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 11, row: 0, col: 11, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 12, row: 0, col: 12, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 13, row: 0, col: 13, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 14, row: 0, col: 14, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 15, row: 0, col: 15, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 16, row: 1, col: 0, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 17, row: 1, col: 1, tileType:'m', startSquare: 1, structure: 0, currentOwner: 0},
            { id: 18, row: 1, col: 2, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 19, row: 1, col: 3, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 20, row: 1, col: 4, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 21, row: 1, col: 5, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 22, row: 1, col: 6, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 23, row: 1, col: 7, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 24, row: 1, col: 8, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 25, row: 1, col: 9, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 26, row: 1, col: 10, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 27, row: 1, col: 11, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 28, row: 1, col: 12, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 29, row: 1, col: 13, tileType:'w', startSquare: 3, structure: 0, currentOwner: 0},
            { id: 30, row: 1, col: 14, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 31, row: 2, col: 0, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 32, row: 2, col: 1, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 33, row: 2, col: 2, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 34, row: 2, col: 3, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 35, row: 2, col: 4, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 36, row: 2, col: 5, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 37, row: 2, col: 6, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 38, row: 2, col: 7, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 39, row: 2, col: 8, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 40, row: 2, col: 9, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 41, row: 2, col: 10, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 42, row: 2, col: 11, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 43, row: 2, col: 12, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 44, row: 2, col: 13, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 45, row: 2, col: 14, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 46, row: 2, col: 15, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 47, row: 3, col: 0, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 48, row: 3, col: 1, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 49, row: 3, col: 2, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 50, row: 3, col: 3, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 51, row: 3, col: 4, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 52, row: 3, col: 5, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 53, row: 3, col: 6, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 54, row: 3, col: 7, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 55, row: 3, col: 8, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 56, row: 3, col: 9, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 57, row: 3, col: 10, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 58, row: 3, col: 11, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 59, row: 3, col: 12, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 60, row: 3, col: 13, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 61, row: 3, col: 14, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 62, row: 4, col: 0, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 63, row: 4, col: 1, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 64, row: 4, col: 2, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 65, row: 4, col: 3, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 66, row: 4, col: 4, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 67, row: 4, col: 5, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 68, row: 4, col: 6, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 69, row: 4, col: 7, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 70, row: 4, col: 8, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 71, row: 4, col: 9, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 72, row: 4, col: 10, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 73, row: 4, col: 11, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 74, row: 4, col: 12, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 75, row: 4, col: 13, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 76, row: 4, col: 14, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 77, row: 4, col: 15, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 78, row: 5, col: 0, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 79, row: 5, col: 1, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 80, row: 5, col: 2, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 81, row: 5, col: 3, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 82, row: 5, col: 4, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 83, row: 5, col: 5, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 84, row: 5, col: 6, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 85, row: 5, col: 7, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 86, row: 5, col: 8, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 87, row: 5, col: 9, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 88, row: 5, col: 10, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 89, row: 5, col: 11, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 90, row: 5, col: 12, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 91, row: 5, col: 13, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 92, row: 5, col: 14, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 93, row: 6, col: 0, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 94, row: 6, col: 1, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 95, row: 6, col: 2, tileType:'f', startSquare: 4, structure: 0, currentOwner: 0},
            { id: 96, row: 6, col: 3, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 97, row: 6, col: 4, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 98, row: 6, col: 5, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 99, row: 6, col: 6, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 100, row: 6, col: 7, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 101, row: 6, col: 8, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 102, row: 6, col: 9, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 103, row: 6, col: 10, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 104, row: 6, col: 11, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 105, row: 6, col: 12, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 106, row: 6, col: 13, tileType:'m', startSquare: 2, structure: 0, currentOwner: 0},
            { id: 107, row: 6, col: 14, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 108, row: 6, col: 15, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 109, row: 7, col: 0, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 110, row: 7, col: 1, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 111, row: 7, col: 2, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 112, row: 7, col: 3, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 113, row: 7, col: 4, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 114, row: 7, col: 5, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 115, row: 7, col: 6, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 116, row: 7, col: 7, tileType:'f', startSquare: 5, structure: 0, currentOwner: 0},
            { id: 117, row: 7, col: 8, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 118, row: 7, col: 9, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 119, row: 7, col: 10, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 120, row: 7, col: 11, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 121, row: 7, col: 12, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 122, row: 7, col: 13, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
            { id: 123, row: 7, col: 14, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
            ]};
            
            
            const boardData4 = {
                name: 'Very Large', imageRef: 'verylarge.png', rows: 11, evenRowCols: 20, oddRowCols: 19, maxPlayers: 6, victoryPoints: 40, maxCastles: 2, maxVillages: 8, minQuizzes: 3, mapData: [
                { id: 0, row: 0, col: 0, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 1, row: 0, col: 1, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 2, row: 0, col: 2, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 3, row: 0, col: 3, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 4, row: 0, col: 4, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 5, row: 0, col: 5, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 6, row: 0, col: 6, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 7, row: 0, col: 7, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 8, row: 0, col: 8, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 9, row: 0, col: 9, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 10, row: 0, col: 10, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 11, row: 0, col: 11, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 12, row: 0, col: 12, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 13, row: 0, col: 13, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 14, row: 0, col: 14, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 15, row: 0, col: 15, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 16, row: 0, col: 16, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 17, row: 0, col: 17, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 18, row: 0, col: 18, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 19, row: 0, col: 19, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 20, row: 1, col: 0, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 21, row: 1, col: 1, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 22, row: 1, col: 2, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 23, row: 1, col: 3, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 24, row: 1, col: 4, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 25, row: 1, col: 5, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 26, row: 1, col: 6, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 27, row: 1, col: 7, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 28, row: 1, col: 8, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 29, row: 1, col: 9, tileType:'m', startSquare: 5, structure: 0, currentOwner: 0},
                { id: 30, row: 1, col: 10, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 31, row: 1, col: 11, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 32, row: 1, col: 12, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 33, row: 1, col: 13, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 34, row: 1, col: 14, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 35, row: 1, col: 15, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 36, row: 1, col: 16, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 37, row: 1, col: 17, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 38, row: 1, col: 18, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 39, row: 2, col: 0, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 40, row: 2, col: 1, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 41, row: 2, col: 2, tileType:'f', startSquare: 1, structure: 0, currentOwner: 0},
                { id: 42, row: 2, col: 3, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 43, row: 2, col: 4, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 44, row: 2, col: 5, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 45, row: 2, col: 6, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 46, row: 2, col: 7, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 47, row: 2, col: 8, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 48, row: 2, col: 9, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 49, row: 2, col: 10, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 50, row: 2, col: 11, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 51, row: 2, col: 12, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 52, row: 2, col: 13, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 53, row: 2, col: 14, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 54, row: 2, col: 15, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 55, row: 2, col: 16, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 56, row: 2, col: 17, tileType:'f', startSquare: 4, structure: 0, currentOwner: 0},
                { id: 57, row: 2, col: 18, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 58, row: 2, col: 19, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 59, row: 3, col: 0, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 60, row: 3, col: 1, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 61, row: 3, col: 2, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 62, row: 3, col: 3, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 63, row: 3, col: 4, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 64, row: 3, col: 5, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 65, row: 3, col: 6, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 66, row: 3, col: 7, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 67, row: 3, col: 8, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 68, row: 3, col: 9, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 69, row: 3, col: 10, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 70, row: 3, col: 11, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 71, row: 3, col: 12, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 72, row: 3, col: 13, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 73, row: 3, col: 14, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 74, row: 3, col: 15, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 75, row: 3, col: 16, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 76, row: 3, col: 17, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 77, row: 3, col: 18, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 78, row: 4, col: 0, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 79, row: 4, col: 1, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 80, row: 4, col: 2, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 81, row: 4, col: 3, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 82, row: 4, col: 4, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 83, row: 4, col: 5, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 84, row: 4, col: 6, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 85, row: 4, col: 7, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 86, row: 4, col: 8, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 87, row: 4, col: 9, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 88, row: 4, col: 10, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 89, row: 4, col: 11, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 90, row: 4, col: 12, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 91, row: 4, col: 13, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 92, row: 4, col: 14, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 93, row: 4, col: 15, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 94, row: 4, col: 16, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 95, row: 4, col: 17, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 96, row: 4, col: 18, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 97, row: 4, col: 19, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 98, row: 5, col: 0, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 99, row: 5, col: 1, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 100, row: 5, col: 2, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 101, row: 5, col: 3, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 102, row: 5, col: 4, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 103, row: 5, col: 5, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 104, row: 5, col: 6, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 105, row: 5, col: 7, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 106, row: 5, col: 8, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 107, row: 5, col: 9, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 108, row: 5, col: 10, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 109, row: 5, col: 11, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 110, row: 5, col: 12, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 111, row: 5, col: 13, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 112, row: 5, col: 14, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 113, row: 5, col: 15, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 114, row: 5, col: 16, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 115, row: 5, col: 17, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 116, row: 5, col: 18, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 117, row: 6, col: 0, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 118, row: 6, col: 1, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 119, row: 6, col: 2, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 120, row: 6, col: 3, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 121, row: 6, col: 4, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 122, row: 6, col: 5, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 123, row: 6, col: 6, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 124, row: 6, col: 7, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 125, row: 6, col: 8, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 126, row: 6, col: 9, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 127, row: 6, col: 10, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 128, row: 6, col: 11, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 129, row: 6, col: 12, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 130, row: 6, col: 13, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 131, row: 6, col: 14, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 132, row: 6, col: 15, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 133, row: 6, col: 16, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 134, row: 6, col: 17, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 135, row: 6, col: 18, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 136, row: 6, col: 19, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 137, row: 7, col: 0, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 138, row: 7, col: 1, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 139, row: 7, col: 2, tileType:'f', startSquare: 3, structure: 0, currentOwner: 0},
                { id: 140, row: 7, col: 3, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 141, row: 7, col: 4, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 142, row: 7, col: 5, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 143, row: 7, col: 6, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 144, row: 7, col: 7, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 145, row: 7, col: 8, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 146, row: 7, col: 9, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 147, row: 7, col: 10, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 148, row: 7, col: 11, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 149, row: 7, col: 12, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 150, row: 7, col: 13, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 151, row: 7, col: 14, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 152, row: 7, col: 15, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 153, row: 7, col: 16, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 154, row: 7, col: 17, tileType:'w', startSquare: 2, structure: 0, currentOwner: 0},
                { id: 155, row: 7, col: 18, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 156, row: 8, col: 0, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 157, row: 8, col: 1, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 158, row: 8, col: 2, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 159, row: 8, col: 3, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 160, row: 8, col: 4, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 161, row: 8, col: 5, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 162, row: 8, col: 6, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 163, row: 8, col: 7, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 164, row: 8, col: 8, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 165, row: 8, col: 9, tileType:'m', startSquare: 6, structure: 0, currentOwner: 0},
                { id: 166, row: 8, col: 10, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 167, row: 8, col: 11, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 168, row: 8, col: 12, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 169, row: 8, col: 13, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 170, row: 8, col: 14, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 171, row: 8, col: 15, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 172, row: 8, col: 16, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 173, row: 8, col: 17, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 174, row: 8, col: 18, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 175, row: 8, col: 19, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 176, row: 9, col: 0, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 177, row: 9, col: 1, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 178, row: 9, col: 2, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 179, row: 9, col: 3, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 180, row: 9, col: 4, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 181, row: 9, col: 5, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 182, row: 9, col: 6, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 183, row: 9, col: 7, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 184, row: 9, col: 8, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 185, row: 9, col: 9, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 186, row: 9, col: 10, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 187, row: 9, col: 11, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 188, row: 9, col: 12, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 189, row: 9, col: 13, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 190, row: 9, col: 14, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 191, row: 9, col: 15, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 192, row: 9, col: 16, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 193, row: 9, col: 17, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                { id: 194, row: 9, col: 18, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                ]};
                
                const boardData5 = {
                    name: 'Metal Middle', imageRef: 'metalmiddle.png', rows: 7, evenRowCols: 14, oddRowCols: 13, maxPlayers: 4, victoryPoints: 15, maxCastles: 1, maxVillages: 4, minQuizzes: 2, mapData: [
                    { id: 0, row: 0, col: 0, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 1, row: 0, col: 1, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 2, row: 0, col: 2, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 3, row: 0, col: 3, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 4, row: 0, col: 4, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 5, row: 0, col: 5, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 6, row: 0, col: 6, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 7, row: 0, col: 7, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 8, row: 0, col: 8, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 9, row: 0, col: 9, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 10, row: 0, col: 10, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 11, row: 0, col: 11, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 12, row: 0, col: 12, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 13, row: 0, col: 13, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 14, row: 1, col: 0, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 15, row: 1, col: 1, tileType:'w', startSquare: 1, structure: 0, currentOwner: 0},
                    { id: 16, row: 1, col: 2, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 17, row: 1, col: 3, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 18, row: 1, col: 4, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 19, row: 1, col: 5, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 20, row: 1, col: 6, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 21, row: 1, col: 7, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 22, row: 1, col: 8, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 23, row: 1, col: 9, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 24, row: 1, col: 10, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 25, row: 1, col: 11, tileType:'f', startSquare: 4, structure: 0, currentOwner: 0},
                    { id: 26, row: 1, col: 12, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 27, row: 2, col: 0, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 28, row: 2, col: 1, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 29, row: 2, col: 2, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 30, row: 2, col: 3, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 31, row: 2, col: 4, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 32, row: 2, col: 5, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 33, row: 2, col: 6, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 34, row: 2, col: 7, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 35, row: 2, col: 8, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 36, row: 2, col: 9, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 37, row: 2, col: 10, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 38, row: 2, col: 11, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 39, row: 2, col: 12, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 40, row: 2, col: 13, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 41, row: 3, col: 0, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 42, row: 3, col: 1, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 43, row: 3, col: 2, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 44, row: 3, col: 3, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 45, row: 3, col: 4, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 46, row: 3, col: 5, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 47, row: 3, col: 6, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 48, row: 3, col: 7, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 49, row: 3, col: 8, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 50, row: 3, col: 9, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 51, row: 3, col: 10, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 52, row: 3, col: 11, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 53, row: 3, col: 12, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 54, row: 4, col: 0, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 55, row: 4, col: 1, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 56, row: 4, col: 2, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 57, row: 4, col: 3, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 58, row: 4, col: 4, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 59, row: 4, col: 5, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 60, row: 4, col: 6, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 61, row: 4, col: 7, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 62, row: 4, col: 8, tileType:'m', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 63, row: 4, col: 9, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 64, row: 4, col: 10, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 65, row: 4, col: 11, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 66, row: 4, col: 12, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 67, row: 4, col: 13, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 68, row: 5, col: 0, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 69, row: 5, col: 1, tileType:'f', startSquare: 3, structure: 0, currentOwner: 0},
                    { id: 70, row: 5, col: 2, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 71, row: 5, col: 3, tileType:'f', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 72, row: 5, col: 4, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 73, row: 5, col: 5, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 74, row: 5, col: 6, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 75, row: 5, col: 7, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 76, row: 5, col: 8, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 77, row: 5, col: 9, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 78, row: 5, col: 10, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 79, row: 5, col: 11, tileType:'f', startSquare: 2, structure: 0, currentOwner: 0},
                    { id: 80, row: 5, col: 12, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 81, row: 6, col: 0, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 82, row: 6, col: 1, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 83, row: 6, col: 2, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 84, row: 6, col: 3, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 85, row: 6, col: 4, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 86, row: 6, col: 5, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 87, row: 6, col: 6, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 88, row: 6, col: 7, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 89, row: 6, col: 8, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 90, row: 6, col: 9, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 91, row: 6, col: 10, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 92, row: 6, col: 11, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 93, row: 6, col: 12, tileType:'w', startSquare: 0, structure: 0, currentOwner: 0},
                    { id: 94, row: 6, col: 13, tileType:'s', startSquare: 0, structure: 0, currentOwner: 0},
                    ]};
                    
                    
                    
                        

export const boards = [boardData1, boardData2, boardData3, boardData4, boardData5];

const playerDataInit = [
    {id: 0, name: 'Human Player 1'           , compPlayer: 0, colour: 'b', diff: 0, strat: 'm', wood: 30, food: 30, metal: 30, tech: 0, vp: 0 },
    {id: 1, name: 'Human Player 25 character', compPlayer: 0, colour: 'r', diff: 0, strat: 'm', wood: 30, food: 30, metal: 30, tech: 0, vp: 0},
    {id: 2, name: 'Computer Player (Easy)'   , compPlayer: 0, colour: 'y', diff: 0, strat: 'm', wood: 30, food: 30, metal: 30, tech: 0, vp: 0},
    {id: 3, name: 'Computer Player (Easy)'   , compPlayer: 0, colour: 'g', diff: 0, strat: 'm', wood: 30, food: 30, metal: 30, tech: 0, vp: 0},
    {id: 4, name: 'Computer Player (Medium)' , compPlayer: 0, colour: 'p', diff: 0, strat: 'm', wood: 30, food: 30, metal: 30, tech: 0, vp: 0},
    {id: 5, name: 'Computer Player (Hard)'   , compPlayer: 0, colour: 't', diff: 0, strat: 'm', wood: 30, food: 30, metal: 30, tech: 0, vp: 0},
];


const gamePlayDataInit = {
    numberPlayers: 4
    , currentTurn: 1
    , currentPlayer: 0
    , currentPhase: 0
    , log: []
    , actionPhaseSet: -1
    , winner: 0
    , skillsBuildCourses: [1,2,4]
    , includeQuiz3Questions: 0
}


export const useGameComponents = () => {
    const [boardData, setBoardData] = useState(boardData1);
    const [mapData, setMapData] = useState(boardData1.mapData);
    const [playerData, setPlayerData] = useState(playerDataInit);
    const [gamePlayData, setGamePlayData] = useState(gamePlayDataInit);
    const [questionData, setQuestionData] = useState([]);

    // UPDATE FUNCTIONS //
    // Load Board Data (when starting a new game)
    const InitBoardData = (newBoardData, newMapData) => {
        setBoardData(newBoardData);
        setMapData(newMapData);
    }
    const InitPlayerData = (newPlayerData) => {
        setPlayerData(newPlayerData);
    }
    const InitGamePlayData = () => {
        setGamePlayData(gamePlayDataInit);
    }

    // UPDATING EXISTING DATA
    // Update player data
    const UpdateMapData = useCallback((tileid, dataToUpdate, updatedValue) => {
        setMapData((prevMapData) =>
            prevMapData.map((tile)=> 
                tile.id === tileid ? {...tile, [dataToUpdate]: updatedValue} : tile
        ));
    }, [setMapData]);

    // Update player data
    const UpdatePlayerData = useCallback((updates) => {
        setPlayerData((prevPlayerData) =>
            prevPlayerData.map((player) => {
                const update = updates.find((updatedata) => updatedata.playerId === player.id);
                return update ? { ...player, ...update.dataToUpdate } : player;
            })
        );
    }, [setPlayerData]);

    // Update GamePlay variables
    const UpdateGamePlayData = useCallback((dataToUpdate, updatedValue) => {
        setGamePlayData((prevGamePlayData) => ({
            ...prevGamePlayData, [dataToUpdate]:updatedValue
        }));
    }, [setGamePlayData]);

    // Update questions
    const UpdateQuestions = useCallback((updatedQuestions) => {
        setQuestionData(updatedQuestions);
      }, [setQuestionData]);

    return {
        boardData
        , mapData
        , playerData
        , gamePlayData
        , questionData
        , InitBoardData
        , InitPlayerData
        , InitGamePlayData
        , UpdateMapData        
        , UpdatePlayerData
        , UpdateGamePlayData
        , UpdateQuestions
    };

}

