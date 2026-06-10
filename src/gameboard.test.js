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


    expect(newShip[0].returnLength()).toEqual(1);

})


test('Place a size 2 horizontal ship at a specific coord ', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(2,0,0,'h')
    
    expect(typeof object[0]).toBe('object');
    expect(typeof object[1]).toBe('object');
    expect(object).not.toBeNull(); 
})

test('Place a size 2 vertical ship at a specific coord ', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(2,0,0, 'v')
    
    expect(typeof object[0]).toBe('object');
    expect(typeof object[1]).toBe('object');
    expect(object).not.toBeNull(); 
})

test('Place a size 3 horizontal ship at a specific coord ', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(3,5,5, 'h')
    
    expect(typeof object[0]).toBe('object');
    expect(typeof object[1]).toBe('object');
    expect(typeof object[2]).toBe('object');
    expect(object).not.toBeNull(); 
})



test('Place a size 3 vertical ship at a specific coord ', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(3,7,6, 'v')
    
    expect(typeof object[0]).toBe('object');
    expect(typeof object[1]).toBe('object');
    expect(typeof object[2]).toBe('object');
    expect(object).not.toBeNull(); 
})


test('Place a size 4 horizontal ship at a specific coord ', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(4,0,0, 'h')
    
    expect(typeof object[0]).toBe('object');
    expect(typeof object[1]).toBe('object');
    expect(typeof object[2]).toBe('object');
    expect(typeof object[3]).toBe('object');
    expect(object).not.toBeNull(); 
})

test('Place a size 4 vertical ship at a specific coord ', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(4,0,0, 'v')
    
    expect(typeof object[0]).toBe('object');
    expect(typeof object[1]).toBe('object');
    expect(typeof object[2]).toBe('object');
    expect(typeof object[3]).toBe('object');
    expect(object).not.toBeNull(); 
})

test('Place a ship at a specific coord out of bounds ', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(1,0,10)

    expect(object).toEqual('Invalid coords');
})



test('Place a size 2 horizontal ship at a specific coord out of bounds ', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(2,0,9,'h')
    
    
    expect(object).toEqual('Invalid placement. Ship out of bounds.')
})

test('Place a size 2 vertical ship at a specific coord out of bounds ', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(2,9,0,'v')
    
    
    expect(object).toEqual('Invalid placement. Ship out of bounds.')
})

test('Place a size 3 horizontal ship at a specific coord out of bounds ', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(3,0,8,'h')
    
    
    expect(object).toEqual('Invalid placement. Ship out of bounds.')
})

test('Place a size 3 vertical ship at a specific coord out of bounds ', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(3,8,0,'v')
    
    
    expect(object).toEqual('Invalid placement. Ship out of bounds.')
})

test('Place a size 4 horizontal ship at a specific coord out of bounds ', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(4,0,7,'h')
    
    
    expect(object).toEqual('Invalid placement. Ship out of bounds.')
})


test('Place a size 4 vertical ship at a specific coord out of bounds ', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(4,0,7,'h')
    
    
    expect(object).toEqual('Invalid placement. Ship out of bounds.')
})

test('Place a ship at a specific coord and attack it', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(1,0,0);
    let attack1 = newGameboard.receiveAttack(0,0);


    expect(typeof object).toBe('object');
    expect(object).not.toBeNull();
    expect(attack1).toBe(1); 
})

test('Place a size at a specific coord, then attack it and miss the shot', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(1,0,0)
    let attack = newGameboard.receiveAttack(0,2);
    
    expect(typeof object).toBe('object');
    expect(object).not.toBeNull(); 
    expect(attack).toBe('x');
})
 



test('Place a size 2 horizontal ship at a specific coord and attack it twice', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(2,0,0,'h')
    let attack1 = newGameboard.receiveAttack(0,0);
    let attack2 = newGameboard.receiveAttack(0,1);
    
    expect(typeof object[0]).toBe('object');
    expect(typeof object[1]).toBe('object');
    expect(object).not.toBeNull(); 
    expect(attack1).toBe(1);
    expect(attack2).toBe(2);
})

test('Place a size 2 horizontal ship at a specific coord and attack it, then attack it and miss the shot', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(2,0,0,'h')
    let attack = newGameboard.receiveAttack(0,2);
    
    expect(typeof object[0]).toBe('object');
    expect(typeof object[1]).toBe('object');
    expect(object).not.toBeNull(); 
    expect(attack).toBe('x');
})
 

test('Place a size 2 vertical ship at a specific coord, then attack it twice', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(2,0,0, 'v')
    let attack1 = newGameboard.receiveAttack(0,0);
    let attack2 = newGameboard.receiveAttack(1,0);
   
    expect(typeof object[0]).toBe('object');
    expect(typeof object[1]).toBe('object');
    expect(object).not.toBeNull();
    expect(attack1).toBe(1);
    expect(attack2).toBe(2);

    
 })

 test('Place a size 2 vertical ship at a specific coord, then attack it and miss the shot', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(2,0,0, 'v')
    let attack = newGameboard.receiveAttack(0,1);
   
    expect(typeof object[0]).toBe('object');
    expect(typeof object[1]).toBe('object');
    expect(object).not.toBeNull();
    expect(attack).toBe('x');


    
 })

 test('Place a size 3 horizontal ship at a specific coord, then attack it three times ', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(3,5,5, 'h');
    let attack1 = newGameboard.receiveAttack(5,5);
    let attack2 = newGameboard.receiveAttack(5,6);
    let attack3 = newGameboard.receiveAttack(5,7);
    
    expect(typeof object[0]).toBe('object');
    expect(typeof object[1]).toBe('object');
    expect(typeof object[2]).toBe('object');
    expect(object).not.toBeNull(); 
    expect(attack1).toBe(1);
    expect(attack2).toBe(2);
    expect(attack3).toBe(3);
})


test('Place a size 3 horizontal ship at a specific coord, then attack it and miss the shot', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(3,5,5, 'h');
    let attack = newGameboard.receiveAttack(5,8);
    
    expect(typeof object[0]).toBe('object');
    expect(typeof object[1]).toBe('object');
    expect(typeof object[2]).toBe('object');
    expect(object).not.toBeNull(); 
    expect(attack).toBe('x');
})

test('Place a size 3 vertical ship at a specific coord, then attack it three times', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(3,5,5, 'v')
    let attack1 = newGameboard.receiveAttack(5,5);
    let attack2 = newGameboard.receiveAttack(6,5);
    let attack3 = newGameboard.receiveAttack(7,5);
    
    expect(typeof object[0]).toBe('object');
    expect(typeof object[1]).toBe('object');
    expect(typeof object[2]).toBe('object');
    expect(object).not.toBeNull();
    expect(attack1).toBe(1);
    expect(attack2).toBe(2);
    expect(attack3).toBe(3); 
})



test('Place a size 3 vertical ship at a specific coord, then attack it and miss the shot ', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(3,7,6, 'v')
    let attack = newGameboard.receiveAttack(6,6);

    
    expect(typeof object[0]).toBe('object');
    expect(typeof object[1]).toBe('object');
    expect(typeof object[2]).toBe('object');
    expect(object).not.toBeNull();
    expect(attack).toBe('x'); 
})

test('Place a size 4 horizontal ship at a specific coord, then attack it four times ', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(4,5,5, 'h');
    let attack1 = newGameboard.receiveAttack(5,5);
    let attack2 = newGameboard.receiveAttack(5,6);
    let attack3 = newGameboard.receiveAttack(5,7);
    let attack4 = newGameboard.receiveAttack(5,8);
    
    expect(typeof object[0]).toBe('object');
    expect(typeof object[1]).toBe('object');
    expect(typeof object[2]).toBe('object');
    expect(typeof object[3]).toBe('object');
    expect(object).not.toBeNull(); 
    expect(attack1).toBe(1);
    expect(attack2).toBe(2);
    expect(attack3).toBe(3);
    expect(attack4).toBe(4);
})


test('Place a size 4 horizontal ship at a specific coord, then attack it and miss the shot', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(4,5,5, 'h');
    let attack = newGameboard.receiveAttack(5,9);
    
    expect(typeof object[0]).toBe('object');
    expect(typeof object[1]).toBe('object');
    expect(typeof object[2]).toBe('object');
    expect(object).not.toBeNull(); 
    expect(attack).toBe('x');
})



test('Place some ships, attack them, and then return the hits', () => {
    let newGameboard = gameboard();
    let ship1 = newGameboard.placeShip(2,0,0, 'v');
    let ship2 = newGameboard.placeShip(4,5,5, 'h');
    let ship3 = newGameboard.placeShip(3,7,9, 'v');
    let attack1 = newGameboard.receiveAttack(0,0);
    let attack2 = newGameboard.receiveAttack(5,5);
    let attack3 = newGameboard.receiveAttack(7,9);
    let getHitShips = newGameboard.reportHitShips();
    
    expect(typeof ship1[0]).toBe('object');
    expect(typeof ship2[0]).toBe('object');
    expect(typeof ship3[0]).toBe('object');
    expect(getHitShips[0]).toEqual([0,0]);
    expect(getHitShips[1]).toEqual([5,5]);
    expect(getHitShips[2]).toEqual([7,9]);

    
 })

 test('Attack and miss', () => {
    let newGameboard = gameboard();
    let attack1 = newGameboard.receiveAttack(0,0);
    let attack2 = newGameboard.receiveAttack(5,5);
    let attack3 = newGameboard.receiveAttack(7,9);
    let displayHits = newGameboard.reportMissedHits();
   
    expect(displayHits[0]).toEqual([0,0]);
    expect(displayHits[1]).toEqual([5,5]);
    expect(displayHits[2]).toEqual([7,9]);

    
 })

 test('Place a size 4 horizontal ship at a specific coord, then attack it four times, sink it and report ', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(4,5,5, 'h');
    let attack1 = newGameboard.receiveAttack(5,5);
    let attack2 = newGameboard.receiveAttack(5,6);
    let attack3 = newGameboard.receiveAttack(5,7);
    let attack4 = newGameboard.receiveAttack(5,8);
    let isTheFleetSunk = newGameboard.isTheFleetSunk();
    
    expect(typeof object[0]).toBe('object');
    expect(typeof object[1]).toBe('object');
    expect(typeof object[2]).toBe('object');
    expect(typeof object[3]).toBe('object');
    expect(object).not.toBeNull(); 
    expect(attack1).toBe(1);
    expect(attack2).toBe(2);
    expect(attack3).toBe(3);
    expect(attack4).toBe(4);
    expect(isTheFleetSunk).toBe(true)

})

test('Place a size 4 horizontal ship at a specific coord, then attack it once and report ', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(4,5,5, 'h');
    let attack1 = newGameboard.receiveAttack(5,5);
    let isTheFleetSunk = newGameboard.isTheFleetSunk();
    
    expect(typeof object[0]).toBe('object');
    expect(typeof object[1]).toBe('object');
    expect(typeof object[2]).toBe('object');
    expect(typeof object[3]).toBe('object');
    expect(object).not.toBeNull(); 
    expect(attack1).toBe(1);
    expect(isTheFleetSunk).toBe(false)

})

test('Place a ship at a specific taken coord ', () => {
    let newGameboard = gameboard();
    let object = newGameboard.placeShip(1,0,0);
    let object2 = newGameboard.placeShip(1,0,0);

    
    expect(object2).toEqual('Invalid placement. Position taken'); 
})


// test('Check the length of a placed ship ', () => {
//     let newGameboard = gameboard();
//     let newShip = newGameboard.placeShip(1,0,0);


//     expect(newShip[0].returnLength()).toEqual(1);

// })


// test('Place a size 2 horizontal ship at a specific coord ', () => {
//     let newGameboard = gameboard();
//     let object = newGameboard.placeShip(2,0,0,'h')
    
//     expect(typeof object[0]).toBe('object');
//     expect(typeof object[1]).toBe('object');
//     expect(object).not.toBeNull(); 
// })

// test('Place a size 2 vertical ship at a specific coord ', () => {
//     let newGameboard = gameboard();
//     let object = newGameboard.placeShip(2,0,0, 'v')
    
//     expect(typeof object[0]).toBe('object');
//     expect(typeof object[1]).toBe('object');
//     expect(object).not.toBeNull(); 
// })

// test('Place a size 3 horizontal ship at a specific coord ', () => {
//     let newGameboard = gameboard();
//     let object = newGameboard.placeShip(3,5,5, 'h')
    
//     expect(typeof object[0]).toBe('object');
//     expect(typeof object[1]).toBe('object');
//     expect(typeof object[2]).toBe('object');
//     expect(object).not.toBeNull(); 
// })



// test('Place a size 3 vertical ship at a specific coord ', () => {
//     let newGameboard = gameboard();
//     let object = newGameboard.placeShip(3,7,6, 'v')
    
//     expect(typeof object[0]).toBe('object');
//     expect(typeof object[1]).toBe('object');
//     expect(typeof object[2]).toBe('object');
//     expect(object).not.toBeNull(); 
// })


// test('Place a size 4 horizontal ship at a specific coord ', () => {
//     let newGameboard = gameboard();
//     let object = newGameboard.placeShip(4,0,0, 'h')
    
//     expect(typeof object[0]).toBe('object');
//     expect(typeof object[1]).toBe('object');
//     expect(typeof object[2]).toBe('object');
//     expect(typeof object[3]).toBe('object');
//     expect(object).not.toBeNull(); 
// })

// test('Place a size 4 vertical ship at a specific coord ', () => {
//     let newGameboard = gameboard();
//     let object = newGameboard.placeShip(4,0,0, 'v')
    
//     expect(typeof object[0]).toBe('object');
//     expect(typeof object[1]).toBe('object');
//     expect(typeof object[2]).toBe('object');
//     expect(typeof object[3]).toBe('object');
//     expect(object).not.toBeNull(); 
// })
