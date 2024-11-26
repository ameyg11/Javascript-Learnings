// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;

if (x == 0) console.log('go');

const y = '24';

const temperatures = [3, -2, -6, -1, 'error', 9, 14, 1, 18, 15];

// prompt("is this your ans");

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
calcTempAmplitude([3, 4, 5, 7, 1, 9, 2]);
