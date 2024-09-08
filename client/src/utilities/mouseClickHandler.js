import { resourceCosts } from '../constants/constants';

export const HandleMouseClick = (mousePos, boardData, gamePlayData, mapData, playerData
    , UpdateGamePlayData, UpdateMapData, UpdatePlayerData
    , addCurrentInstruction, addLog, showOverlay, validateMove) => {
const currentPlayer = gamePlayData.currentPlayer;
const currentPlayerOwnership = currentPlayer + 1;
var cost;
var hexid;
var validMove;

if (gamePlayData.currentPhase !== 2 || playerData[currentPlayer].compPlayer === 1) {
// Nothing needs to be done, until phase 2, the only click is handled by the PlayerDisplay section.

// SECTION 1 -- USING PRESSING AN ACTION BUTTON (WHILE NO OTHER ACTION STATUS IS IN EFFECT, actionPhaseSet === -1)
} else if (mousePos.type === 'am' && gamePlayData.actionPhaseSet === -1) {
// User has clicked on an action
if (mousePos.id === 0) {
// Build on player's own hex
UpdateGamePlayData('actionPhaseSet', 1);
} else if (mousePos.id === 1) {
// Build on an adjacent hex
UpdateGamePlayData('actionPhaseSet', 2);
} else if (mousePos.id === 2) {
// Takeover another players hex
UpdateGamePlayData('actionPhaseSet', 3);
} else if (mousePos.id === 3) {
// Trade
UpdateGamePlayData('actionPhaseSet', 4);
} else if (mousePos.id === 4) {
// End turn
addLog('Player ' + (gamePlayData.currentPlayer + 1) + ' has ended their turn.');
UpdateGamePlayData('actionPhaseSet', -1);
UpdateGamePlayData('currentPhase', 0);
if (currentPlayerOwnership === gamePlayData.numberPlayers) {
    addLog('');
    addLog('Start of turn:' + (gamePlayData.currentTurn + 1));
    UpdateGamePlayData('currentPlayer', 0);
    UpdateGamePlayData('currentTurn', gamePlayData.currentTurn + 1);
} else {
UpdateGamePlayData('currentPlayer', gamePlayData.currentPlayer + 1);
}
}
}

// SECTION 2 - AFTER PLAYER HAS CLICKED AN ACTION MENU BUTTON
// BUILDING ON PLAYER OWNED HEXES
else if (gamePlayData.actionPhaseSet === 1 ||
(mousePos.type === 'hex' && mapData[mousePos.id].actionable === 1)) {
if (mousePos.type === 'hex' && mapData[mousePos.id].actionable === 1) {
// Player has selected one of their own hexes to develop.
hexid = mousePos.id;
validMove =  validateMove('build', hexid, boardData, mapData, currentPlayer, gamePlayData.numberPlayers);
//console.log('Valid Move:', validMove);
if (!validMove.isAllowed) {
// Error - cannot build any more - display a message
showOverlay(validMove.disallowReason, null, null, true);
UpdateGamePlayData('actionPhaseSet', -1);
} else {
// Determine costs for development
const structNames = ['House', 'Village', 'Castle'];
const structCosts = [resourceCosts.house, resourceCosts.village, resourceCosts.castle];
cost = structCosts[mapData[hexid].structure - 1];
var structureName = structNames[mapData[hexid].structure - 1];
// Check if player has enough resources
if (playerData[currentPlayer].wood < cost.wood || playerData[currentPlayer].food < cost.food ||
playerData[currentPlayer].metal < cost.metal || playerData[currentPlayer].tech < cost.tech          ) {
showOverlay('Insufficient resources to build on this hex.', cost, null, true);
UpdateGamePlayData('actionPhaseSet', -1);
} else {
const onConfirm = () => {
// Player is building on this hex
// Deduct resources from player
const playerDataUpdates = [{
playerId: gamePlayData.currentPlayer
, dataToUpdate: {
wood:  playerData[currentPlayer].wood  - cost.wood
, food:  playerData[currentPlayer].food  - cost.food
, metal: playerData[currentPlayer].metal - cost.metal
, tech:  playerData[currentPlayer].tech -  cost.tech
}
}]
UpdatePlayerData(playerDataUpdates);
// Update the board data
UpdateMapData(hexid, 'structure', (mapData[hexid].structure += 1));
// Add to log
var logTxt = 'Player ' + (currentPlayer + 1) + ' has built a ' + structureName + ' on hex ' + hexid;
addLog(logTxt);
UpdateGamePlayData('actionPhaseSet', -1);
};
showOverlay('Do you want to build on this hex?', cost, onConfirm, false);
}
}
} else {
// Clicked somewhere else.
UpdateGamePlayData('actionPhaseSet', -1);
}
// END OF BUILDING ON OWN HEXES  
}

// DEVELOP NEIGHBOURING HEXES
else if ((mousePos.type === 'hex' && mapData[mousePos.id].actionable === 2)) {
if (mousePos.type === 'hex' && mapData[mousePos.id].actionable === 2) {
// Player is developing hex.
hexid = mousePos.id;
cost = resourceCosts.expand;
validMove =  validateMove('develop', hexid, boardData, mapData, currentPlayer, gamePlayData.numberPlayers);
//console.log('Valid Move:', validMove);
// Check if player has sufficient resources
if (playerData[currentPlayer].wood < cost.wood || playerData[currentPlayer].food < cost.food ||
playerData[currentPlayer].metal < cost.metal || playerData[currentPlayer].tech < cost.tech) {
showOverlay('Insufficient resources to develop this hex.', cost, null, true);
UpdateGamePlayData('actionPhaseSet', -1);
} else {
//console.log('HexID:', hexid, 'CurrPlayer idx:', currentPlayer, 'CurrOwnership:', currentPlayerOwnership);
const onConfirm = () => {
// Player is developing this hex
// Deduct resources from player
const playerDataUpdates = [{
playerId: gamePlayData.currentPlayer
, dataToUpdate: {
wood:  playerData[currentPlayer].wood  - cost.wood
, food:  playerData[currentPlayer].food  - cost.food
, metal: playerData[currentPlayer].metal - cost.metal
, tech:  playerData[currentPlayer].tech -  cost.tech
}
}]
UpdatePlayerData(playerDataUpdates);
// Update the board data
UpdateMapData(hexid, 'currentOwner', currentPlayerOwnership);
UpdateMapData(hexid, 'structure', 1);
// Add to log
var logTxt = 'Player ' + (currentPlayer + 1) + ' has developed hex ' + hexid;
addLog(logTxt);
UpdateGamePlayData('actionPhaseSet', -1);
};
showOverlay('Do you want to build on this hex?', cost, onConfirm, false);
//console.log(mapData[hexid]);
}
}
// In case there are 'sea' tiles, generate a message if a player tries to develop that hex
else if (mousePos.type === 'hex' && mapData[mousePos.id].tileType === 's') {
showOverlay('Cannot develop sea tiles.', null, null, true);
UpdateGamePlayData('actionPhaseSet', -1);
} else {
// Player has clicked somewhere else.
UpdateGamePlayData('actionPhaseSet', -1);
}
} // END OF DEVELOPING HEXES


// TAKING OVER OTHER PLAYER HEXES //
else if (gamePlayData.actionPhaseSet === 3 || (mousePos.type === 'hex' && mapData[mousePos.id].actionable === 3)) {
if (mousePos.type === 'hex' && mapData[mousePos.id].actionable === 3) {
// Player is taking over an opposing player's hex.
hexid = mousePos.id;
cost = resourceCosts.takeover;
validMove =  validateMove('takeover', hexid, boardData, mapData, currentPlayer, gamePlayData.numberPlayers);
//console.log('Valid Move:', validMove); 
if (!validMove.isAllowed) {
// Error - cannot build any more - display a message
showOverlay(validMove.disallowReason, null, null, true);
UpdateGamePlayData('actionPhaseSet', -1);
} else {
// Check if player has sufficient resources
if (playerData[currentPlayer].wood < (cost.wood) || playerData[currentPlayer].food < (cost.food) ||
playerData[currentPlayer].metal < (cost.metal) || playerData[currentPlayer].tech < (cost.tech)) {
showOverlay('Insufficient resources to take over this hex.', cost, null, true);
UpdateGamePlayData('actionPhaseSet', -1);
} else {
//console.log('HexID:', hexid, 'CurrPlayer idx:', currentPlayer, 'CurrOwnership:', currentPlayerOwnership);
const onConfirm = () => {
// Player is developing this hex
// Deduct resources from player
const playerDataUpdates = [{
playerId: gamePlayData.currentPlayer
, dataToUpdate: {
wood:  playerData[currentPlayer].wood  - cost.wood
, food:  playerData[currentPlayer].food  - cost.food
, metal: playerData[currentPlayer].metal - cost.metal
, tech:  playerData[currentPlayer].tech -  cost.tech
}
}]
UpdatePlayerData(playerDataUpdates);
// Update the board data
UpdateMapData(hexid, 'currentOwner', currentPlayerOwnership);
UpdateMapData(hexid, 'structure', 1);
// Add to log
var logTxt = 'Player ' + (currentPlayer + 1) + ' has taken over hex ' + hexid;
addLog(logTxt);
UpdateGamePlayData('actionPhaseSet', -1);
};
showOverlay('Do you want to take over this hex?', cost, onConfirm, false);
//console.log(mapData[hexid]);
}
}
} else {
// Player has clicked somewhere else.
UpdateGamePlayData('actionPhaseSet', -1);
}
} // END OF TAKEOVER SECTION

}