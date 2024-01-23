import { API_KEY, uploadedIdsEndpoint } from '../common/constants.js';
import { getSearchGifs, getTrendingURL, getUploadedURL, getGifByID } from '../common/constants.js';
import { addUploadedGif, getUploadedIds, renderFailure, renderSuccess, renderUploadedGifs } from '../events/upload-events.js';

/**
 * This is asyncronous function that makes POST request to Giphy API and uploads a gif
 * to the user's profile.
 * @param {string} url A binary string with the GIF uploaded by the file system of the user.
 * @param {*} sourceUrl An URL for uploading a GIF by url (optional).
 * @param {*} tags the tags for the GIF
 * @param {*} formData form data that includes the imported gif and the API key
 */
export const uploadGif = async (url = '', sourceUrl = '', tags, formData = '') => {
  try {
    const response = await fetch(getUploadedURL(url, sourceUrl, tags),
      {
        method: 'POST',
        body: formData,
      });

    const result = await response.json();

    const id = await result.data.id;

    if (url && response.status === 200) {

      renderSuccess(url);
      addUploadedGif(id);
      await renderUploadedGifs();

    } else if (sourceUrl && response.status === 200) {
      renderSuccess(sourceUrl);
      addUploadedGif(id);
      await renderUploadedGifs();

    } else if (response.status >= 400 && response.status <= 500) {
      renderFailure(response.status);
    };

  } catch (error) {
    console.error(error);
    renderFailure();
  }
};

// eslint-disable-next-line valid-jsdoc
/**
 * Asyncronous getting information about gifs from Giphy API
 * @param {string} searchTerm - the gif that the user is looking for
 * @return Array of objects with the data about each gif
 */
export const loadSearchGifs = async (searchTerm) => {
  const response = await fetch(getSearchGifs(searchTerm));
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

export const fetchFavorites = async (gifIds) => {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs?api_key=${API_KEY}&ids=${gifIds}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching GIF by ID:', error);
    return null;
  }
};


export const loadDetails = async (id) => {

  const response = await fetch(getGifByID(id));
  const result = await response.json();

  if (!response.ok) {
    throw new Error(`Failed to load gif details for id: ${id}`);
  }

  return result.data;
};

// eslint-disable-next-line valid-jsdoc
/**
 * Asyncronous getting the uploaded by the user gifs by ids
 * @return Array of objects with data about each gif.
 */
export const loadUploadedGifs = async () => {
  const idsList = getUploadedIds();

  const response = await fetch(uploadedIdsEndpoint(idsList));
  const result = await response.json();

  return result.data;
};

