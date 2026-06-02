const player = require('./player');


test('player is computer', () => {
    
    let computerPlayer = player('computer');


    expect(computerPlayer.typeOfPlayer).toEqual('computer');

})

test('player is computer', () => {
    
    let humanPlayer = player('human');


    expect(humanPlayer.typeOfPlayer).toEqual('human');

})



test('player has a gameboard ', () => {
    let humanPlayer = player('human');
    let humanPlayerGameboard = humanPlayer.myGameboard;

    expect(typeof humanPlayerGameboard).toBe('object');
    expect(humanPlayerGameboard).not.toBeNull(); 
})

