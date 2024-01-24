import { renderFavoriteStatus } from '../events/favorites-events.js';

/**
 * Converts an array of trending GIFs into HTML markup for the trending view.
 * @param {object[]} trendingGifs - An array of trending GIF objects.
 * @returns {string} - HTML markup representing the trending view.
 */

export const toTrendingView = (trendingGifs) => {
  return `
      <section class="trending">
        <h2>Trending</h2>
        <ul class="gif-grid">
          ${trendingGifs.map(toTrendingItemView).join('')}
        </ul>
      </section>
    `;
};

/**
 * Converts a single trending GIF item into HTML markup for the trending view.
 * @param {object} trendingItem - A single trending GIF object.
 * @returns {string} - HTML markup representing the trending item view.
 */

const toTrendingItemView = (trendingItem) => {
  return `
      <li class="gif-item">
          <div class="img-wrapper">
              <a href='#/trending/${trendingItem.id}'>
              <img src="${trendingItem.images.fixed_width.url}" 
               alt="${trendingItem.title}" data-gif-id="${trendingItem.id}" 
               onclick="location.href='#/trending/${trendingItem.id}'
               " style="cursor: pointer;" />
                </a>
                <div class="add-favorite-btn">${renderFavoriteStatus(trendingItem.id)}
    </div> 
          </div>       
      </li>
  `;
};

