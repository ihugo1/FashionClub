let productsContainer = document.getElementById("products-container");
let filterMenu = document.getElementById("filter-menu");
let filterBtn = document.getElementById("filter-bar__btn");
let selectedOption = "all";

function filterProducts() {
  productsContainer.innerHTML = "";
  selectedOption = filterMenu.value;
  let productsToFilter;
  if (selectedOption == "all") {
    productsToFilter = productsDataBase;
  } else {
    productsToFilter = productsDataBase.filter(function (pito) {
      return pito.type == selectedOption;
    });
  }
  for (product of productsToFilter) {
    productsContainer.innerHTML += `        
    <div class="product">
      <img class="product__img" src="${product.imgSrc}">
      <div class="product-info">
        <p class="product__name">${product.name}</p>
        <p class="product__price">${product.price}</p>
        <p class="product__units">Disponinbles: ${product.units}</p>
      </div>
      <div class="product__btns">
        <button class="product__buy-btn" onclick="buyProduct(${product.id})">Agregar al carrito</button>
        <button class="product__info-btn" onclick="showModal(${product.id})">Info</button>
      </div>
    </div>
    `;
  }
}


filterProducts();
filterBtn.addEventListener("click", function(){
    filterProducts();
});
