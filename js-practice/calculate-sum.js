const ageRow = document.getElementById('age');
const wheightRow = document.getElementById('wheight');
const ages = document.querySelectorAll('.age');
const wheights = document.querySelectorAll('.wheight');
const averageRow = document.getElementById('avg');

let agesNumArr = Array.from(ages).map((age) => +age.textContent);
// console.log(agesNumArr);
let wheightsNumArr = Array.from(wheights).map(
  (wheight) => +wheight.textContent
);
// console.log(wheightsNumArr);

let avgArr = [];
agesNumArr.map((age, indx) => {
  wheightsNumArr.map((wheight, idx) => {
    if (indx === idx) {
      let avg = age / wheight;
      avgArr.push(+avg.toFixed(2));
    }
  });
});
// console.log(avgArr);
let averageRowCells = averageRow.cells;
for (j = 1; j < averageRowCells.length; j++) {
  for (i = 0; i < avgArr.length; i++) {
    if (i === j - 1) {
      averageRowCells[j].textContent = avgArr[i];
    }
  }
}

// carousel text
const arrContainer = document.getElementById('array');
const secArray = document.getElementById('secArray');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

const array = [1, 2, 3, 4, 5, 6];
const secondArray = [1, 2, 3, 4, 5, 6];
let positions = [1, 2, 3, 4, 5, 6];
flipArray(array, secondArray);
function flipArray(array, secondArray) {
  if (array && secondArray) {
    arrContainer.textContent = array;
    secArray.textContent = secondArray;
  }
  console.log(arrContainer.textContent);
}

prevBtn.addEventListener('click', () => {
  array.push(array.shift());
  secondArray.unshift(secondArray.pop());
  flipArray(array, secondArray);
});
