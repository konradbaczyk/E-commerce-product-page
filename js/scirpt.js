import { checkLinksVisibility } from "./menuActions/checkLinksVis.js";
import { handleMenu } from "./menuActions/handleMobileMenu.js";
import { checkThumbnailClick } from "./imagesActions/showBigImg.js";
import { incrementQuantityToAdd, decrementQuantityToAdd, addToCart } from "./cartActions/addToCart.js";

// Menu items
export const btnToggle = document.getElementById("btn-toggle-menu");
export const navMenu = document.getElementById("menu");
export const navLinks = document.querySelectorAll(".navbar__menu--link");

// Images items
export const images = document.querySelectorAll(".images__big-image");
const thumbnailsImagesBtns = document.querySelectorAll(".images__thumbnail-btn");

// Add to cart items
export const productCounterNumber = document.getElementById("add-to-cart-counter-number");
const productCounterMinusBtn = document.getElementById("add-to-cart-counter-minus");
const productCounterPlusBtn = document.getElementById("add-to-cart-counter-plus");
const addToCartBtn = document.getElementById("add-to-cart-btn");

// Cart items
export const cartBtnCounter = document.getElementById("cart-btn-counter");

// Menu actions
btnToggle.addEventListener("click", handleMenu);
window.addEventListener("DOMContentLoaded", checkLinksVisibility);
window.addEventListener("resize", checkLinksVisibility);

// Images actions
thumbnailsImagesBtns.forEach((thumbnailButton) => thumbnailButton.addEventListener("click", checkThumbnailClick));

// Add to cart actions
productCounterPlusBtn.addEventListener("click", incrementQuantityToAdd);
productCounterMinusBtn.addEventListener("click", decrementQuantityToAdd);
addToCartBtn.addEventListener("click", addToCart);
