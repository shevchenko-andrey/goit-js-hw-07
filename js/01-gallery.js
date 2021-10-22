import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");
const instance = basicLightbox.create(`<img src="" />`, {
  onShow: () => {
    window.addEventListener("keydown", keydownEscape);
  },
  onClose: () => {
    window.removeEventListener("keydown", keydownEscape);
  },
});

galleryRef.innerHTML = createGalleryMurcup(galleryItems);
galleryRef.addEventListener("click", onShowOriginalPicture);
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

function onShowOriginalPicture(event) {
  if (event.target === event.currentTarget) {
    return;
  }
  event.preventDefault();
  instance.element().querySelector("img").src = event.target.dataset.source;
  instance.show();
}
function keydownEscape(event) {
  if (event.key === "Escape") {
    instance.close();
    return;
  }
}

console.log(galleryItems);
