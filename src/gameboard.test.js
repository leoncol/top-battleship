const gameboard = require('./gameboard');


// Gameboards should be able to place ships at specific coordinates by calling the ship factory or class.

// test('Get a specific coordinate from the gameboard ', () => {
//     let newGameboard = gameboard();

//     expect(newGameboard.placeShip(0,0)).toEqual('O');

// })



test('Place a ship at a specific coord ', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(1,0,0)

    expect(typeof object).toBe('object');
    expect(object).not.toBeNull(); 
})


test('Check the length of a placed ship ', () => {
    let newGameboard = gameboard();
    let newShip = newGameboard.placeShip(1,0,0);


    expect(newShip.returnLength()).toEqual(1);

})


test('Place a size 2 ship at a specific coord ', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(2,0,0)
    
    expect(typeof object[0]).toBe('object');
    expect(typeof object[1]).toBe('object');
    expect(object).not.toBeNull(); 
})

test('Place a size 3 vertical ship at a specific coord ', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(3,7,6)
    
    expect(typeof object[0]).toBe('object');
    expect(typeof object[1]).toBe('object');
    expect(typeof object[2]).toBe('object');
    expect(object).not.toBeNull(); 
})