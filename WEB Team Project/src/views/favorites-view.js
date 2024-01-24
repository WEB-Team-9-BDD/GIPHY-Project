import { renderFavoriteStatus } from '../events/favorites-events.js';
import { API_KEY } from '../common/constants.js';
import { fetchFavorites, loadRandomGif } from '../requests/request-service.js';
import { getFavorites } from '../data/favorites.js';

/**
 * Renders the favorites view, displaying a list of favorite GIFs along with their favorite status buttons.
 * If there are no favorite GIFs, it shows a message and a random GIF example.
 * @param {number[]} favGifsId - An array containing the IDs of the favorite GIFs.
 * @returns {Promise<string>} - HTML markup representing the favorites view.
 */

export const toFavoritesView = async (favGifsId) => {
  const result = await loadRandomGif();

  if (favGifsId.length === 0) {
    return `<div id="no-favorites">
    <h1>Favorite GIFs:</h1>
    <h2>Add some GIFs to favorites to see them here. This is a random GIF exmaple.</h2>
    <li class="random-gif">
    <img src="${result.images.fixed_width.url}" alt="${result.title}" data-gif-id="${result.id}" 
    onclick="location.href='#/random/${result.id}'" style="cursor: pointer;" width="150" height="150">
    </li>
    </div>`;
  }

  const favGifsIds = getFavorites().join(', ');

  const favGifs = await fetchFavorites(favGifsIds);

  return `
  <div id="favorites">
    <h1>Favorite GIFs:</h1>
    <ul class="content">
      ${favGifs.map(gif => gif ? `
        <li class="gif-item">
          <div class="img-wrapper">
            <a href='#/favorites/${gif.id}'>
              <img src="${gif.images.fixed_height.url}" alt="${gif.title}" data-gif-id="${gif.id}" 
               onclick="location.href='#/favorites/${gif.id}'" style="cursor: pointer;" />
            </a>
            <div class="add-favorite-btn">${renderFavoriteStatus(gif.id)}</div>
          </div>
        </li>
        ` : '<p>GIF cannot load</p>').join('')}
    </ul>
  </div>`;
};

