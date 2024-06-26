import { renderFavoriteStatus } from '../events/favorites-events.js';

/* eslint-disable valid-jsdoc */
/* eslint-disable linebreak-style */
/**
 *
 * @param {Array<{
* id: string,
* rating: string,
* title: string,
* images: {
* fixed_width: {
* url: string,
* }
* },
* user: {
* avatar_url: string,
* username:string,
* }
* }>} searchGifs
*/
export const toSearchView = (text, searchGifs) => {
  return `<div>
<h2> Gifs with tag name: #${text}</h2>
<div class="gif-container">
${searchGifs.map(toSingleGif).join('')}
</div>
</div>`;
};

export const toSingleGif = (gifInfo) => `
  <div class="gif-item">
    <div class="img-wrapper">
      <a href="#/search/${gifInfo.id}">
        <img class="gif-img-item" src="${
  gifInfo.images.fixed_width.url
}" alt="${gifInfo.title}" 
        data-gif-id="${gifInfo.id}"
        onclick="location.href='#/search/${gifInfo.id}'
        " style="cursor: pointer;" />
      </a>
      <div class="add-favorite-btn">${renderFavoriteStatus(gifInfo.id)}</div>
    </div>
  </div>
`;
