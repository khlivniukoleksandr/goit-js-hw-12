import axios from 'axios';

const API_KEY = '52958686-1557e7ea2156d90b306934aa7';
export const PER_PAGE = 15;

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: PER_PAGE,
};

export let page = 1;

export const getImagesByQuery = async (query, page = 1) => {
  const response = await axios.get('', {
    params: {
      q: query,
      page: page,
    },
  });
  return response.data;
};
