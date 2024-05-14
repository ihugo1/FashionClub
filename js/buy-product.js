let shoppingCartSide = document.getElementById("shopping-cart");
let shoppingCartList = document.getElementById("shopping-cart-list");
let shoppingCartTotal = document.getElementById("shopping-cart-total");

let totalShoppingCart = 0;
let cartItemID = 0;

/*Toggle Shopping Cart*/
function toggleShoppingCart(){
  shoppingCartSide.classList.toggle("shopping-cart-active");
}

/*Remove From Cart*/
function removeFromShoppingCart(productCartId, productPrice) {
  let productToRemove = document.getElementById(`${productCartId}`);

  productToRemove.remove();

  totalShoppingCart = totalShoppingCart - productPrice;

  shoppingCartTotal.innerHTML = `
  Total = ${totalShoppingCart.toFixed(2)}
  `;
}

/*Add to Cart*/
function addToShoppingCart(ProductID) {
  let productToAdd = productsDataBase.find(function (product) {
    return product.id == ProductID;
  });

  totalShoppingCart = totalShoppingCart + productToAdd.price;

  cartItemID = `cart-id-${cartItemID + 1}`;

  shoppingCartList.innerHTML += `
    <div class="shopping-cart__product" id="${cartItemID}">
        <p>ID: ${productToAdd.id}</p>
        <p>Producto: ${productToAdd.name}</p>
        <p>Precio: ${productToAdd.price}</p>
        <button onclick="removeFromShoppingCart('${cartItemID}',${productToAdd.price})">Eliminar</button>
    </div>
    `;

  shoppingCartTotal.innerHTML = `
    Total = ${totalShoppingCart.toFixed(2)}
  `;
}

/*Buy Product*/
function buyProduct(productID) {
  let productToBuy = productsDataBase.find(function (product) {
    return product.id == productID;
  });

  if (productToBuy.units > 0) {
    productToBuy.units--;

    addToShoppingCart(productID);
  } else {
    alert("Unidades agotadas");
  }

  filterProducts();
}
