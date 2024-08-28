import { checkLinksVisibility } from "./menuActions/checkLinksVis.js";
import { handleMenu } from "./menuActions/handleMobileMenu.js";

// Menu items
export const btnToggle = document.getElementById("btn-toggle-menu");
export const navMenu = document.getElementById("menu");
export const navLinks = document.querySelectorAll(".navbar__menu--link");

// Images items
export const bigImg = document.getElementById("big-image");
export const btnPreviousImg = document.getElementById("btn-previous-img");
export const btnNextImg = document.getElementById("btn-next-img");

// const showPrevious = (params) => {

// }

// Menu actions
btnToggle.addEventListener("click", handleMenu);
window.addEventListener("DOMContentLoaded", checkLinksVisibility);
window.addEventListener("resize", checkLinksVisibility);
