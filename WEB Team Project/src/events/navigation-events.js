import { ABOUT, CONTAINER_SELECTOR, FAVORITES, TRENDING, UPLOAD } from '../common/constants.js';
import { loadTrendingGifs, loadDetails, loadGifByName } from '../requests/request-service.js';
import { toAboutView, toGifAboutView } from '../views/about-view.js';
import { q, setActiveNav } from './helpers.js';
import { getFavorites } from '../data/favorites.js';
import { toTrendingView } from '../views/trending-view.js';
import { toUploadView } from '../views/upload-view.js';
import { toGifDetailsView } from '../views/details-view.js';
import { toFavoritesView } from '../views/favorites-view.js';

// public API
// eslint-disable-next-line consistent-return
export const loadPage = (page = '') => {

  switch (page) {

  case TRENDING:
    setActiveNav(TRENDING);
    return renderTrending();

  case FAVORITES:
    setActiveNav(FAVORITES);
    return renderFavorites();

  case UPLOAD:
    setActiveNav(UPLOAD);
    return renderUpload();

  case ABOUT:
    setActiveNav(ABOUT);
    renderAbout();

    // Add event listeners to the names
    document.getElementById('Borislav').addEventListener('click', () => {
      renderAboutGif('Borislav');
    });

    document.getElementById('Danko').addEventListener('click', () => {
      renderAboutGif('Danko');
    });

    document.getElementById('Dayana').addEventListener('click', () => {
      renderAboutGif('Dayana');
    });
    break;

    /* if the app supports error login, use default to log mapping errors */
  default: return null;
  }

};

// private functions


const renderTrending = async () => {
  const trendingGifs = await loadTrendingGifs();

  q(CONTAINER_SELECTOR).innerHTML = toTrendingView(trendingGifs);
};

/**
 * Favorite age rendering function
 */

export const renderFavorites = async () => {
  const favorites = getFavorites();

  q(CONTAINER_SELECTOR).innerHTML = await toFavoritesView(favorites);
};

/**
 * About page rendering function
 */
const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

/**
 * Upload page rendering function
 */
const renderUpload = () => {

  q(CONTAINER_SELECTOR).innerHTML = toUploadView();
};

/**
 * Asynchronously fetches and renders the details of a specific gif.
 *
 * @param {string} id - The ID of the gif to fetch and render.
 * This function fetches the gif details using the `loadDetails` function,
 * then constructs the HTML for the details view and inserts it into the
 * '#popup-container' element. It also sets up event listeners to close
 * the details view when the close button is clicked or the 'Escape' key is pressed.
 */
export const renderDetails = async (id) => {
  const gifDetails = await loadDetails(id);


  const closeButton = '<button id="close-popup">X</button>';

  q('#popup-container').innerHTML = closeButton + toGifDetailsView(gifDetails);
  q('#popup-container').style.display = 'block';


  q('#close-popup').addEventListener('click', () => {
    q('#popup-container').style.display = 'none';
  });

  document.addEventListener('keydown', function onKeydown(event) {
    if (event.key === 'Escape') {
      q('#popup-container').style.display = 'none';
      document.removeEventListener('keydown', onKeydown);
    }
  });

};

/**
 * Renders the about GIF popup with the given GIF name.
 * @param {string} name - The name of the GIF.
 * @return {Promise<void>} - A promise that resolves when the about GIF popup is rendered.
 */
export const renderAboutGif = async (name) => {
  const gif = await loadGifByName(name);

  const closeButton = '<button id="close-popup">X</button>';

  q('#gif-about-popup').innerHTML = closeButton + toGifAboutView(gif);
  q('#gif-about-popup').style.display = 'block';

  q('#close-popup').addEventListener('click', () => {
    q('#gif-about-popup').style.display = 'none';
  });

  document.addEventListener('keydown', function onKeydown(event) {
    if (event.key === 'Escape') {
      q('#gif-about-popup').style.display = 'none';
      document.removeEventListener('keydown', onKeydown);
    }
  });

};

