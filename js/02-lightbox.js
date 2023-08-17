import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const imageList = document.querySelector('.gallery');

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
imageList.insertAdjacentHTML('beforeend', createImagesMarkup(galleryItems))
let gallery = new SimpleLightbox(".gallery a", { captionsData: "alt", captionsDelay: 250})
console.log(galleryItems);
