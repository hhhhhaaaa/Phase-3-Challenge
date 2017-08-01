const cartButton = document.querySelector("#cart-button");
const cartCount = document.querySelector("#cart-item-count");

const cartModal = document.querySelector(".cart-modal");
const listModal = document.querySelector(".cart-list")
const clearModal = document.querySelector(".cart-clear");
const closeModal = document.querySelector(".close-modal");
const totalListModal = document.querySelector(".total-list");

let cartArray = [];
let priceArray = [];

const itemButton = document.querySelectorAll(".item-button");
const itemName = document.querySelectorAll(".item-name");
const itemPrice = document.querySelectorAll(".item-price");

console.log()

cartButton.addEventListener("click", function() {
  cartModal.style.display = "block";
});

clearModal.addEventListener("click", function() {
  cartArray = [];
  listModal.innerHTML = "";
  totalListModal.innerHTML = "0.00";
})

closeModal.addEventListener("click", function() {
  cartModal.style.display = "none";
});

for (i = 0; i < itemButton.length; i++) {
  const itemNameList = itemName[i].innerHTML;
  const itemPriceList = itemPrice[i].innerHTML;
  const itemPriceTotal = Number(itemPrice[i].innerHTML.substring(1));
  let cartList = "";
  itemButton[i].addEventListener("click", function() {
    cartArray.push([itemNameList, itemPriceList]);
    cartCount.innerHTML = cartArray.length;
    for (j = 0; j < cartArray.length; j++) {
      cartList += cartArray[j][0] + '<span class="align-right">'
      + cartArray[j][1] + "</span> <br> <br>";
    }
    priceArray.push(itemPriceTotal);
    const total = priceArray.reduce(function(a,b) {
      return a + b;
    });
    console.log(total)
    listModal.innerHTML = cartList;
    totalListModal.innerHTML = total;
  });
}
