import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '219747bddc830c6768a55001e81d80ed';
const options = {
  params: {
    api_key: API_KEY,
    query: '',
  },
};

export async function getTrending() {
  const response = await axios.get('trending/movie/day', options);
  return response.data;
}

export const getMovieByQuery = async query => {
  options.params.query = query;

  const response = await axios.get('search/movie', options);
  return response.data;
};

export const getMovieDetails = async id => {
  const response = await axios.get(`movie/${id}`, options);
  return response.data;
};

export const getMovieCast = async id => {
  const response = await axios.get(`movie/${id}/credits`, options);
  return response.data;
};

export const getMovieReviews = async id => {
  const response = await axios.get(`movie/${id}/reviews`, options);
  return response.data;
};
