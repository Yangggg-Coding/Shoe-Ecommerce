import { products } from "../Data/data.js";
import { cart } from "./cart.js";
const wishlistIds = JSON.parse(localStorage.getItem("wishlist")) || [];
let wishList = document.getElementById("js-wishlish");
products
  .filter((product) => wishlistIds.includes(product.Id))
  .forEach((product) => {
    wishList.innerHTML += ` <div >
      <div
        class="hero-text js-product-container"
          data-product-id="${product.Id}"
      >        
        <img src="${product.Image}" alt="${product.Name}" />
        <i data-product-id="${product.Id}" class="fa-regular fa-heart product-heart js-product-heart"title="Add to wishlist" ></i>
        <h4>${product.Name}</h4>  
        <span>1 Color</span>
      </div> 
       <div class='price'>
          <p>$${product.price}</p>        
          <button data-product-id="${product.Id}"  class='js-addTocart'>Add to Cart</button>
        </div>  
    </div>   `;
  });

document.querySelectorAll(".js-addTocart").forEach((addtoCart) => {
  addtoCart.addEventListener("click", () => {
    let productId = Number(addtoCart.dataset.productId);
    cart.push(productId);
    localStorage.setItem("addtocart", JSON.stringify(cart));
  });
});
