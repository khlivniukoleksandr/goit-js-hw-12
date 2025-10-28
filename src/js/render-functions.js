import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const listImg = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadButton = document.querySelector('.load-more-button');

loader.classList.add('hidden');
const createMarkup = ({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) => {
  return `
        <li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
                <img 
                    class="gallery-image"
                    src="${webformatURL}" 
                    alt="${tags}" 
                    width="360"
                    height="200"
                />
            </a>
            <div class="info flex">
                <p class="info-item"><strong>Likes</strong> ${likes}</p>
                <p class="info-item"><strong>Views</strong> ${views}</p>
                <p class="info-item"><strong>Comments</strong> ${comments}</p>
                <p class="info-item"><strong>Downloads</strong> ${downloads}</p>
            </div>
        </li>
    `;
};

export const clearGallery = () => {
  if (listImg) {
    listImg.innerHTML = '';
  }
};

export const createGallery = images => {
  if (!listImg) {
    return;
  }
  const markup = images.map(createMarkup).join('');
  listImg.insertAdjacentHTML('beforeend', markup);
  gallery.refresh();
};

export const showLoader = () => {
  loader.classList.remove('hidden');
};

export const hideLoader = () => {
  loader.classList.add('hidden');
};

export const showButtonLoad = () => {
  loadButton.classList.remove('hidden');
};

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
