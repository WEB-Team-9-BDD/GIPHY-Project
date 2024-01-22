export const HOME = 'home';

export const TRENDING = 'trending';

export const FAVORITES = 'favorites';

export const ABOUT = 'about';

export const UPLOAD = 'upload';

export const CONTAINER_SELECTOR = '#container';

export const FULL_HEART = '❤';

export const EMPTY_HEART = '♡';

export const API_KEY = 'Vpiv1bR5HXZX2XhNmt960DPIIc8Oku4v';

// export const trendingURL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=15&offset=0&rating=g`;

export const getTrendingURL = (limit = 25, offset = 0) => `
https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&offset=${offset}&rating=g`;

export const getSearchGifs = (q='', limit = 20, offset = 0) => `
https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${q}&limit=${limit}&offset=${offset}&rating=g`;

export const getRandomGifs = () => `
https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`;

// export const getGifById = (id) => `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}&rating=g`;
export const getUploadedURL = (username, url = '', sourceUrl = '', tags) => `
https://upload.giphy.com/v1/gifs?api_key=${API_KEY}&username=${username}&file=${url}&source_image_url=${sourceUrl}&tags=${tags}`;

export const getGifByID = (id) => `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}&rating=g`;
