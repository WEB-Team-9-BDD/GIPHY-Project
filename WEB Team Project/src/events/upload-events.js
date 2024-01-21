import { q } from './helpers.js';

export const renderLoadingView = () => {
  q('.upload-container').innerHTML = `
    <div class="load-container">
    <h2>Processing your upload...</h2>
    <div class = "loader"></div>
    </div>
    `;
};

export const renderSuccess = (url) => {
  q('.upload-container').innerHTML = `
      <div class = "success-container">
      <div class='success-upload'>
      <h2>The GIF has been added successfully</h2>
      </div>
      <div id="success-image">
      <img class="gif-img-item" src="${url}">
      </div>
      </div>`;
};

export const renderFailure = (status = '') => {
  q('.upload-container').innerHTML = `
      <div class = "fail-container">
      <div class = "fail-message">
      <h2>The GIF upload has failed!</h2>
      <h3>${status} That's an error</h3>
      <button class='try-again'> Please try again!</button>
      </div>
      </div>`;
};
