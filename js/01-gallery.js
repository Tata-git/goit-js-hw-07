import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
// console.log(galleryRef);
let instanceModal;

galleryRef.addEventListener("click", openGallery);
galleryRef.insertAdjacentHTML("beforeend", galleryElementMarkup(galleryItems));

function openGallery(event) {
  event.preventDefault();

  if (event.target.nodeName === "IMG") {
    instanceModal = basicLightbox.create(
      `
    <div class="modal">
        <img src="${event.target.dataset.source}" width="800" height="600" alt="img">
          </div>
    `,
      {
        onShow: (instanceModal) => {
          window.addEventListener("keydown", handleClosePopup);
        },

        onClose: (instanceModal) => {
          window.addEventListener("keydown", handleClosePopup);
        },
      }
    );

    instanceModal.show();
  }
}
function handleClosePopup(e) {
  if (e.code === "Escape") {
    instanceModal.close();
  }
}

function galleryElementMarkup(images) {
  return images
    .map(({ description, original, preview }) => {
      return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
	    </div>`;
    })
    .join("");
}
