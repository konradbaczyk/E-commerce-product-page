import { images } from "../scirpt.js";

export const checkThumbnailClick = (e) => {
	clearImagesData();

	let clickedThumbnail = e.target;

	if (clickedThumbnail.id === "thumb1") {
		images[0].classList.add("images__big-image--active");
	} else if (clickedThumbnail.id === "thumb2") {
		images[1].classList.add("images__big-image--active");
	} else if (clickedThumbnail.id === "thumb3") {
		images[2].classList.add("images__big-image--active");
	} else if (clickedThumbnail.id === "thumb4") {
		images[3].classList.add("images__big-image--active");
	}
};

const clearImagesData = () => {
	images.forEach((img) => img.classList.remove("images__big-image--active"));
};
