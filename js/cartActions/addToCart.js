import { cartBtnCounter, productCounterNumber, cartPreview, cartEmptyPreview, cartWithProductsPreview } from "../scirpt.js";
import { createProductInCart } from "./cartData.js";

export const incrementQuantityToAdd = () => {
	productCounterNumber.innerText++;
};

export const decrementQuantityToAdd = () => {
	if (productCounterNumber.innerText >= 2) {
		productCounterNumber.innerText--;
	}
};

export const addToCart = () => {
	cartBtnCounter.innerText = Number(cartBtnCounter.innerText) + Number(productCounterNumber.innerText);
	cartBtnCounter.classList.add("navbar__cart-btn--added-items-active");
	productCounterNumber.innerText = 1;

	createProductInCart();
	showAddedProductsInCart();
};

const showAddedProductsInCart = () => {
	if (cartBtnCounter.innerText !== 0) {
		cartEmptyPreview.classList.remove("cart-preview__empty--active");
		cartWithProductsPreview.classList.add("cart-preview__with-products--active");
	}
};

export const showCartPreview = () => {
	cartPreview.classList.toggle("navbar__cart-preview--active");
};
