import { CONTAINER_SELECTOR } from '../common/constants.js';
import { loadSearchGifs } from '../requests/request-service.js';
import { toSearchView } from '../views/search-view.js';
import { q } from './helpers.js';


/**
 * A function that uses loadSearchGifs for asynchronous loading the gifs by the searched
 * parameter
 * @param {string} searchTerm - The keyword with whom you are finding the gif
 * The function is adding HTML on the page with resulting GIFs.
 */
export const renderSearchGifs = async (searchTerm) => {
  const gifs = await loadSearchGifs(searchTerm);

  q(CONTAINER_SELECTOR).innerHTML = toSearchView(searchTerm, gifs);
};
