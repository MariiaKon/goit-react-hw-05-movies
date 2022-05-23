import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '219747bddc830c6768a55001e81d80ed';

export class GetMoviesAPI {
  async getTrending() {
    const options = {
      params: {
        api_key: API_KEY,
      },
    };

    const trending = await axios.get('trending/movie/day', options);
    return trending.data;
  }

  getMovieByQuery = async query => {
    const options = {
      params: {
        api_key: API_KEY,
        query,
      },
    };

    const response = await axios.get('search/movie', options);
    return response.data;
  };
}

// /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
// /movies/get-movie-reviews запрос обзоров для страницы кинофильма.
