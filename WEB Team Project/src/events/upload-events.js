import { loadUploadedGifs } from '../requests/request-service.js';
import { toEmptyUploadedView, toUploadedView } from '../views/upload-view.js';
import { q } from './helpers.js';

// Events on upload view
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
      <button class="new-upload">New Upload</button>
      </div>`;
};

export const renderFailure = (status = '') => {
  q('.upload-container').innerHTML = `
      <div class = "fail-container">
      <div class = "fail-message">
      <h2>The GIF upload has failed!</h2>
      <h3>That's an error: ${status} </h3>
      <button class='try-again'> Please try again!</button>
      </div>
      </div>`;
};

// Events on uploaded view
const uploadedIdsArray = JSON.parse(localStorage.getItem('uploaded')) || [];

export const getUploadedIds = () => [...uploadedIdsArray];

export const addUploadedGif = (gifId) => {
  if (uploadedIdsArray.find(id => id === gifId)) {
    // GIF has already been added to Uploaded GIFs
    return;
  }
  uploadedIdsArray.push(gifId);
  localStorage.setItem('uploaded', JSON.stringify(uploadedIdsArray));
};

export const renderUploadedGifs = async () => {
  const uploadedGifs = await loadUploadedGifs();
  if (uploadedIdsArray.length > 0) {
    q('.uploaded-container-inner').innerHTML = toUploadedView(uploadedGifs);
  } else {
    q('.uploaded-container-inner').innerHTML = toEmptyUploadedView();
  }
};
