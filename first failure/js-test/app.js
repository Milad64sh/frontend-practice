const questionnaireForm = document.getElementById('questionnaireForm');
const result = document.getElementById('result');
const dogCountInput = document.getElementById('dogCount');
const pickiness = document.getElementById('pickiness');
const pluralS = document.getElementById('pluralS');
const displayDogNames = document.querySelectorAll('.dogNamePlaceholder');
const displayAdjective = document.querySelectorAll('dogAdjPlaceholder');
const displayPainPoints = document.querySelectorAll('.painPoints');
const displayPickiness = document.getElementById('pickinessPlaceholder');
const displaybreed = document.getElementById('breedPlaceholder');
const template1 = document.getElementById('template1');
const template2 = document.getElementById('template2');
const template3 = document.getElementById('template3');
const template4 = document.getElementById('template4');
const template5 = document.getElementById('template5');
const template6 = document.getElementById('template6');

let template1Added = false; // Flag to track if template1 is added
let template2Added = false; // Flag to track if template2 is added
let template3Added = false; // Flag to track if template3 is added
let template4Added = false; // Flag to track if template4 is added
let template5Added = false; // Flag to track if template5 is added
let template6Added = false; // Flag to track if template6 is added

// FORM SUBMIT

questionnaireForm.addEventListener('input', function (e) {
  e.preventDefault();
  const dogCount = dogCountInput.value;
  if (dogCount === '1') {
    let template1Content = document.importNode(template1.content, true);
    const dogGender = template1Content.querySelector('#gender');

    if (!template1Added) {
      result.appendChild(template1Content);
      template1Added = true;
    }

    if (dogGender) {
      let template2Content = document.importNode(template2.content, true);
      const adjective = template2Content.querySelector('#adjective');

      dogGender.addEventListener('change', function () {
        if (dogGender.value) {
          if (!template2Added) {
            result.appendChild(template2Content);
            template2Added = true;
          }
        }
        if (adjective) {
          let template3Content = document.importNode(template3.content, true);
          const dogAge = template3Content.querySelector('#dogAge');
          adjective.addEventListener('change', function () {
            if (adjective.value) {
              displayAdjective.textContent = adjective.value;
              if (!template3Added) {
                result.appendChild(template3Content);
                template3Added = true;
              }
            }
          });
          if (dogAge) {
            let template4Content = document.importNode(template4.content, true);
            const dogBreed = template4Content.querySelector('#dogBreed');
            dogAge.addEventListener('input', function () {
              if (dogAge.value) {
                if (!template4Added) {
                  result.appendChild(template4Content);
                  template4Added = true;
                }
              }
            });
            if (dogBreed) {
              displaybreed.textContent = dogBreed.value;
              let template5Content = document.importNode(
                template5.content,
                true
              );
              const dogName = template5Content.querySelector('#dogName');
              dogBreed.addEventListener('input', function () {
                if (dogBreed.value) {
                  if (!template5Added) {
                    result.appendChild(template5Content);
                    template5Added = true;
                  }
                }
              });
              if (dogName) {
                dogName.addEventListener('input', function () {
                  displayDogNames.forEach((displayDogName) => {
                    displayDogName.textContent = dogName.value;
                  });
                });
              }
            }
          }
        }
      });
    }
  }
  // if user select more than one dog
  if (dogCount > 1) {
    pluralS.style.display = 'inline';
    for (let i = 0; i < dogCount; i++) {
      const template1Content = document.importNode(template1.content, true);
      const template2Content = document.importNode(template2.content, true);
      const template3Content = document.importNode(template3.content, true);
      const template4Content = document.importNode(template4.content, true);
      const template5Content = document.importNode(template5.content, true);

      result.appendChild(template1Content);
      result.appendChild(template2Content);
      result.appendChild(template3Content);
      result.appendChild(template4Content);
      result.appendChild(template5Content);
    }
  } else {
    pluralS.style.display = 'none';
  }
});

// show pickiness in RECOMMENDATION page

pickiness.addEventListener('change', function () {
  const hiddenParagraph = document.getElementById('hiddenParagraph');
  displayPickiness.textContent = pickiness.value;
  if (
    pickiness.value === 'is very picky' &&
    pickiness.value === 'can be picky'
  ) {
    hiddenParagraph.style.display = 'block';
  } else {
    hiddenParagraph.style.display = 'none';
  }
});

function displaySelectedSymptoms() {
  const symptomsForm = document.getElementById('symptomsForm');
  const selectedSymptoms = [];

  // CHECKBOX
  const checkboxes = symptomsForm.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedSymptoms.push(checkbox.value);
    }
  });

  // Display the selected PAIN POINTS
  const selectedSymptomsDiv = document.getElementById('selectedSymptoms');
  selectedSymptomsDiv.textContent =
    'Selected Symptoms: ' + selectedSymptoms.join(', ');
  displayPainPoints.forEach((painPoints) => {
    painPoints.textContent = selectedSymptoms.join(', ');
  });
}

// loading code for calculation page

document.addEventListener('DOMContentLoaded', function () {
  const firstDiv = document.querySelector('.calculation__firstP');
  const secondDiv = document.querySelector('.calculation__secondP');

  const totalLoadingTime = 5000; // 5 seconds
  const halfLoadingTime = totalLoadingTime / 2;

  // Initially hide both divs
  firstDiv.style.display = 'none';
  secondDiv.style.display = 'none';

  // After half of the loading time, show the first div
  setTimeout(() => {
    firstDiv.style.display = 'block';
  }, halfLoadingTime);

  // After the total loading time, show the second div
  setTimeout(() => {
    secondDiv.style.display = 'block';
  }, totalLoadingTime);
});
