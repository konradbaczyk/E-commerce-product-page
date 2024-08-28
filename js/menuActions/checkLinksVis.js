import { navMenu, navLinks } from "../scirpt.js";

export const checkLinksVisibility = () => {
	if (navMenu.classList.contains("navbar__menu--active") || window.innerWidth >= 768) {
		navLinks.forEach((link) => {
			link.setAttribute("tabindex", "0");
			link.setAttribute("aria-hidden", "false");
		});
	} else {
		navLinks.forEach((link) => {
			link.setAttribute("tabindex", "-1");
			link.setAttribute("aria-hidden", "true");
		});
	}
};
