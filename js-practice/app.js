// const kilo = document.getElementById('kilo');
// const mile = document.getElementById('mile');
// const form = document.getElementById('convertor');
// const convertBtn = document.getElementById('convert');
// const reverseBtn = document.getElementById('reverse');
// const resetBtn = document.getElementById('reset');
// const result = document.createElement('p');

// convertBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   const kiloValue = +kilo.value;
//   if (kiloValue !== 0) {
//     const mileValue = kiloValue * 0.62;
//     mile.value = mileValue.toFixed(2);
//     result.textContent = `${kiloValue} kilometer${
//       kiloValue > 1 ? 's' : ''
//     } is equal to ${mileValue.toFixed(2)} mile${mileValue > 1 ? 's' : ''}`;
//     form.appendChild(result);
//   } else {
//     return 0;
//   }
// });
// reverseBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   const mileValue = +mile.value;
//   if (mileValue !== 0) {
//     const kiloValue = mileValue / 0.62;
//     kilo.value = kiloValue.toFixed(2);
//     result.textContent = `${mileValue} Mile${
//       mileValue > 1 ? 's' : ''
//     } is equal to ${kiloValue.toFixed(2)} kilometer${mileValue > 1 ? 's' : ''}`;
//     form.appendChild(result);
//   } else {
//     return 0;
//   }
// });
// resetBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   mile.value = 0;
//   kilo.value = 0;
//   result.textContent = '';
// });

// SORT FUNCTIONS

// const sortFunc = (arr) => {
//   return arr.sort((a, b) => b - a);
// };
// const sorted = sortFunc([1, 2, 3, 4, 5, 6, 7]);
// console.log(sorted);

// FILTER FUNCTION

// const filterFunc = (arr) => {
//   const filteredArr = arr.filter((item) => item > 0);
//   return filteredArr;
// };
// const array = filterFunc([-1, 2]);

// console.log(array);

// FILTER STRING

// const filterString = (string) => {
//   const space = ' ';
//   const arrString = string.split('').filter((item) => item !== space);
//   const noSpaceString = arrString.join('');
//   return noSpaceString;
// };

// const noSpace = filterString('Hello World');
// console.log(noSpace);

// DIVISIBLE BY 10

// const divisible = (num) => {
//   if (num % 10 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const addedNum = divisible(15);
// console.log(addedNum);

// RETURN VOWELS

// const vowels = 'aeiouAEIOU';
// const vowelsFunc = (string) => {
//   let count = 0;
//   for (i = 0; i < string.length; i++) {
//     if (vowels.includes(string[i])) {
//       count++;
//     }
//   }
//   return count;
// };
// const example = vowelsFunc('Hello world');
// console.log(example);

// *** Add up the Numbers from a Single Number ***

// const sumUpNum = (number) => {
//   let sum = 0;
//   for (i = 0; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// };

// const sumNum = sumUpNum(4);

// console.log(sumNum);

//  *** matchstick number

// const matchstick = (step) => {
//   let matchstickCount = 0;
//   if (step > 0) {
//     return (matchstickCount = step * 5 + 1);
//   }
// };

// const example = matchstick(87);
// console.log(example);

// *** return biggest and smallest number

// const biggestNumber = (arr) => {
//   if (arr.length === 0) {
//     return [];
//   }
//   let min = arr[0];
//   let max = arr[0];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return [min, max];
// };

// const example = biggestNumber([1, 2, 4]);
// console.log(example);

// ***date
const christmasTime = (date) => {
  const month = date.getMonth();
  const day = date.getDate();
  if (month === 12 && day === 24) {
    return true;
  }
};
const date = christmasTime();
