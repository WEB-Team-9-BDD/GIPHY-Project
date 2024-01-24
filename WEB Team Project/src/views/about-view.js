/**
 * Generates the HTML markup for the About View.
 * @return {string} The HTML markup for the About View.
 */
export const toAboutView = () => `
<div id="about">
  <h1>About the app</h1>
  <div class="welcome">Welcome to GIF4E. Following our motto "Make it Move" here you can search and share funny gifs with your friends. </div>  
  <div class="about-autors">Authors:
   <br><span class="author" id="Borislav">Borislav Pachev</span>
   <br><span class="author" id="Danko">Danko Dankov</span><br>
   <span class="author" id="Dayana">Dayana Vakareeva</span></div>   
  <h3>Date: 2024</h3>
</div>
`;

/**
 * Converts a GIF object into an HTML string representing the about view of the GIF.
 * @param {Object} gif - The GIF object.
 * @return {string} - The HTML string representing the about view of the GIF.
 */
export const toGifAboutView = (gif) => {
  return `
    <div class="gif-about-view">
      <img class="details-image" src="${gif.images.fixed_width.url}" alt="${gif.title}">     
    </div>
  `;
};
