const container = document.getElementById('images');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let carouselContainer;

// fetch images
let images = [];

async function carouselData() {
  try {
    const response = await fetch('./img.json');
    const data = await response.json();
    images = data.images;
    images.forEach((item, index) => {
      const carouselItem = item.src
        ? document.createElement('img')
        : document.createElement('div');
      container.append(carouselItem);
      carouselItem.className = `images__item images__item-${index + 1}`;
      carouselItem.src = item.src;
      carouselItem.setAttribute('loading', 'lazy');
      carouselItem.setAttribute('data-index', `${index + 1}`);
      carouselContainer = container;
    });
  } catch (error) {
    console.error('Error fetching or processing data:', error);
  }
}
carouselData();
async function previous() {
  try {
    await carouselData();
    console.log(images);
    // Update order of items in data array to be shown in carousel
    images.unshift(images.pop());
    container.slice(0, 5).forEach((data, index) => {
      document.querySelector(`.carousel-item-${index + 1}`).src = data.src;
    });
  } catch (error) {
    console.log(error);
  }

  // Using the first 5 items in data array update content of carousel items in view
}
prevBtn.addEventListener('click', () => {
  previous();
});

function next() {
  // Update order of items in data array to be shown in carousel
  container.push(container.shift());

  // Using the first 5 items in data array update content of carousel items in view
  container.slice(0, 5).forEach((data, index) => {
    document.querySelector(`.carousel-item-${index + 1}`).src = data.src;
  });
}
nextBtn.addEventListener('click', () => {
  previous();
});
