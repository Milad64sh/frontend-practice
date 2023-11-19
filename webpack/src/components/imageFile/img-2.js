import img_2 from './img-2.png';
import './img-2.scss';
class Img_2 {
  render() {
    const img = document.createElement('img');
    img.src = img_2;
    img.alt = 'img-2';
    img.classList.add('img-2');

    const body = document.querySelector('body');
    body.appendChild(img);
  }
}

export default Img_2;
