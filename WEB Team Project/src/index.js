import { ABOUT, FAVORITES, HOME, TRENDING, UPLOAD } from './common/constants.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { q } from './events/helpers.js';
import { loadPage, renderDetails } from './events/navigation-events.js';
import { renderSearchGifs } from './events/search-events.js';
import { renderFailure, renderLoadingView } from './events/upload-events.js';
import { uploadGif } from './requests/request-service.js';


document.addEventListener('DOMContentLoaded', () => {

  // add global listener
  document.addEventListener('click', event => {

    // nav events
    if (event.target.classList.contains('nav-link')) {

      loadPage(event.target.getAttribute('data-page'));
    }

    // in case of failure of GIF upload
    if (event.target.classList.contains('try-again')) {

      loadPage(UPLOAD);
    }

    // toggle favorite event
    if (event.target.classList.contains('favorite')) {
      toggleFavoriteStatus(+event.target.getAttribute('data-movie-id'));
    }

    // toggle details event
    if (event.target.classList.contains('details-button')) {
      renderDetails(event.target.getAttribute('data-gif-id'));
    }

  });

  // search events
  q('#search').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
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
    const username = q('#username').value;
    const tags = q('#tags').value;
    // const urlInput = q('#url').value;

    const file = fileInput.files[0];
    if (!file) {
      return renderFailure();
    }
    const url = URL.createObjectURL(file);

    const formData = new FormData();
    formData.append('file', file, 'giphy.gif');

    // the working version with url from file
    uploadGif(username, url, tags, formData);
    renderLoadingView();
    return 'ok';
  });


  loadPage(HOME);
  // loadPage(TRENDING);
  // loadPage(FAVORITES);
  // loadPage(ABOUT);

});
