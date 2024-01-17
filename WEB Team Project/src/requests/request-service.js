import { getCategories, getMoviesGeneralInfo, getMoviesFullInfo, getMovieById, getCategory, searchMovies } from '../data/movies.js';
import { getSearchGifs, getTrendingURL } from '../common/constants.js';


export const loadSearchGifs = async (searchGif) => {
  const response = await fetch(getSearchGifs(searchGif));
  const result = await response.json();
  return result.data;
}

export const loadTrendingGifs = async () => {
  const response = await fetch(getTrendingURL(30));
  const result = await response.json();

  return result.data;
};

export const loadCategories = () => {
  const categories = getCategories();
  
  return categories;
};

export const loadCategory = (id = null) => {
  const category = getCategory(id);

  return category;
}

export const loadMovies = (categoryId = null) => {
  const movies = getMoviesGeneralInfo(categoryId);

  return movies;
};

export const loadSingleMovie = (id) => {
  const movie = getMovieById(id);

  return movie;  
};

export const loadSearchMovies = (searchTerm = '') => {
  const movies = searchMovies(searchTerm);

  return movies;
};
