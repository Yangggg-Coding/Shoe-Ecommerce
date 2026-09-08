import { products } from "../Data/data.js";
import { cart } from "./cart.js";

function displayAllProduct() {
  const product = document.querySelector(".heroGrid");
  products.forEach((shoe) => {
    product.innerHTML += `
    <div >
      <div
        class="hero-text js-product-container"
          data-product-id="${shoe.Id}"
      >        
        <img src="${shoe.Image}" alt="${shoe.Name}" />
        <i data-product-id="${shoe.Id}" class="fa-regular fa-heart product-heart js-product-heart"title="Add to wishlist" ></i>
        <h4>${shoe.Name}</h4>  
        <span>1 Color</span>
      </div> 
       <div class='price'>
          <p>$${shoe.price}</p>        
          <button data-product-id="${shoe.Id}"  class='js-addTocart'>Add to Cart</button>
        </div>  
    </div>      
    `;
  });
}
displayAllProduct();

//get the id from each shoe
document.querySelectorAll(".js-product-container").forEach((product) => {
  product.addEventListener("click", () => {
    let productID = product.dataset.productId;
    localStorage.setItem("productID", productID);
    window.location.href = "Infor-Each-product.html";
  });
});
addtocart();
//add to cart
export function addtocart() {
  document.querySelectorAll(".js-addTocart").forEach((addtoCart) => {
    addtoCart.addEventListener("click", () => {
      let productId = Number(addtoCart.dataset.productId);
      cart.push(productId);
      localStorage.setItem("addtocart", JSON.stringify(cart));
    });
  });
}

const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

document.querySelectorAll(".js-product-heart").forEach((heart) => {
  heart.addEventListener("click", (event) => {
    event.stopPropagation();
    const productId = Number(heart.dataset.productId);
    if (!wishlist.includes(productId)) {
      wishlist.push(productId);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  });
});
