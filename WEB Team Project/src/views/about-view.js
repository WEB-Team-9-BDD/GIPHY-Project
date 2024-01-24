export const toAboutView = () => `
<div id="about">
  <h1>About the app</h1>
  <div class="about-autors">Authors:
   <br><span class="author" id="Borislav">Borislav Pachev</span>
   <br><span class="author" id="Danko">Danko Dankov</span><br>
   <span class="author" id="Dayana">Dayana Vakareeva</span></div>
  <br>
  <div class="welcome">Welcome to GIF4E. Following our motto "Make it Move" here you can search and share funny gifs with your friends. </div>
  <h3>Date: 2024</h3>
</div>
`;

export const toGifAboutView = (gif) => {
  return `
    <div class="gif-about-view">
      <img src="${gif.images.fixed_width.url}" alt="${gif.title}">     
    </div>
  `;
};
