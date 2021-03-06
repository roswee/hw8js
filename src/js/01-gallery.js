import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);
const gallery = document.querySelector(".gallery");

function createGallery() {
    const imgs = [];
    galleryItems.forEach(event => {
      const { preview, original, description } = event;
      const item = document.createElement("a");
      item.classList.add("gallery__link");
      item.href = `${original}`;
      imgs.push(item);
      const img = document.createElement("img");
      img.classList.add("gallery__image");
      img.src = `${preview}`;
      img.dataset.source = `${original}`;
      img.alt = `${description}`;
      item.append(img);
    });
    gallery.append(...imgs);
  }
createGallery();

new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
  });