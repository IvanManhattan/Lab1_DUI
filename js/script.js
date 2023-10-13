
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