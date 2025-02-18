// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// const arr = [1,2,3,'four'];
// const [x,y,z,t] = arr

// console.log(x,typeof(t));

// let [first, , , second] = restaurant.categories
// console.log(first ,second);

// const [, firs, secon] = restaurant.mainMenu
// console.log(firs,secon);

// [first, second] = [second, first]

// console.log(first ,second);

// console.log("*******************************");

// let obj = {
//   name: "GFG",
//   add: {
//       country: "India",
//       state: {
//           code: "JS",
//           pincode: "820800",
//           article: {
//               topic: "destructuring"
//           }
//       }
//   }
// }

// console.log(obj.add.state.article.topic);

// let { name } = obj;
// console.log(name)

// let { add: { country: abcd } } = obj
// console.log(abcd)

// let { add: { state: { code: cd } } } = obj
// console.log(cd)

// let { add: { state: { article: { topic: ef } } } } = obj
// console.log(ef);

// let obj = {
//   name: 'GFG',
//   add: {
//     country: 'India',
//     state: {
//       code: 'JS',
//       pincode: '820800',
//       article: {
//         topic: 'destructuring',
//       },
//     },
//   },
// };


// order2: function name1(starterIndex1, mainIndex1){
//   return [this.starterMenu[starterIndex1], this.mainMenu[mainIndex1]]
// }

// name1(1,2)

// restaurant.place = ['Satara', 'Pune']
// console.log(restaurant.place[0]);
// const [first] = restaurant.categories;
// console.log(first);
// console.log(restaurant.name);


// restaurant.name = 'amey'  
// console.log(restaurant.name);
// restaurant.age = 20; 
// console.log(restaurant.age);
// console.log(restaurant);

// console.log(x);
// var x=6

// console.log("your order is" , restaurant.order(2,1));
// console.log(`your order is ${restaurant.order(0,1)}`);
// console.log(restaurant.order(3,1));

// console.log(this.age);

// const person = {
//   name: 'John',
//   age: 30,
//   greet() {
  //       console.log('Hello, my name is ' +
  //           this.name + ' and I am '
  //           + this.age +
  //           ' years old.');
  //   }
// };

// person.greet(); 


// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours : {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex){
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
//   },

//   orderDelivery: function({time,address,mainIndex,starterIndex}) { //use {} for destruturing
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and 
//       ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
// };

// restaurant.orderDelivery({
//   time: '8:00',
//   address: 'satara',
//   mainIndex: 2,
//   starterIndex: 2,
// });



// console.log(restaurant.order(2,1));

// restaurant.name = 'ameysHotel';

// const{name, openingHours,categories} = restaurant;
// console.log(name,openingHours,categories);

// const { menu= "default_val", name: restaurantName, openingHours: hours} = restaurant;
// console.log(restaurantName,hours,menu); 

// let a= 111;
// let b=999;

// const obj2 = {a: 23, b: 7, c: 14};

// ({a,b,c} = obj2);
// console.log(a,b,c);

// const {
//   fri: {open: o, close: co},
// } = openingHours;
// console.log(open,co)

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// for (const ele of game.players){
//   console.log(ele);
// }
// for (const ele2 of game.scored){
//   console.log(ele2);
// }

// const [players1,players2] = game.players;
// console.log(players1);
// console.log(players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(gk,fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const playersFinal = [...players1, 'amey','gawade', 'aaaa']
// console.log(playersFinal);

// const {odds: {team1, x: draw, team2},} = game;
// console.log(team1, draw, team2);

const order = new Set(['Pizza', 'Pasta', 'Pizza', 'Burger', 'Coffee']);

console.log(order);
console.log(new Set('Jonas'));
console.log(order.size);
console.log(order.has('Pizza'));
order.add('Bread');
order.add('Pizza');
console.log(order);

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Manager'];

const rest = [...new Set(staff)];
console.log(rest);

console.log(new Set('amey subhash gawade'));

const hotel = new Map();

hotel.set('menu', ['Pizza','Burger', 'Coffee']);
hotel
.set('name', 'Amey')
.set('open', 11)
.set('close', 23)
.set(true, 'We are open')
.set(false, 'We are closed')
.set(5,'offer');


console.log(hotel);

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  btn.style.backgroundColor = 'blue';
  btn.style.color = 'white';
});


let response = `## Books to Enhance Creativity:
**On the Process of Creativity:**

* **"Steal Like an Artist" by Austin Kleon:**  A playful and insightful guide to embracing inspiration and developing your own creative voice.  Focuses on the importance of observation, imitation, and remixing.
* **"The Artist's Way" by Julia Cameron:** A 12-week guided journal program designed to unlock your creative potential and overcome blocks.  More self-help focused but very effective for many.
* **"Big Magic: Creative Living Beyond Fear" by Elizabeth Gilbert:**  A warm and encouraging book that tackles the fear and self-doubt that can stifle creativity.
* **"A Whack on the Side of the Head" by Roger von Oech:** A classic that explores lateral thinking and problem-solving techniques to spark new ideas.`

console.log(response);

let newResponse = response.split("**");


console.log(newResponse);

for (let i= 0 ; i<newResponse.length;i++){
  console.log(newResponse[i])
}

console.log(hotel.get(5))

for (ans of hotel){
  console.log(ans)
}

const quiz = new Map([
  ['question', 'Which is best prog. language in the world ?'],
  [1,'C'],
  [2,'Java'],
  [3,'JavaScript'],
  ['Correct',3],
  [true,'Correct🎉'],
  [false, 'try again !']  
]);

console.log(quiz)

// quiz.set(4,'Python');

// console.log(quiz);

for (const [key,value] of quiz){
  if(typeof key === 'number'){
    console.log(`Answer ${key} : ${value}`);
  }
}


// for (const [a,b] of quiz){
//   if(typeof a === 'number'){
//     console.log(`Answer ${a} : ${b}`);
//   }
// }

// const answer = Number(prompt("Enter the correct answer"));

// if(answer === quiz.get('Correct')){
//   console.log(quiz.get(true));}
// else{console.log(quiz.get(false))}

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1 =>.

console.log(gameEvents.values())

const event = [...new Set(gameEvents.values())];

console.log(event);

//2 =>.

gameEvents.delete(64);

console.log(`An event happened, on average, every ${ 90 / gameEvents.size} minutes`)

//4 =>.

for (const [min, event] of gameEvents){
  const half = min <= 45 ? 'First' : 'Second';

  console.log(`${half} Half ${min} min : ${event}`)
}