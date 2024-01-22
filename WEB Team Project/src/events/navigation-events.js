import { ABOUT, CONTAINER_SELECTOR, FAVORITES, HOME, TRENDING, UPLOAD } from '../common/constants.js';
import { loadTrendingGifs, loadDetails } from '../requests/request-service.js';
import { toAboutView } from '../views/about-view.js';
// import { toFavoritesView } from '../views/favorites-view.js';
import { toHomeView } from '../views/home-view.js';
import { q, setActiveNav } from './helpers.js';
import { getFavorites } from '../data/favorites.js';
import { toTrendingView } from '../views/trending-view.js';
// import { toSearchView } from '../views/search-view.js';
import { toUploadView } from '../views/upload-view.js';
import { toGifDetailsView } from '../views/details-view.js';
import { toFavoritesView } from '../views/favorites-view.js';

// public API
export const loadPage = (page = '') => {

  switch (page) {

  case HOME:
    setActiveNav(HOME);
    return renderHome();

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
    return renderAbout();

  case UPLOAD:
    setActiveNav(UPLOAD);
    return renderUpload();
    /* if the app supports error login, use default to log mapping errors */
  default: return null;
  }

};

// private functions

const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

const renderTrending = async () => {
  const trendingGifs = await loadTrendingGifs();

  q(CONTAINER_SELECTOR).innerHTML = toTrendingView(trendingGifs);
};

export const renderFavorites = async () => {
  const favorites = getFavorites();

  q(CONTAINER_SELECTOR).innerHTML = await toFavoritesView(favorites);
};

const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

const renderUpload = () => {

  q(CONTAINER_SELECTOR).innerHTML = toUploadView();
};

export const renderDetails = async (id) => {
  const gifDetails = await loadDetails(id);

  // Add a close button to the popup
  const closeButton = '<button id="close-popup">X</button>';

  q('#popup-container').innerHTML = closeButton + toGifDetailsView(gifDetails);
  q('#popup-container').style.display = 'block'; // Show the popup

  // Add an event listener to the close button
  q('#close-popup').addEventListener('click', () => {
    q('#popup-container').style.display = 'none'; // Hide the popup
  });

}
