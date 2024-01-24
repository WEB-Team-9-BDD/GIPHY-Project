import { EMPTY_HEART, FULL_HEART } from '../common/constants.js';
import { addFavorite, getFavorites, removeFavorite } from '../data/favorites.js';
import { q } from './helpers.js';

/**
 * Toggles the favorite status of a GIF based on its ID.
 * If the GIF is already a favorite, it is removed from the favorites; otherwise, it is added.
 * Updates the UI accordingly.
 * @param {number} gifId - The ID of the GIF to toggle favorite status.
 * @returns {void}
 */

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

/**
 * Renders the favorite status of a GIF based on its ID.
 * @param {number} gifId - The ID of the GIF to render favorite status.
 * @returns {string} - HTML markup representing the favorite status button.
 */

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

