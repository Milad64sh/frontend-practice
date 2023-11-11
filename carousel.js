const container = document.getElementById('images');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// fetch images
let images = [];
const positions = [1, 2, 3, 4, 5, 6, 7, 8];

carouselData();

async function carouselData() {
  const response = await fetch('./img.json');
  const data = await response.json();
  images = data.images;
  setImageCarousel();
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
window.addEventListener('load', setImageCarousel);
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

function nextBtnCarousel() {
  images.push(images.shift());
  positions.unshift(positions.pop());
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
nextBtn.addEventListener('click', nextBtnCarousel);
