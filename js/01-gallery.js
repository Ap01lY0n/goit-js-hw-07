import { galleryItems } from './gallery-items.js';

const imageList = document.querySelector('.gallery');
const createdImagesMarkup = createImagesMarkup(galleryItems);

imageList.insertAdjacentHTML("beforeend", createdImagesMarkup);
imageList.addEventListener('click', onClickModalImage);

function createImagesMarkup(arr) {
    return arr.map(
        ({ preview, original, description }) =>
            `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
                </a>
            </li>`
    ).join('');
}

function onClickModalImage(event) {
    event.preventDefault();
    window.addEventListener('keydown', onEscClick);
    
    const imgOriginalEl = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${imgOriginalEl}">`);
    instance.show();
}

function onEscClick(event) {
    if (event.code === 'Escape') {
        onModalClose();
    }
}

function onModalClose() {
    window.removeEventListener('keydown', onEscClick);
    basicLightbox.close();
}

console.log(galleryItems);
