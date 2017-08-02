const cartButton = document.querySelector("#cart-button");
const cartCount = document.querySelector("#cart-item-count");

const cartModal = document.querySelector(".cart-modal");
const listModal = document.querySelector(".cart-list")
const clearModal = document.querySelector(".cart-clear");
const closeModal = document.querySelector(".close-modal");
const totalListModal = document.querySelector(".total-list");

let cartArray = [];
let priceArray = [];
let total = "";

const itemButton = document.querySelectorAll(".item-button");
const itemName = document.querySelectorAll(".item-name");
const itemPrice = document.querySelectorAll(".item-price");

cartButton.addEventListener("click", function() {
  cartModal.style.display = "block";
});

clearModal.addEventListener("click", function() {
  cartArray = [];
  priceArray = [];
  listModal.innerHTML = "";
  totalListModal.innerHTML = "0.00";
  cartCount.innerHTML = "0";
  cartList = "";
  total = "";
})

closeModal.addEventListener("click", function() {
  cartModal.style.display = "none";
});

for (i = 0; i < itemButton.length; i++) {
  const itemNameList = itemName[i].innerHTML;
  const itemPriceList = itemPrice[i].innerHTML;
  const itemPriceTotal = Number(itemPrice[i].innerHTML.substring(1));
  itemButton[i].addEventListener("click", function() {
    cartArray.push([itemNameList, "<span class='align-right'>", itemPriceList, "</span> <br> <br>"]);
    cartCount.innerHTML = cartArray.length;
    priceArray.push(itemPriceTotal);
    total = priceArray.reduce(function(a,b) {
      return a + b;
    });
    listModal.innerHTML = cartArray.join().replace(/[,]/g,'');
    totalListModal.innerHTML = total.toFixed(2);
  });
}
