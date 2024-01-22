import { renderFavoriteStatus } from '../events/favorites-events.js';

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

const toTrendingItemView = (trendingItem) => {
  return `
      <li class="gif-item">
          <a href='#/trending/${trendingItem.id}'>
          <img src="${trendingItem.images.fixed_width.url}" 
           alt="${trendingItem.title}" data-gif-id="${trendingItem.id}" 
           onclick="location.href='#/trending/${trendingItem.id}'
           " style="cursor: pointer;" />
            </a>
            ${renderFavoriteStatus(trendingItem.id)}        
      </li>
  `;
};
