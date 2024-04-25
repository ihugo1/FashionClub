/***************Base de datos simulada***************/
const catalogueImages = "/img/catalogue";
const products = [
    {id:1, type:"shirt", price: "25.99", img : "camisa.png", name:"Camisa Yoohyeon"},
    {id:2, type:"pantalones", price: "30.99", img : "pantalones.png", name: "Pantalones Siyeon"},
    {id:3, type:"jacket", price: "99.99", img : "chaqueta.png", name:"Chaqueta Handong"},
    {id:4, type:"makeup", price: "19.99", img : "maquillaje.png", name:"Maquillaje Sua"},
    {id:5, type:"hat", price: "9.99", img : "gorro.png", name:"Gorro  Gahyeon"},
    {id:6, type:"accesory", price: "25.99", img : "collar.png", name:"Collar Dami"},
    {id:7, type:"dress", price: "70.99", img : "vestido.png", name:"Vestido Jiu"},
    {id:1, type:"shirt", price: "25.99", img : "camisa.png", name:"Camisa Yoohyeon"},
    {id:2, type:"pantalones", price: "30.99", img : "pantalones.png", name: "Pantalones Siyeon"},
    {id:3, type:"jacket", price: "99.99", img : "chaqueta.png", name:"Chaqueta Handong"},
    {id:4, type:"makeup", price: "19.99", img : "maquillaje.png", name:"Maquillaje Sua"},
    {id:5, type:"hat", price: "9.99", img : "gorro.png", name:"Gorro  Gahyeon"},
    {id:6, type:"accesory", price: "25.99", img : "collar.png", name:"Collar Dami"},
    {id:7, type:"dress", price: "70.99", img : "vestido.png", name:"Vestido Jiu"}
];

function showProducts(){
    const catalogoContainer = document.querySelector(".products-container");
    products.forEach(product=>{
        const productHtml =
        `
        <div class="product">
            <div class="product__img-container">
                <img class="product__img" src="${catalogueImages}/${product.img}">
            </div>
            <div class="product__info-container">
                <p class="product__name">${product.name}</p>
                <p class="product__price">${product.price}</p>
                <button class="product__add-btn">Agregar al carrito</button>
            </div>
        </div>
        `;
        catalogoContainer.innerHTML+=productHtml;
    });
}

window.onload = showProducts;