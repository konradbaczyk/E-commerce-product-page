import { checkLinksVisibility } from "./menuActions/checkLinksVis.js";
import { handleMenu } from "./menuActions/handleMobileMenu.js";
import { checkThumbnailClick } from "./imagesActions/showBigImg.js";

// Menu items
export const btnToggle = document.getElementById("btn-toggle-menu");
export const navMenu = document.getElementById("menu");
export const navLinks = document.querySelectorAll(".navbar__menu--link");

// Images items
export const images = document.querySelectorAll(".images__big-image");
const thumbnailsImagesBtns = document.querySelectorAll(".images__thumbnail-btn");

// Menu actions
btnToggle.addEventListener("click", handleMenu);
window.addEventListener("DOMContentLoaded", checkLinksVisibility);
window.addEventListener("resize", checkLinksVisibility);

// Images actions
thumbnailsImagesBtns.forEach((thumbnailButton) => thumbnailButton.addEventListener("click", checkThumbnailClick));
