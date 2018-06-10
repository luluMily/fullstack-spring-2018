// grab geRandomDay and getRandomMonth from randomizer.js
// call them
// run this file from the caommand line

const randomizer = require('./randomizer.js');

const getRandomDay = randomizer.getRandomDay();
const getRandomMonth = randomizer.getRandomMonth();

console.log(`${getRandomDay} ${getRandomMonth}`)