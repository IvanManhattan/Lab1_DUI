var swiper = new Swiper(".customer-reviews__customers", {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 3,
	loop: true,
	loopFillGroupWithBlank: true,
	/**pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},**/
	navigation: {
		nextEl: ".customer-reviews__button-back",
		prevEl: ".customer-reviews__button-forward",
	},
});


const addAdvantages = document.querySelectorAll(".list-element__symbol");
const goMyTravelLogs = document.querySelector(".memory__buttons");
const contactUs = document.querySelector(".header__button");
const reserveTicket = document.querySelector(".main-block__buttons");
const arrowButton = document.querySelector(".content-part__button");
const menuButtons = document.querySelectorAll(".menu__list");

function doAddAdvantages() {
	// TODO
}

addAdvantages.forEach(addItem => {
	addItem.addEventListener("click", doAddAdvantages);
});

goMyTravelLogs.addEventListener("click", (e) => {
	if (e.target.closest(".memory__button")) {
		// TODO
	}
});

reserveTicket.addEventListener("click", (e) => {
	if (e.target.closest(".main-block__button")) {
		// TODO
	}
});

arrowButton.addEventListener("click", (e) => {
	// TODO
});

menuButtons.forEach(menuButton => {
	menuButton.addEventListener("click", () => {
		// TODO
	});
});