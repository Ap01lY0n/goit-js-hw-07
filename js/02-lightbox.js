import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

const imageList = document.querySelector('.gallery');
const createdImagesMarkup = createImagesMarkup(galleryItems);

imageList.insertAdjacentHTML("beforeend", createdImagesMarkup);

function createImagesMarkup(arr) {
    return arr.map(
        ({ preview, original, description }) =>
            `<li class="gallery_item">
                <a class="gallery_link" href="${original}">
                    <img class="gallery_image" src="${preview}" alt="${description}" />
                </a>
            </li>`
    ).join('');
}

const lightbox = new SimpleLightbox('.gallery_link', {
    captionsData: 'alt',
    captionDelay: 250,
});

console.log(galleryItems);
