import {
	cartProductName,
	cartProductPrice,
	cartProductQuantity,
	cartProductValue,
	cartBtnCounter,
	cartEmptyPreview,
	cartWithProductsPreview,
} from "../scirpt.js";

export const createProductInCart = () => {
	const productName = document.getElementById("product-name");
	const productPrice = document.getElementById("actual-price");
	cartProductName.innerText = productName.innerText;
	cartProductPrice.innerText = productPrice.innerText;
	cartProductQuantity.innerText = cartBtnCounter.innerText;
	cartProductValue.innerText = Number(cartProductQuantity.innerText) * Number(cartProductPrice.innerText);
};

export const clearCart = () => {
	cartEmptyPreview.classList.add("cart-preview__empty--active");
	cartWithProductsPreview.classList.remove("cart-preview__with-products--active");
	cartBtnCounter.innerText = 0;
	cartBtnCounter.classList.remove("navbar__cart-btn--added-items-active");
};
