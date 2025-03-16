'use strict';

const bookings = [];

const createBooking = function(flightName, numPassenger = 1, price = 2999, totalPrice = 1999 * numPassenger){
    const booking = {
        flightName,
        numPassenger,
        price,
        totalPrice
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('AirIndia', 4)
console.log(bookings); 
createBooking('AG', undefined, 199)