import { checkLinksVisibility } from "./menuActions/checkLinksVis.js";
import { handleMenu } from "./menuActions/handleMobileMenu.js";
import { checkThumbnailClick } from "./imagesActions/showBigImg.js";
import { incrementQuantityToAdd, decrementQuantityToAdd, addToCart, showCartPreview } from "./cartActions/addToCart.js";
import { clearCart } from "./cartActions/cartData.js";

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
export const cartPreview = document.getElementById("cart-preview");
export const cartEmptyPreview = document.getElementById("cart-empty");
export const cartWithProductsPreview = document.getElementById("cart-with-products");
const cartBtn = document.getElementById("cart-btn");
export const cartProductName = document.getElementById("cart-product-name");
export const cartProductPrice = document.getElementById("cart-product-price");
export const cartProductQuantity = document.getElementById("cart-product-quantity");
export const cartProductValue = document.getElementById("cart-product-value");
export const cartBtnCounter = document.getElementById("cart-btn-counter");
export const clearCartBtn = document.getElementById("cart-clear-btn");

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

// Cart aciotns
cartBtn.addEventListener("click", showCartPreview);
clearCartBtn.addEventListener("click", clearCart);
