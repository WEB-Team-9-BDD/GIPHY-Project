import { EMPTY_HEART, FULL_HEART } from '../common/constants.js';
import { addFavorite, getFavorites, removeFavorite } from '../data/favorites.js';
import { q } from './helpers.js';

export const toggleFavoriteStatus = (gifId) => {
  const favorites = getFavorites();
  const heartSpan = q(`button[data-gif-id="${gifId}"]`);

  if (favorites.includes(gifId)) {
    removeFavorite(gifId);
    heartSpan.classList.remove('active');
    heartSpan.innerHTML = EMPTY_HEART;
  } else {
    addFavorite(gifId);
    heartSpan.classList.add('active');
    heartSpan.innerHTML = FULL_HEART;
  }
};


export const renderFavoriteStatus = (gifId) => {
  const favorites = getFavorites();
  const isFavorite = favorites.includes(gifId);

  return `
    <div class="heart-wrapper ${isFavorite ? 'active' : ''}">
      <button class="add-favorite-btn${isFavorite ? ' active' : ''}" data-gif-id="${gifId}">
        ${isFavorite ? FULL_HEART : EMPTY_HEART}
      </button>
    </div>
  `;
};

