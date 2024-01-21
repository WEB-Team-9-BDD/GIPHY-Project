import { getSearchGifs, getTrendingURL, getUploadedURL } from '../common/constants.js';
import { renderFailure, renderSuccess } from '../events/upload-events.js';

export const uploadGif = async (username, url, tags, formData) => {
  try {
    const response = await fetch(getUploadedURL(username, url, tags),
      {
        method: 'POST',
        body: formData,
      });

    const result = await response.json();

    if (response.status === 200) {
      renderSuccess(url);
    } else if (response.status > 400 && response.status < 499) {
      renderFailure(response.status);
    };
  } catch (error) {
    console.error(error);
    renderFailure();
  }
};

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
