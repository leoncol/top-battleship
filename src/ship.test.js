const ship = require('./ship');


test('Hit a ship with length 5 five times and sink it', () => {
    let bigShip = ship(5);
    for (let i = 0; i < 5; i++){
        bigShip.increaseHit();
    }

    expect(bigShip.isSunk()).toEqual(true);

})

test('Hit a ship with length 5 four times and do not sink it', () => {
    let bigShip = ship(5);
    for (let i = 0; i < 4; i++){
        bigShip.increaseHit();
    }

    expect(bigShip.isSunk()).toEqual(false);

})


