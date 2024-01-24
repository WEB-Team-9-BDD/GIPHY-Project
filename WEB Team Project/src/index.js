import { API_KEY, TRENDING, UPLOAD } from './common/constants.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { q } from './events/helpers.js';
import { loadPage, renderDetails } from './events/navigation-events.js';
import { renderSearchGifs } from './events/search-events.js';
import { renderFailure, renderLoadingView, renderUploadedGifs } from './events/upload-events.js';
import { uploadGif } from './requests/request-service.js';
import { renderFavorites } from './events/navigation-events.js';

/**
 * Initializes the application when the DOM is fully loaded.
 * This function sets up global click and keypress event listeners to handle
 * navigation, gif favoriting, gif details viewing, and gif searching.
 */
document.addEventListener('DOMContentLoaded', () => {

  // add global listener
  document.addEventListener('click', event => {

    // nav events
    if (event.target.classList.contains('nav-link')) {

      document.querySelector('#popup-container').style.display = 'none';

      loadPage(event.target.getAttribute('data-page'));
    }

    // in case of failure of GIF upload
    if (event.target.classList.contains('try-again') ||
      event.target.classList.contains('new-upload')) {
      loadPage(UPLOAD);
      (async () => await renderUploadedGifs())();
    }

    // toggle favorite event
    /**
 * Event handler for toggling the favorite status of a GIF when the "add-favorite-btn" element is clicked.
 * @param {Event} event - The click event object.
 * @returns {void}
 */
    if (event.target.classList.contains('add-favorite-btn')) {
      const gifId = event.target.getAttribute('data-gif-id');
      toggleFavoriteStatus(gifId);
      const favorite = document.querySelector('#favorite');
      if (favorite.classList.contains('active')) {
        renderFavorites();
      }
    }

    // toggle details event
    if (event.target.tagName === 'IMG' && !event.target.classList.contains('details-image')) {
      renderDetails(event.target.getAttribute('data-gif-id'));
    }

    if (event.target.classList.contains('upload-page')) {
      renderUploadedGifs();
    }

    if (event.target.classList.contains('project-logo')) {

      document.querySelector('#popup-container').style.display = 'none';
      
      loadPage(TRENDING);
    }
  });

  // search events
  q('#search').addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && q('#search').value !== '') {
      renderSearchGifs(event.target.value);
      q('#search').value = '';
    }
  });

  q('#search-button').addEventListener('click', () => {

    if (q('#search').value.length > 0) {
      renderSearchGifs(q('#search').value);
      q('#search').value = '';
    }
  });

  // upload events
  document.addEventListener('submit', (event) => {
    event.preventDefault();

    const fileInput = q('#file');
    const tags = q('#tags').value.trim();
    let urlInput = q('#url').value;

    let url;
    const formData = new FormData();
    formData.append('api_key', API_KEY);

    if (urlInput) {
      uploadGif(url = '', urlInput, tags, formData);
      renderLoadingView();

    } else if (!urlInput && fileInput) {

      const file = fileInput.files[0];
      if (!file) {
        return renderFailure();
      }

      url = URL.createObjectURL(file);
      formData.append('file', file, 'giphy.gif');

      uploadGif(url, urlInput = '', tags, formData);
      renderLoadingView();
    }
    return 'Ok!';
  });


  loadPage(TRENDING);
});
