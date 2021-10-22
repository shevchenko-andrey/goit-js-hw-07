import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");

galleryRef.innerHTML = createGalleryMurcup(galleryItems);
galleryRef.addEventListener("click", onGettingUrlPicture);
function galerryMarcup({ preview, original, description }) {
  return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`;
}
function createGalleryMurcup(items) {
  return items.map(galerryMarcup).join("");
}

function onGettingUrlPicture(event) {
  if (event.target === event.currentTarget) {
    return;
  }
  event.preventDefault();
  event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src=${event.target.dataset.source} width="800" height="600">
`);

  instance.show();
}
console.log(galleryItems);
