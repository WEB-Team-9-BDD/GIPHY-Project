export const TRENDING = 'trending';

export const FAVORITES = 'favorites';

export const ABOUT = 'about';

export const UPLOAD = 'upload';

export const CONTAINER_SELECTOR = '#container';

export const FULL_HEART = '❤';

export const EMPTY_HEART = '♡';

export const API_KEY = 'Vpiv1bR5HXZX2XhNmt960DPIIc8Oku4v';

export const getTrendingURL = (limit = 25, offset = 0) => `
https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&offset=${offset}&rating=g`;


/**
 * A searched GIF endpoint
 * @param {string} q - the text you are looking for
 * @param {number} limit - the limit of gifs shown on the page
 * @param {*} offset Specifies the starting position of the results.
 * @return {string} The endpoint link
 */
export const getSearchGifs = (q='', limit = 20, offset = 0) => `
https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${q}&limit=${limit}&offset=${offset}&rating=g`;

/**
 * Recieving random GIF
 * @return {string} The endpoint link
 */
export const getRandomGifs = () => `
https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`;

// export const getGifById = (id) => `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}&rating=g`;
/**
 * Upload  GIF endpoint
 * @param {string} url - The binary string for uploading the GIF
 * @param {*} sourceUrl - URL source for uploading
 * @param {*} tags tags for the uploaded gif
 * @return {string} The endpoint link
 */
export const getUploadedURL = (url = '', sourceUrl = '', tags) => `
https://upload.giphy.com/v1/gifs?api_key=${API_KEY}&file=${url}&source_image_url=${sourceUrl}&tags=${tags}`;

export const getGifByID = (id) => `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}&rating=g`;

/**
 * Uploaded by the user gifs by Ids endpoint
 * @param  {...any} ids - A list of ids
 * @return {string} The endpoint link
 */
export const uploadedIdsEndpoint = (...ids) => `
https://upload.giphy.com/v1/gifs?api_key=${API_KEY}&ids=${ids}`;


export const getBobiGif = () => `https://api.giphy.com/v1/gifs/0lGd2OXXHe4tFhb7Wh?api_key=${API_KEY}&rating=g`;

export const getDayanaGif = () => `https://api.giphy.com/v1/gifs/2IudUHdI075HL02Pkk?api_key=${API_KEY}&rating=g`;

export const getDankoGif = () => `https://api.giphy.com/v1/gifs/CuuSHzuc0O166MRfjt?api_key=${API_KEY}&rating=g`;