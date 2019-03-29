// get modal
const modal = document.querySelector("#simpleModal");

// get close button
const closeBtn = document.querySelector("#closeBtn");

// get gallery images
const galleryImgs = document.querySelectorAll("#work-a .items .item img");

console.log(galleryImgs);

// get modal img
const modalImg = document.querySelector("#simpleModal .modal-content img");

console.log(modal);

console.log(modalImg);

const addModalListener = array => {
  array.forEach(item => {
    item.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.setAttribute("src", item.getAttribute("src"));
    });
  });
};

addModalListener(galleryImgs);

// add event for outside click to close modal
window.addEventListener("click", e => {
  // if target == modal close modal
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

// add ebent for close btn to close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
