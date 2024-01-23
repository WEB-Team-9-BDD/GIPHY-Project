export const toUploadView = () => `
<div class="parent-upload">
<div class="upload-container">
<h2>Upload your own GIF</h2>
<form id="form">
        <input class="upload-element" id="file" type="file" accept="image/gif">

        <label class="label" for="tags">Tags:</label>
        <input class="upload-element" id="tags" type="text" name="tags">
        
        <label class="label" for="url">URL Upload:</label>
        <input class="upload-element" id="url" type="url" name="url"></input>
        
        <br>
        <button id="upload" type="submit">UPLOAD</button>
    </form>
</div>
<div class="uploaded-container-outer">
<h2>Uploaded GIFs</h2>
<div class="uploaded-container-inner">
</div>
</div>`;

export const toUploadedView = (uploadedGifs) => {
  return `
    ${uploadedGifs.map(toUploadedItemView).join('')}
  `;
};

export const toUploadedItemView = (gifInfo) => `
    <div .gif-item>
    <a href="#/uploaded/${gifInfo.id}">
    <img class="uploaded-gif" src="${gifInfo.images.fixed_width.url} alt="${gifInfo.title}">
    </a>
    </div>
    `;

export const toEmptyUploadedView = () => `<div>
<h3>No Uploads yet!</h3>
<div>`;
