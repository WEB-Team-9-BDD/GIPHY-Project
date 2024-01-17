export const HOME = 'home';

export const CATEGORIES = 'categories';

export const FAVORITES = 'favorites';

export const ABOUT = 'about';

export const CONTAINER_SELECTOR = '#container';

export const FULL_HEART = '❤';

export const EMPTY_HEART = '♡';

export const API_KEY = 'Vpiv1bR5HXZX2XhNmt960DPIIc8Oku4v';

// export const trendingURL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=15&offset=0&rating=g`;

export const getTrendingURL = (limit = 25, offset = 0) => `
https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&offset=${offset}&rating=g`;

export const getSearchGifs = (q='', limit = 20, offset = 0) => `
https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${q}&limit=${limit}&offset=${offset}&rating=g`;

