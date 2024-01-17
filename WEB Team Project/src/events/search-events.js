import { CONTAINER_SELECTOR } from '../common/constants.js';
import { loadSearchGifs } from '../requests/request-service.js';
import { toSearchView } from '../views/search-view.js';
import { q } from './helpers.js';

export const renderSearchGifs = async (searchGif) => {
  const gifs = await loadSearchGifs(searchGif);

  q(CONTAINER_SELECTOR).innerHTML = toSearchView(searchGif, gifs);
};
