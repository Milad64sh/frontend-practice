const container = document.getElementById('images');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// fetch images
let images = [];
const positions = [1, 2, 3, 4, 5, 6, 7, 8];

carouselData();

async function carouselData() {
  try {
    const response = await fetch('./img.json');
    const data = await response.json();
    images = data.images;
  } catch (error) {
    console.error('Error fetching or processing data:', error);
  }
}
function setImageCarousel() {
  images.forEach((item, index) => {
    const img = item.src
      ? document.createElement('img')
      : document.createElement('div');
    container.append(img);
    img.className = `header__images__img images__img-${index + 1}`;
    img.src = item.src;
    img.setAttribute('loading', 'lazy');
    img.setAttribute('data-index', `${index + 1}`);
  });
}
function prevBtnClicked() {
  images.unshift(images.pop());
  positions.push(positions.shift());
  positions.forEach((position, index) => {
    container.children[
      index
    ].className = `header__images__img images__img-${position}`;
  });
  images.slice(0, 8).forEach((image, index) => {
    document.querySelector(`.images__img-${index + 1}`).src = image.src;
  });
}

prevBtn.addEventListener('click', prevBtnClicked);
window.addEventListener('load', setImageCarousel);

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
