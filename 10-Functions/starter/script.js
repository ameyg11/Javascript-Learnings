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


const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);