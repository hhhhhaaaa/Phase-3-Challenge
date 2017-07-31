const cartButton = document.querySelector("#cart-button");
const cartModal = document.querySelector(".cart-modal");

cartButton.addEventListener("click", function () {
  cartModal.style.display = "block";
});
