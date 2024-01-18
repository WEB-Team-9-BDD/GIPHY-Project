// import { toMovieSimple } from './movie-views.js';
import { renderFavoriteStatus } from './events/favorites-events.js';

export const toFavoritesView = (movies) => `
<div id="movies">
  <h1>Favorite movies:</h1>
  <div class="content">
    ${movies.map(toMovieSimple).join('\n') || '<p>Add some movies to favorites to see them here.</p>'}
  </div>
</div>
`;


export const toMovieSimple = (movie) => `
<div class="movie">
  <h1>${movie.title}</h1>
  <h2>${movie.year}</h2>
  <img src="${movie.poster}"><br>
  <button class="view-movie-btn" data-movie-id="${movie.id}">View details</button>
  ${renderFavoriteStatus(movie.id)}
</div>
`;
