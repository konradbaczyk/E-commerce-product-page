import { btnToggle, navMenu } from "../scirpt.js";
import { checkLinksVisibility } from "./checkLinksVis.js";

export const handleMenu = (e) => {
	e.preventDefault();

	if (navMenu.classList.contains("navbar__menu--active")) {
		btnToggle.style.backgroundImage = "url(../../images/icon-menu.svg)";
		document.body.classList.remove("no-scroll");
	} else {
		btnToggle.style.backgroundImage = "url(../../images/icon-close.svg)";
		document.body.classList.add("no-scroll");
	}

	navMenu.classList.toggle("navbar__menu--active");
	checkLinksVisibility();
};
