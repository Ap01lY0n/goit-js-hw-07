import { galleryItems } from './gallery-items.js';
const imageList = document.querySelector('.gallery');

function createImagesMarkup(arr) {
    return arr.map(({ preview, original, description }) =>
            `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
            </li>`
    ).join('');
}
imageList.insertAdjacentHTML('beforeend', createImagesMarkup(galleryItems))
let gallery = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });

