import { q } from './helpers.js';

export const renderLoadingView = () => {
  q('.upload-container').innerHTML = `
    <div class="load-container">
    <h2>Processing your upload...</h2>
    <div class = "loader"></div>
    </div>
    `;
};