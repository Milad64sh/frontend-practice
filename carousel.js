const container = document.getElementById('images');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// fetch images
let images = [];
let currImgIdx = 0;

function updateSlideshow() {
  // Clear the container
  container.innerHTML = '';
  const positions = [-2, -1, 0, 1, 2];

  // Iterate through the images to display
  positions.forEach((position) => {
    let imageIndex = (currImgIdx + position + images.length) % images.length;
    const img = document.createElement('img');
    img.src = images[imageIndex].src;
    img.className = `header__images__img images__img-${currImgIdx}`;
    console.log(img.className);
    img.style.opacity = getOpacity(position);
    console.log(img.style.opacity);
    container.appendChild(img);
  });
}
function getOpacity(position) {
  // Define the opacity values for the positions (-2, -1, 0, 1, 2)
  const opacities = [0.4, 0.7, 1, 0.7, 0.4];

  // Calculate the index based on the position
  const index = position + 2;

  // Return the corresponding opacity
  return opacities[index];
}

async function carouselData() {
  try {
    const response = await fetch('./img.json');
    const data = await response.json();
    images = data.images;
    updateSlideshow();
  } catch (error) {
    console.error('Error fetching or processing data:', error);
  }
}

function prevBtnClicked() {
  currImgIdx = (currImgIdx - 1 + images.length) % images.length;

  carouselData();
}

prevBtn.addEventListener('click', prevBtnClicked);
window.addEventListener('load', carouselData);

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
