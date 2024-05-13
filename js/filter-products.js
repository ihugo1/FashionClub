let productsContainer = document.getElementById("products-container");
let filterMenu = document.getElementById("filter-menu");
let filterBtn = document.getElementById("filter-bar__btn");
let selectedOption = "all";

function filterProducts(array) {
  productsContainer.innerHTML = "";
  selectedOption = filterMenu.value;
  let productsToFilter;
  if (selectedOption == "all") {
    productsToFilter = array;
  } else {
    productsToFilter = array.filter(function (pito) {
      return pito.type == selectedOption;
    });
  }
  for (product of productsToFilter) {
    productsContainer.innerHTML += `
        <div class="product">
            <img class="product__img" src="${product.imgSrc}">
            <p class="product__name">${product.name}</p>
            <p class="product__price">${product.price}</p>
            <p class="product__units">Disponinbles: ${product.units}</p>
            <button class="product__buy-btn" onclick="buyItem(${product.id})">
                Agregar al carrito
            </button>
            <button class="product__buy-btn" onclick="showModal(${product.id})">
                Info
            </button>
        </div>
        `;
  }
}

filterProducts(products);
filterBtn.addEventListener("click", function(){
    filterProducts(products);
});
