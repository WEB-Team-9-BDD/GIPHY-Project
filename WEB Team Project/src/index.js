import { ABOUT, FAVORITES, HOME, TRENDING } from './common/constants.js';
import { renderFavoriteStatus, toggleFavoriteStatus } from './events/favorites-events.js';
import { q } from './events/helpers.js';
import { loadPage } from './events/navigation-events.js';
import { renderSearchGifs } from './events/search-events.js';
import { renderFavorites } from './events/navigation-events.js';


document.addEventListener('DOMContentLoaded', () => {

  // add global listener
  document.addEventListener('click', event => {

    // nav events
    if (event.target.classList.contains('nav-link')) {

      loadPage(event.target.getAttribute('data-page'));
    }

    // toggle favorite event
    if (event.target.classList.contains('add-favorite-btn')) {
      const gifId = event.target.getAttribute('data-gif-id');
      toggleFavoriteStatus(gifId);
      const favorite = document.querySelector('#favorite');
      if (favorite.classList.contains('active')) {
        renderFavorites();
      }
      //toggleFavoriteStatus(+event.target.getAttribute('data-gif-id'));
    }

  });

  // search events
  q('#search').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      renderSearchGifs(event.target.value);
      q('#search').value = '';
    }

    q('#search-button').addEventListener('click', () => {

      if (q('#search').value.length > 0) {
        renderSearchGifs(q('#search').value);
        q('#search').value = '';
      }
    });
  });

  loadPage(HOME);
  loadPage(TRENDING);
  loadPage(FAVORITES);
  loadPage(ABOUT);

});
