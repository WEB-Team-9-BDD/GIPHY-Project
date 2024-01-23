import { renderFavoriteStatus } from '../events/favorites-events.js';
import { API_KEY } from '../common/constants.js';
import { fetchFavorites, loadRandomGif } from '../requests/request-service.js';
import { getFavorites } from '../data/favorites.js';

export const toFavoritesView = async (favGifsId) => {
  const result = await loadRandomGif();

  if (favGifsId.length === 0) {
    return `<div id="no-favorites">
    <h1>Favorite GIFs:</h1>
    <h2>Add some GIFs to favorites to see them here.</h2>
    <li class="randomGif">
    <img src="${result.images.fixed_width.url}" width="150" height="150" alt="${result.title}"
    <div class="gif-details">
    </div>
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
        <img src="${gif.images.fixed_height.url}" alt="${gif.title}" data-gif-id="${gif.id}" 
        onclick="location.href='#/favorites/${gif.id}'" style="cursor: pointer;" />
          ${renderFavoriteStatus(gif.id)}
        </li>
        ` : '<p>GIF cannot load</p>').join('')}
    </ul>
  </div>`;;
};

