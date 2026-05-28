const player = require('./player');


test('player ris computer', () => {
    
    let computerPlayer = player('computer');


    expect(computerPlayer.returnTypeOfPlayer()).toEqual('computer');

})