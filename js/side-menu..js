let sideMenu = document.querySelector(".side-menu");
let openSideMenuBtn = document.querySelector(".header__open-side-menu-btn");
let closeSideMenuBtn = document.querySelector(".side-menu__close-side-menu-btn");

function toggleSideMenu (){
    sideMenu.classList.toggle("side-menu-active");
    console.log("si");
}

openSideMenuBtn.addEventListener("click", toggleSideMenu);
closeSideMenuBtn.addEventListener("click", toggleSideMenu);
