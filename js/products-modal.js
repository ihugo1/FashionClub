let productModal = document.getElementById("product-modal");
let openModalBtn = document.getElementById("product__info-btn");
// Selecciona el botón de cierre del modal por su id
let closeModalBtn = document.getElementById("product-modal__btn-close-modal");

function toggleModal(){
  productModal.classList.toggle("active-modal");
}

function showModal(productID) {
  let productToShow = productsDataBase.find(function (product) {
    return product.id == productID;
  });
  toggleModal();
  productModal.innerHTML = `
  <img class="product-modal__img" src="${productToShow.imgSrc}">
  <div class="product-modal__info">
      <p class="product-modal__name">${productToShow.name}</p>
      <p>${productToShow.price}</p>
      <p>${productToShow.units}</p>
      <p>${productToShow.type}</p>
      <button class="product-modal__btn-buy" onclick="buyProduct(${productToShow.id})">Comprar</button>
      <button class="product-modal__btn-close-modal" id="product-modal__btn-close-modal"
      onclick="toggleModal()">cerrar</button>
  </div>
  `;
}


