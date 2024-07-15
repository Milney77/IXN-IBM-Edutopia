import { useState } from 'react';

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

    { name: 'icon_action_develop', url: 'images/icons/icon-develop.png'},
    { name: 'icon_action_resources', url: 'images/icons/icon-generateresources.png'},
    { name: 'icon_action_research', url: 'images/icons/icon-research.png'},
    { name: 'icon_action_takeover', url: 'images/icons/icon-takeover.png'},
    { name: 'icon_action_trade', url: 'images/icons/icon-trade.png'},

    { name: 'icon_action_v2_develop',  url: 'images/icons/icon-v2-Develop.png'}, 
    { name: 'icon_action_v2_EndTurn',  url: 'images/icons/icon-v2-EndTurn.png'}, 
    { name: 'icon_action_v2_Generate', url: 'images/icons/icon-v2-Generate.png'}, 
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

export const colorMap = {
    r: { border: '#ff0000', background: '#ffcccc' },
    b: { border: '#0000ff', background: '#ccccff' },
    g: { border: '#00ff00', background: '#ccffcc' },
    y: { border: '#ffff00', background: '#ffffcc' },
    p: { border: '#800080', background: '#e6ccff' },
    t: { border: '#008080', background: '#ccffff' },
}; 


export const resourceCosts = {
    house:    {wood: 1,  food: 1,  metal: 4,  tech: 0, },
    village:  {wood: 2,  food: 2,  metal: 8,  tech: 0, },
    castle:   {wood: 3,  food: 3,  metal: 12,  tech: 0, },
    takeover: {wood: 1,  food: 4,  metal: 1,  tech: 0, },
    expand:   {wood: 4,  food: 1,  metal: 1,  tech: 0, },
}







// DATA THAT CAN CHANGE DURING THE USE OF THE APP //

// Game Board Data (To be replaced with a database call)
const boardDataInit = {rows: 5
    , evenRowCols: 10
    , oddRowCols: 9
    , dim: [1600, 900]
}

// Map Data - again, to be replaced, but this is the json that should be returned.
const mapDataInit = [
{ id: 0, row: 0, col: 0, tileType: 'w', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 1, row: 0, col: 1, tileType: 'm', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 2, row: 0, col: 2, tileType: 'm', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 3, row: 0, col: 3, tileType: 'w', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 4, row: 0, col: 4, tileType: 'w', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 5, row: 0, col: 5, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 6, row: 0, col: 6, tileType: 'w', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 7, row: 0, col: 7, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 8, row: 0, col: 8, tileType: 'w', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 9, row: 0, col: 9, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 10, row: 1, col: 0, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 11, row: 1, col: 1, tileType: 'w', startSquare: 1, structure: 1, currentOwner: 1, }
, { id: 12, row: 1, col: 2, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 13, row: 1, col: 3, tileType: 'w', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 14, row: 1, col: 4, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 15, row: 1, col: 5, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 16, row: 1, col: 6, tileType: 'w', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 17, row: 1, col: 7, tileType: 'm', startSquare: 3, structure: 1, currentOwner: 3, }
, { id: 18, row: 1, col: 8, tileType: 'm', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 19, row: 2, col: 0, tileType: 'w', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 20, row: 2, col: 1, tileType: 'm', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 21, row: 2, col: 2, tileType: 'm', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 22, row: 2, col: 3, tileType: 'w', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 23, row: 2, col: 4, tileType: 'm', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 24, row: 2, col: 5, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 25, row: 2, col: 6, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 26, row: 2, col: 7, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 27, row: 2, col: 8, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 28, row: 2, col: 9, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 29, row: 3, col: 0, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 30, row: 3, col: 1, tileType: 'w', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 31, row: 3, col: 2, tileType: 'f', startSquare: 4, structure: 1, currentOwner: 4, }
, { id: 32, row: 3, col: 3, tileType: 'm', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 33, row: 3, col: 4, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 34, row: 3, col: 5, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 35, row: 3, col: 6, tileType: 'w', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 36, row: 3, col: 7, tileType: 'f', startSquare: 2, structure: 1, currentOwner: 2, }
, { id: 37, row: 3, col: 8, tileType: 'm', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 38, row: 4, col: 0, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 39, row: 4, col: 1, tileType: 'w', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 40, row: 4, col: 2, tileType: 'm', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 41, row: 4, col: 3, tileType: 'w', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 42, row: 4, col: 4, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 43, row: 4, col: 5, tileType: 'm', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 44, row: 4, col: 6, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 45, row: 4, col: 7, tileType: 'm', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 46, row: 4, col: 8, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
, { id: 47, row: 4, col: 9, tileType: 'w', startSquare: 0, structure: 0, currentOwner: 0, }
];


const playerDataInit = [
    {id: 0, name: 'Human Player 1'           , compPlayer: 0, color: 'b', wood: 3, metal: 3, food: 3, tech: 0, vp: 1 },
    {id: 1, name: 'Human Player 25 character', compPlayer: 0, color: 'r', wood: 3, metal: 3, food: 3, tech: 0, vp: 1 },
    {id: 2, name: 'Computer Player (Easy)'   , compPlayer: 0, color: 'y', wood: 3, metal: 3, food: 3, tech: 0, vp: 1 },
    {id: 3, name: 'Computer Player (Easy)'   , compPlayer: 0, color: 'g', wood: 3, metal: 3, food: 3, tech: 0, vp: 1 },
    {id: 4, name: 'Computer Player (Medium)' , compPlayer: 0, color: 'p', wood: 3, metal: 3, food: 3, tech: 0, vp: 0 },
    {id: 5, name: 'Computer Player (Hard)'   , compPlayer: 0, color: 't', wood: 3, metal: 3, food: 3, tech: 0, vp: 0 },
];


const gamePlayDataInit = {
    numberPlayers: 4
    , currentTurn: 1
    , currentPlayer: 0
    , currentPhase: 0
    , log: []
    , actionPhaseSet: -1
}


export const useGameComponents = () => {
    const [boardData, setBoardData] = useState(boardDataInit)
    const [mapData, setMapData] = useState(mapDataInit);
    const [playerData, setPlayerData] = useState(playerDataInit);
    const [gamePlayData, setGamePlayData] = useState(gamePlayDataInit);

    // UPDATE FUNCTIONS //
    // Load Board Data (when starting a new game)
    const LoadNewBoardData = (newBoardData, newMapData) => {
        setBoardData = useState(newBoardData)
        setMapData = useState(newMapData)
    }

    // UPDATING EXISTING DATA
    // Update player data
    const UpdateMapData = (tileid, dataToUpdate, updatedValue) => {
        setMapData((prevMapData) =>
            prevMapData.map((tile)=> 
                tile.id === tileid ? {...tile, [dataToUpdate]: updatedValue} : tile
        ));
    };

    // Update player data
    const UpdatePlayerData = (playerId, dataToUpdate, updatedValue) => {
        setPlayerData((prevPlayerData) =>
            prevPlayerData.map((player) => 
                player.id === playerId ? { ...player, [dataToUpdate]: updatedValue } : player
        ));
    }

    // Update GamePlay variables
    const UpdateGamePlayData = (dataToUpdate, updatedValue) => {
        setGamePlayData((prevGamePlayData) => ({
            ...prevGamePlayData, [dataToUpdate]:updatedValue
        }))
    }


    return {
        boardData
        , mapData
        , playerData
        , gamePlayData
        , LoadNewBoardData
        , UpdateMapData
        , UpdatePlayerData
        , UpdateGamePlayData
    };

}

