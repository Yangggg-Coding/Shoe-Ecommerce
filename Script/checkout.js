import { products } from "../Data/data.js";
import { cart } from "./cart.js";

function checkout() {
  let cartContainer = document.getElementById("js-cart-item");
  let productCounts = {};

  // Count how many times each product was added to the cart.
  for (let i = 0; i < cart.length; i++) {
    let productId = cart[i];

    if (productCounts[productId]) {
      productCounts[productId] += 1;
    } else {
      productCounts[productId] = 1;
    }
  }
  // Display one row for each product.
  for (let id in productCounts) {
    let amount = productCounts[id];
    let product = null;

    for (let i = 0; i < products.length; i++) {
      if (products[i].Id === Number(id)) {
        product = products[i];
        break;
      }
    }
    if (product) {
      cartContainer.innerHTML += `<div class="cart-item" data-product-id="${product.Id}">
              <div class="product-image">
                <img src="${product.Image}" alt="${product.Name}" />
              </div>
              <div class="product-info">
                <div>
                  <h3>${product.Name}</h3>
                  <p>Black / White &nbsp; · &nbsp; Size 42</p>
                </div>
                <strong>$${product.price}</strong>
                <div class="quantity-control">
                  <button
                    type="button"
                    class="quantity-button js-quantity-minus"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span class="quantity js-quantity">${amount}</span>
                  <button
                    type="button"
                    class="quantity-button js-quantity-plus"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            `;
    }
  }
}
checkout();
addItem();
minusItem();
updateItemCount();
calculate();

function updateItemCount() {
  const itemCount = document.querySelector(".js-item-count");
  if (itemCount) {
    itemCount.innerHTML = `${cart.length} Items`;
  }
}
function calculate() {
  const subTotalElement = document.querySelector(".js-subtotal");
  const totalElement = document.querySelector(".js-total");
  const feeElement = document.querySelector(".js-fee");

  let subTotal = 0;

  cart.forEach((productId) => {
    products.forEach((product) => {
      if (productId === product.Id) {
        subTotal += Number(product.price);
      }
    });
  });
  /*  for (let i = 0; i < cart.length; i++) {
    productId = cart[i];
    for (let j = 0; j < products.length; j++) {
      if (products[j].Id === productId) {
        const price = Number(products[j].price.replace("$", ""));
        subTotal = subTotal + price;
        break;
      }
    }
  } */

  const fee = subTotal * 0.075;
  const total = subTotal + fee;

  subTotalElement.textContent = `$${subTotal.toFixed(2)}`;
  feeElement.textContent = `$${fee.toFixed(2)}`;
  totalElement.textContent = `$${total.toFixed(2)}`;
}
export function addItem() {
  // Add one more copy of the selected product.
  document.querySelectorAll(".js-quantity-plus").forEach((plusItem) => {
    let cartItem = plusItem.closest(".cart-item");
    let productId = Number(cartItem.dataset.productId);
    let quantity = cartItem.querySelector(".js-quantity");
    plusItem.addEventListener("click", () => {
      cart.push(productId);
      let amount = (quantity.innerHTML = Number(quantity.innerHTML) + 1);
      localStorage.setItem("addtocart", JSON.stringify(cart));

      updateItemCount();
      calculate();
    });
  });
}

export function minusItem() {
  // Remove one copy of the selected product.
  document.querySelectorAll(".js-quantity-minus").forEach((minusItem) => {
    let cartItem = minusItem.closest(".cart-item");
    let productId = Number(cartItem.dataset.productId);
    let quantity = cartItem.querySelector(".js-quantity");
    minusItem.addEventListener("click", () => {
      //closest() searches upward from an element, through its parents, until it finds one matching a CSS selector you give it.

      //indexOf() searches an array and returns the position (index) of the first matching value.
      let cartIndex = cart.indexOf(productId);

      if (cartIndex !== -1) {
        cart.splice(cartIndex, 1);
        quantity.innerHTML = Number(quantity.innerHTML) - 1;
        localStorage.setItem("addtocart", JSON.stringify(cart));
        updateItemCount();
        calculate();
      }

      if (Number(quantity.innerHTML) === 0) {
        cartItem.remove();
      }
    });
  });
}
