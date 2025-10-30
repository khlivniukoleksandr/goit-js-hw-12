import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery, PER_PAGE } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showButtonLoad,
  showLoader,
} from './js/render-functions';

const searchForm = document.querySelector('.form');
const loadButton = document.querySelector('.load-more-button');

let page = 1;
let currentQuery = '';

//
const fetchImages = async (query, page) => {
  showLoader();
  try {
    const data = await getImagesByQuery(query, page);
    console.log(data);

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);

    const totalPages = Math.ceil(data.totalHits / PER_PAGE);
    if (page >= totalPages) {
      loadButton.classList.add('hidden');
      iziToast.error({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      showButtonLoad();
    }
  } catch (error) {
    console.error('Request failed:', error);
    iziToast.error({
      message: 'Failed to fetch images. Please check your network connection.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
};

//
searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const query = event.target.elements['search-text'].value.trim();

  if (query === '') {
    iziToast.error({
      message: 'Search field cannot be empty!',
      position: 'topRight',
    });
    return;
  }
  currentQuery = query;
  page = 1;

  clearGallery();
  fetchImages(currentQuery, page);
  event.target.reset();
});

//
loadButton.addEventListener('click', async () => {
  page += 1;
  await fetchImages(currentQuery, page);

  const firstCard = document.querySelector('.gallery-item');
  if (firstCard) {
    const cardHeight = firstCard.getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 3,
      behavior: 'smooth',
    });
  }
});
