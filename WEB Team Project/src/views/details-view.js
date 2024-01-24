/**
 * Converts a gif object into a string of HTML representing the gif's details.
 *
 * @param {Object} gifView - The gif object to convert. This object should have properties for the gif's image URL, title, rating, and user information.
 * @return {string} A string of HTML representing the gif's details.
 */
export const toGifDetailsView = (gifView) => {
  return `
    <div class="gif-card">
      <div class="card-image">            
      <img src="${gifView.images.fixed_width.url}" alt="${gifView.title}" class="single details-image" style="pointer-events: none;">
      </div>
      <div class="gif-detail">
         <p class='title'>Title: ${gifView.title}</p><br>
         <p>Rating: ${gifView.rating}</p>
         <p>User: ${gifView.user ? gifView.user.username : 'Unknown'}</p>
         <img src="${gifView.user ? gifView.user.avatar_url : ''}" alt="${gifView.user ? gifView.user.username : 'Unknown'}" class="avatar" style="max-width: 100px;">
      </div>
 </div> `;
};
