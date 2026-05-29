const player = require('./player');


test('player ris computer', () => {
    
    let computerPlayer = player('computer');


    expect(computerPlayer.typeOfPlayer).toEqual('computer');

})

