/**
 * Retrieves the favorites from local storage or initializes an empty array if no favorites are stored.
 * @type {number[]}
 */

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

/**
 * Adds a GIF ID to the list of favorites and updates the local storage.
 * @param {number} gifId - The ID of the GIF to be added to favorites.
 * @returns {void}
 */

export const addFavorite = (gifId) => {
  if (favorites.find(id => id === gifId)) {
    return;
  }

  favorites.push(gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
 * Removes a GIF ID from the list of favorites and updates the local storage.
 * @param {number} gifId - The ID of the GIF to be removed from favorites.
 * @returns {void}
 */

export const removeFavorite = (gifId) => {
  favorites = favorites.filter(id => id !== gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
 * Retrieves a copy of the current favorites list.
 * @returns {number[]} - An array containing the IDs of the favorite GIFs.
 */

export const getFavorites = () => [...favorites];
