import { cartBtnCounter, productCounterNumber } from "../scirpt.js";

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
};
