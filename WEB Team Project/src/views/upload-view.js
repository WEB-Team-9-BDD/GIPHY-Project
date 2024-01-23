/* eslint-disable valid-jsdoc */
/**
 *
 * @return The HTML for the upload page.
 */
export const toUploadView = () => `
<div class="parent-upload">
<div class="upload-container">
<h2>Upload your own GIF</h2>
<form id="form">
        <input class="upload-element" id="file" type="file" accept="image/gif">

        <label class="label" for="tags">Tags</label>
        <input class="upload-element" id="tags" type="text" name="tags">
        
        <label class="label" for="url">URL Upload (Optional)</label>
        <input class="upload-element" id="url" type="url" name="url">
        
        <br>
        <button id="upload" type="submit">UPLOAD</button>
    </form>
</div>
<div class="uploaded-container-outer">
<h2>Uploaded GIFs</h2>
<div class="uploaded-container-inner"></div>
</div>`;

/**
 * Gives a HTML structure of the uploaded gifs container
 * @param {Array} uploadedGifs - Array with uploaded gifs data.
 * @returns A mapping function for every uploaded gif.
 */
export const toUploadedView = (uploadedGifs) => {
  return `
    ${uploadedGifs.map(toUploadedItemView).join('')}
  `;
};

/**
 * Gives a HTML structure of the uploaded gif
 * @param {Object} gifInfo - An object with information for the gif
 * @returns The HTML for a single gif.
 */
export const toUploadedItemView = (gifInfo) => `
    <div .gif-item>
    <a href="#/uploaded/${gifInfo.id}">
    <img class="uploaded-gif" src="${gifInfo.images.fixed_width.url} alt="${gifInfo.title}">
    </a>
    </div>
    `;

/**
 * @returns In case of zero uploaded gifs - the function returns HTML structure
 * for no uploads message.
 */
export const toEmptyUploadedView = () => `
<div>
<h3>No Uploads yet!</h3>
</div>`;
