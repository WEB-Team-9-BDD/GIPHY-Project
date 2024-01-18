import { ABOUT, CONTAINER_SELECTOR, FAVORITES, HOME, TRENDING } from './common/constants.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { q } from './events/helpers.js';
import { loadPage } from './events/navigation-events.js';
import { renderSearchGifs } from './events/search-events.js';


document.addEventListener('DOMContentLoaded', () => {

  // add global listener
  document.addEventListener('click', event => {

    // nav events
    if (event.target.classList.contains('nav-link')) {

      loadPage(event.target.getAttribute('data-page'));
    }

    // toggle favorite event
    if (event.target.classList.contains('favorite')) {
      toggleFavoriteStatus(+event.target.getAttribute('data-movie-id'));
    }

  });

  // search events
  q('#search').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      q(CONTAINER_SELECTOR).innerHTML = renderSearchGifs(event.target.value);
    }
  });

  loadPage(HOME);
  loadPage(TRENDING);
  loadPage(FAVORITES);
  loadPage(ABOUT);

});