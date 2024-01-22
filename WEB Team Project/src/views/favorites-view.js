// import { toMovieSimple } from './movie-views.js';
import { renderFavoriteStatus } from '../events/favorites-events.js';
import { API_KEY } from '../common/constants.js';
import { fetchFavorites, loadRandomGif } from '../requests/request-service.js';
import { fetchGifById } from '../requests/request-service.js';
import { getFavorites } from '../data/favorites.js';

export const toFavoritesView = async (favGifsId) => {
  const result = await loadRandomGif();

  if (favGifsId.length === 0) {
    return `<p>Add some GIFs to favorites to see them here.</p>
    <li class="randomGif">
    <img src="${result.images.fixed_width.url}" width="150" height="150" alt="${result.title}"
    <div class="gif-details">
      <p>${result.title}</p>
    </div>
    </li>`;
  }

  //const favGifs = await Promise.all(favGifsId.map(id => fetchGifById(id)));
  const favGifsIds = getFavorites().join(', ');
  console.log(favGifsIds);
  const favGifs = await fetchFavorites(favGifsIds);

  return `
  <div id="favorites">
    <h1>Favorite GIFs:</h1>
    <ul class="content">
      ${favGifs.map(gif => gif ? `
        <li class="gif-item">
          <img src="${gif.images.fixed_height.url}" alt="${gif.title}">
          ${renderFavoriteStatus(gif.id)}
          <p>${gif.title}</p>
        </li>
        ` : '<p>GIF cannot load</p>').join('')}
    </ul>
  </div>`;;
};


// const toGifSimple = (gif) => `
// <div class="gif">
//   <h1>${gif.title}</h1>
//   <h2>${gif.year}</h2>
//   <img src="${gif.poster}"><br>
//   <button class="" gif-id="${gif.id}">View details</button>
//   ${renderFavoriteStatus(gif.id)}
// </div>
// `;
