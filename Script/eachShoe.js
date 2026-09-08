import { products } from "../Data/data.js";
import { cart } from "./cart.js";

function eachShoeCheck() {
  // get the id and check if its the same so its generate the html
  let one = document.getElementById("js-all");
  const productID = Number(localStorage.getItem("productID"));
  products.forEach((eachProduct) => {
    if (productID === eachProduct.Id) {
      one.innerHTML = `
        <section class="hero">
          <div class="hero-flex">
            <div class="hero-text">
              <img src="${eachProduct.Image}" alt="${eachProduct.Name}" />
              <div class="mini-post">
                <img src="${eachProduct.Image}" alt="${eachProduct.Name}" /><img
                  src="${eachProduct.Image}"
                  alt=""
                /><img src="${eachProduct.Image}" alt="${eachProduct.Name}" />
              </div>
            </div>
            <div class="left-hero">
                <h1>${eachProduct.Name}</h1>
              <h5>Shoes</h5>
              <div class="star">
                <img src="/Image/star.png" alt="" />
                <img src="/Image/star.png" alt="" />
                <img src="/Image/star.png" alt="" />
                <img src="/Image/star.png" alt="" />
                <img src="/Image/star.png" alt="" />
                <p>299</p>
              </div>
              <span>$${eachProduct.price}</span>
              <p>Size</p>
              <div class="left-flex">
                <p>39</p>
                <p>40</p>
                <p>41</p>
                <p>42</p>
                <p>43</p>
                 <button
                    type="button"
                    class="quantity-button js-quantity-minus"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span class="quantity js-quantity">0</span>
                  <button
                    type="button"
                    class="quantity-button js-quantity-plus"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                <button data-product-id="${eachProduct.Id}"  class='js-addTocart'>Add to Cart</button>
              </div>
            </div>
          </div>
        </section>

        <!-- Review  -->
        <section>
          <div>
            <h4>Reviews</h4>
            <p>View all review</p>
          </div>
          <div>
          <p>John &middot <span>2days ago</span></p>
          <div class="star">
            <img src="/Image/star.png" alt="" />
            <img src="/Image/star.png" alt="" />
            <img src="/Image/star.png" alt="" />
            <img src="/Image/star.png" alt="" />
            <img src="/Image/star.png" alt="" />
          </div>
          <p>The best shoe I have ever wear!</p>
          </div> 
        </section>

        <!-- Shoe information -->
        <section>
          <div>
            <h1>${eachProduct.Name}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, aut.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
              voluptates accusamus ex nemo debitis sint. Dolores nihil,
              quisquam, soluta, exercitationem vitae at cum pariatur dolorem
              accusamus sint ad saepe magni. Adipisci, ipsa totam?
              Necessitatibus officiis cumque distinctio laudantium ad dolorum
              rem obcaecati. Quisquam, enim officia! Odio dignissimos ex
              molestias quis debitis aperiam, voluptates possimus, maiores,
              animi tempore officiis enim doloribus.
            </p>
          </div>
          <img src="${eachProduct.Image}" alt="${eachProduct.Name}" />
        </section>

        <section>
          <h4>Yoy might also like</h4>
          <div>
            <img src="${eachProduct.Image}" alt="${eachProduct.Name}" />
            <img src="/Image/star.png" alt="" />
            <img src="/Image/star.png" alt="" />
            <img src="/Image/star.png" alt="" />
            <img src="/Image/star.png" alt="" />
            <img src="/Image/star.png" alt="" />
            <h5>${eachProduct.Name}</h5>
            <p>$${eachProduct.price}</p>
          </div>
        </section>
      </div>
    `;
    }
  });
}
eachShoeCheck();

document.querySelectorAll(".js-addTocart").forEach((addtoCart) => {
  addtoCart.addEventListener("click", () => {
    let productId = Number(addtoCart.dataset.productId);
    cart.push(productId);
    localStorage.setItem("addtocart", JSON.stringify(cart));
  });
});
/*
export function eachShoe() {
  let one = document.getElementById("js-all");
  const productID = Number(localStorage.getItem("productID"));
  products.forEach((eachProdcut) => {
    if (productID === eachProdcut.Id) {
      one.innerHTML = `
        <section class="hero">
          <div class="hero-flex">
            <div class="hero-text">
              <img src="${eachProdcut.Image}" alt="${eachProdcut.Name}" />
              <div class="mini-post">
                <img src="${eachProdcut.Image}" alt="${eachProdcut.Name}" /><img
                  src="/Image/Nike/nike.jpg"
                  alt=""
                /><img src="${eachProdcut.Image}" alt="${eachProdcut.Name}" />
              </div>
            </div>
            <div class="left-hero">
                <h1>${eachProdcut.Name}</h1>
              <h5>Shoes</h5>
              <div class="star">
                <img src="/Image/star.png" alt="" />
                <img src="/Image/star.png" alt="" />
                <img src="/Image/star.png" alt="" />
                <img src="/Image/star.png" alt="" />
                <img src="/Image/star.png" alt="" />
                <p>299</p>
              </div>
              <span>${eachProdcut.price}</span>
              <p>Size</p>
              <div class="left-flex">
                <p>39</p>
                <p>40</p>
                <p>41</p>
                <p>42</p>
                <p>43</p>
                <i class="fa-solid fa-minus"></i>
                <span>0</span>
                <i class="fa-solid fa-plus"></i>
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        </section>

        <!-- Review  -->
        <section>
          <div>
            <h4>Reviews</h4>
            <p>View all review</p>
          </div>
          <div>
          <p>John &middot <span>2days ago</span></p>
          <div class="star">
            <img src="/Image/star.png" alt="" />
            <img src="/Image/star.png" alt="" />
            <img src="/Image/star.png" alt="" />
            <img src="/Image/star.png" alt="" />
            <img src="/Image/star.png" alt="" />
          </div>
          <p>The best shoe I have ever wear!</p>
          </div> 
        </section>

        <!-- Shoe information -->
        <section>
          <div>
            <h1>Air Jordan 1</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, aut.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
              voluptates accusamus ex nemo debitis sint. Dolores nihil,
              quisquam, soluta, exercitationem vitae at cum pariatur dolorem
              accusamus sint ad saepe magni. Adipisci, ipsa totam?
              Necessitatibus officiis cumque distinctio laudantium ad dolorum
              rem obcaecati. Quisquam, enim officia! Odio dignissimos ex
              molestias quis debitis aperiam, voluptates possimus, maiores,
              animi tempore officiis enim doloribus.
            </p>
          </div>
          <img src="${eachProdcut.Image}" alt="${eachProdcut.Name}" />
        </section>

        <section>
          <h4>Yoy might also like</h4>
          <div>
            <img src="${eachProdcut.Image}" alt="${eachProdcut.Name}" />
            <img src="/Image/star.png" alt="" />
            <img src="/Image/star.png" alt="" />
            <img src="/Image/star.png" alt="" />
            <img src="/Image/star.png" alt="" />
            <img src="/Image/star.png" alt="" />
            <h5>Air Jordan</h5>
            <p>$99</p>
          </div>
        </section>
      </div>
    `;
    }
  });
}
eachShoe();
*/
