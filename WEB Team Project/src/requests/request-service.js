import { getRandomGifs, getSearchGifs, getTrendingURL } from '../common/constants.js';
import { API_KEY } from '../common/constants.js';


export const loadSearchGifs = async (searchGif) => {
  const response = await fetch(getSearchGifs(searchGif));
  const result = await response.json();

  return result.data;
};

export const loadTrendingGifs = async () => {
  const response = await fetch(getTrendingURL(30));
  const result = await response.json();

  return result.data;
};

export const loadRandomGif = async () => {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);
    const result = await response.json();

    return result.data;
  } catch (error) {
    console.error('Error fetching random GIF', error);
  }
};

export const fetchGifById = async (gifId) => {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/${gifId}?api_key=${API_KEY}`);
    const data = await response.json();
    console.log(`Here we catch GIFId favs: ${data}`);
    return data.data;
  } catch (error) {
    console.error('Error fetching GIF by ID:', error);
    return null;
  }
};

export const fetchFavorites = async (gifIds) => {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs?api_key=${API_KEY}&ids=${gifIds}`);
    const data = await response.json();
    console.log(`Here we catch GIFId favs: ${data}`);
    return data.data;
  } catch (error) {
    console.error('Error fetching GIF by ID:', error);
    return null;
  }
}


// export const loadCategories = () => {
//   const categories = getCategories();

//   return categories;
// };

// export const loadCategory = (id = null) => {
//   const category = getCategory(id);

//   return category;
// }

// export const loadMovies = (categoryId = null) => {
//   const movies = getMoviesGeneralInfo(categoryId);

//   return movies;
// };

// export const loadSingleMovie = (id) => {
//   const movie = getMovieById(id);

//   return movie;
// };

// export const loadSearchMovies = (searchTerm = '') => {
//   const movies = searchMovies(searchTerm);

//   return movies;
// };
