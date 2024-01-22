import { getRandomGifs, getSearchGifs, getTrendingURL } from '../common/constants.js';
import { API_KEY } from '../common/constants.js';
import { getSearchGifs, getTrendingURL, getUploadedURL, getGifByID } from '../common/constants.js';
import { renderFailure, renderSuccess } from '../events/upload-events.js';

export const uploadGif = async (username, url = '', sourceUrl = '', tags, formData = '') => {
  try {
    const response = await fetch(getUploadedURL(username, url, sourceUrl, tags),
      {
        method: 'POST',
        body: formData,
      });

    const result = await response.json();


    if (url && response.status === 200) {
      renderSuccess(url);

    } else if (sourceUrl && response.status === 200) {
      renderSuccess(sourceUrl);

    } else if (response.status >= 400 && response.status <= 500) {
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


export const loadDetails = async (id) => {
  
  const response = await fetch (getGifByID(id));
  const result = await response.json();

  if (!response.ok) {
    throw new Error(`Failed to load gif details for id: ${id}`);
  }

  return result.data;
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
