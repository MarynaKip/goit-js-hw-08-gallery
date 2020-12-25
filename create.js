import galleryItems from "./gallery-items.js";

// Создание и рендер разметки по массиву данных и предоставленному шаблону.

let insertedElementsText = "";
const createGallery = galleryItems.map((galleryItem) => {
  insertedElementsText += `<li class="gallery__item">
  <a
    class="gallery__link"
    href=${galleryItem.original}
  >
    <img
      class="gallery__image"
      src=${galleryItem.preview}
      data-source=${galleryItem.original}
      alt="Tulips"
    />
  </a>
</li>`;
});

const refs = {
  gallery: document.querySelector(".js-gallery"),
  image: document.querySelector(".lightbox__image"),
  lightbox: document.querySelector(".lightbox"),
};
//console.log(refs.lightbox);

refs.gallery.insertAdjacentHTML("afterbegin", insertedElementsText);

// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.

refs.gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  console.log(event.target);

  if (event.target.nodeName !== "IMG") {
    return;
  }

  // Открытие модального окна по клику на элементе галереи.
  refs.lightbox.classList.add("is-open");

  // Подмена значения атрибута src элемента img.lightbox__image.
  const imageRef = event.target;
  const originalImageURL = imageRef.dataset.source;

  refs.image.src = originalImageURL;
  console.log(originalImageURL);
}
