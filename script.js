async function includeHTML() {
	let includeElements = document.querySelectorAll("[w3-include-html]");
	for (let i = 0; i < includeElements.length; i++) {
		const element = includeElements[i];
		file = element.getAttribute("w3-include-html"); // "includes/header.html"
		let resp = await fetch(file);
		if (resp.ok) {
			element.innerHTML = await resp.text();
		} else {
			element.innerHTML = "Page not found";
		}
	}
}

let plates = [
	{
		id: "1",
		name: "Dumplings#1",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quas. Ratione hic rem illo minima, autem aperiam eos quod qui nihil totam, fuga quis corporis provident, ea sed ipsa suscipit.",
		price: 19.9,
		category: "Dumplings",
		image: "./img/dumplings.jpg",
		like: true,
	},
	{
		id: "2",
		name: "Dumplings#2",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quas. Ratione hic rem illo minima, autem aperiam eos quod qui nihil totam, fuga quis corporis provident, ea sed ipsa suscipit.",
		price: 9.5,
		category: "Dumplings",
		image: "./img/dumplings.jpg",
		like: false,
	},
	{
		id: "3",
		name: "Dumplings#3",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quas. Ratione hic rem illo minima, autem aperiam eos quod qui nihil totam, fuga quis corporis provident, ea sed ipsa suscipit.",
		price: 15.59,
		category: "Dumplings",
		image: "./img/dumplings.jpg",
		like: false,
	},
	{
		id: "4",
		name: "Drink#1",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quas. Ratione hic rem illo minima, autem aperiam eos quod qui nihil totam, fuga quis corporis provident, ea sed ipsa suscipit.",
		price: 9.5,
		category: "Drinks",
		image: "./img/drinks.jpg",
		like: true,
	},
	{
		id: "5",
		name: "Drink#2",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quas. Ratione hic rem illo minima, autem aperiam eos quod qui nihil totam, fuga quis corporis provident, ea sed ipsa suscipit.",
		price: 3.59,
		category: "Drinks",
		image: "./img/drinks.jpg",
		like: false,
	},
	{
		id: "6",
		name: "Drink#3",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quas. Ratione hic rem illo minima, autem aperiam eos quod qui nihil totam, fuga quis corporis provident, ea sed ipsa suscipit.",
		price: 5.59,
		category: "Drinks",
		image: "./img/drinks.jpg",
		like: false,
	},
	{
		id: "7",
		name: "Dessert#1",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quas. Ratione hic rem illo minima, autem aperiam eos quod qui nihil totam, fuga quis corporis provident, ea sed ipsa suscipit.",
		price: 8.5,
		category: "Desserts",
		image: "./img/desserts.jpg",
		like: false,
	},
	{
		id: "8",
		name: "Dessert#2",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quas. Ratione hic rem illo minima, autem aperiam eos quod qui nihil totam, fuga quis corporis provident, ea sed ipsa suscipit.",
		price: 10.59,
		category: "Desserts",
		image: "./img/desserts.jpg",
		like: false,
	},
	{
		id: "9",
		name: "Dessert#3",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quas. Ratione hic rem illo minima, autem aperiam eos quod qui nihil totam, fuga quis corporis provident, ea sed ipsa suscipit.",
		price: 19.0,
		category: "Desserts",
		image: "./img/desserts.jpg",
		like: false,
	},
	{
		id: "10",
		name: "Dessert#4",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quas. Ratione hic rem illo minima, autem aperiam eos quod qui nihil totam, fuga quis corporis provident, ea sed ipsa suscipit.",
		price: 1.0,
		category: "Desserts",
		image: "./img/desserts.jpg",
		like: true,
	},
];
let categories = [
	{ name: "Favorites", src: "./img/aot.jpg" },
	{ name: "Dumplings", src: "./img/dumplings.jpg" },
	{ name: "Desserts", src: "./img/desserts.jpg" },
	{ name: "Drinks", src: "./img/drinks.jpg" },
];
let favoritesPlates = [
	{
		id: "1",
		name: "Dumplings#1",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quas. Ratione hic rem illo minima, autem aperiam eos quod qui nihil totam, fuga quis corporis provident, ea sed ipsa suscipit.",
		price: 19.9,
		category: "Dumplings",
		image: "./img/dumplings.jpg",
		like: true,
	},
	{
		id: "10",
		name: "Dessert#4",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quas. Ratione hic rem illo minima, autem aperiam eos quod qui nihil totam, fuga quis corporis provident, ea sed ipsa suscipit.",
		price: 1.0,
		category: "Desserts",
		image: "./img/desserts.jpg",
		like: true,
	},
	{
		id: "4",
		name: "Drink#1",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quas. Ratione hic rem illo minima, autem aperiam eos quod qui nihil totam, fuga quis corporis provident, ea sed ipsa suscipit.",
		price: 9.5,
		category: "Drinks",
		image: "./img/drinks.jpg",
		like: true,
	},
];
let basket = [];

renderRestaurant();
renderCategoriesMenu();
renderBasket();

function renderRestaurant() {
	let menuCardContainer = document.getElementById("menu-cards-container");
	menuCardContainer.innerHTML = "";
	menuCardContainer.innerHTML = /*html*/ `
		<div id="container-favorites-plates"></div>
		`;
	for (let i = 1; i < categories.length; i++) {
		const categorie = categories[i];
		menuCardContainer.innerHTML += /*html*/ `
      ${restaurantHTML(categorie)}
    	`;
		paintingPlatesHTML(categorie.name);
	}
	renderFavorites();
}

function renderCategoriesMenu() {
	for (let i = 0; i < categories.length; i++) {
		const categorie = categories[i];
		document.getElementById("categoriesMenu").innerHTML += /*html*/ `
    <a href="#${categorie.name}Menu">${categorie.name}</a>
  `;
	}
}

function renderFavorites() {
	let containerFavorites = document.getElementById(
		"container-favorites-plates"
	);
	if (favoritesPlates.length >= 1) {
		containerFavorites.innerHTML = /*html*/ `
			${favoritesHeadline()}`;
	}
	for (let i = 0; i < favoritesPlates.length; i++) {
		const plate = favoritesPlates[i];
		containerFavorites.innerHTML += /*html*/ `
			${paintingPlatesHTMLTemplates(plate)}`;
		plateLike(plate);
	}
}

function paintingPlatesHTML(categorie) {
	for (let j = 0; j < plates.length; j++) {
		const plate = plates[j];
		if (plate.category == categorie) {
			document.getElementById(`${categorie}`).innerHTML += /*html*/ `
        ${paintingPlatesHTMLTemplates(plate)}`;
			plateLike(plate);
		}
	}
}

function plateLike(plate) {
	if (plate.like) {
		document.getElementById(`${plate.id}img`).classList.add("add-favorite-bg");
		document.getElementById(`${plate.id}img`).classList.remove("add-favorite");
	}
}

function addPlateBasket(id) {
	let indexPlateFoundinBasket = basket.findIndex((plate) => plate.id == id);
	let indexPlatesArray = plates.findIndex((plate) => plate.id == id);
	if (indexPlateFoundinBasket == -1) {
		basket.push({
			id: plates[indexPlatesArray].id,
			name: plates[indexPlatesArray].name,
			description: plates[indexPlatesArray].description,
			price: Number(plates[indexPlatesArray].price),
			amount: Number(1),
		});
	} else {
		basket[indexPlateFoundinBasket].amount++;
	}
	renderBasket();
}

function removePlateBasket(id) {
	let indexPlateFoundinBasket = basket.findIndex((plate) => plate.id == id);
	if (indexPlateFoundinBasket !== -1) {
		let amountElementBasket = basket[indexPlateFoundinBasket].amount;
		if (amountElementBasket <= 1) {
			basket.splice(indexPlateFoundinBasket, 1);
		} else {
			basket[indexPlateFoundinBasket].amount--;
		}
	}
	renderBasket();
}

function renderBasket() {
	let basketContainer = document.getElementById("basket-elements");
	basketContainer.innerHTML = "";
	for (let i = 0; i < basket.length; i++) {
		const basketElement = basket[i];
		basketContainer.innerHTML += /*html*/ `
      ${htmlRenderBasket(basketElement)}
    `;
	}
	showingButtonMobileBasket();
	renderTotal();
}

function renderTotal() {
	let basketTotalContainer = document.getElementById("basket-total");
	let sumBasketMobile = document.getElementById("sum-basket-mobile");
	let basketCheckout = document.getElementById("basket-checkout");
	let basketTotal = basket.reduce((accumulator, elementBasket) => {
		return accumulator + elementBasket.price * elementBasket.amount;
	}, 0);
	let basketElementsTotal = basket.reduce((accumulator, elementBasket) => {
		return accumulator + elementBasket.amount;
	}, 0);
	sumBasketMobile.innerHTML = "";
	ifBasketIsEmpty(basketTotalContainer, basketCheckout);
	ifBasketIsNotEmpty(
		basketTotalContainer,
		basketTotal,
		sumBasketMobile,
		basketElementsTotal,
		basketCheckout
	);
}

function ifBasketIsEmpty(basketTotalContainer, basketCheckout) {
	if (basket.length == 0) {
		document.querySelector(".basket").classList.add("d-block");
		basketTotalContainer.innerHTML = /*html*/ `
      ${basketIsEmpty()}
    `;
		basketCheckout.innerHTML = "";
		basketCheckout.classList.remove("basket-checkout");
		if (document.getElementById("footer")) {
			document.getElementById("footer").classList.remove("margin-bottom-200");
		}
		closeBasketMobile();
	}
}

function showingButtonMobileBasket() {
	if (basket.length == 0) {
		let buttonBasket = document.getElementById("basket-button-container");
		buttonBasket.classList.add("d-none");
	} else {
		let buttonBasket = document.getElementById("basket-button-container");
		buttonBasket.classList.remove("d-none");
		if (document.getElementById("footer")) {
			document.getElementById("footer").classList.add("margin-bottom-200");
		}
	}
}

function openBasketMobile() {
	document
		.getElementById("basket-container")
		.classList.add("open-basket-container");
	document.getElementById("restaurant-container").classList.add("d-none");
	document.getElementById("footer").classList.add("d-none");
	document.getElementById("close-basket").classList.remove("d-none");
	document.getElementById("basket-header").classList.add("d-flex");
	hiddenButtonBasketMobile();
}

function closeBasketMobile() {
	document
		.getElementById("basket-container")
		.classList.remove("open-basket-container");
	document.getElementById("restaurant-container").classList.remove("d-none");
	if (document.getElementById("footer")) {
		document.getElementById("footer").classList.remove("d-none");
	}
	document.getElementById("close-basket").classList.add("d-none");
	document.getElementById("basket-header").classList.remove("d-flex");
	hiddenButtonBasketMobile();
}

function checkOutBasket() {
	basket = [];
	renderBasket();
	document.getElementById("footer").classList.remove("margin-bottom-200");
	alert("That is only a test version 😊");
}

function hiddenButtonBasketMobile() {
	if (
		basket.length > 0 &&
		document
			.getElementById("basket-container")
			.classList.contains("open-basket-container")
	) {
		document.getElementById("button-openBasket-Mobile").classList.add("d-none");
	} else {
		document
			.getElementById("button-openBasket-Mobile")
			.classList.remove("d-none");
	}
}

document
	.getElementById("basket-elements")
	.addEventListener("mouseover", (e) => {
		if (e.target.classList.contains("name-food")) {
			let divElement = document.createElement("div");
			let descriptionId = e.target.getAttribute("data-id");
			let indexFound = basket.findIndex(
				(element) => element.id == descriptionId
			);
			divElement.innerHTML = basket[indexFound].description;
			divElement.classList.add("pop-up");
			divElement.id = "pop-up";
			e.target.parentElement.appendChild(divElement);
			document.getElementById("basket").classList.add("overlay-0");
		}
	});

document.getElementById("basket-elements").addEventListener("mouseout", (e) => {
	if (e.target.classList.contains("pop-up")) {
		document.getElementById("pop-up").remove();
		document.getElementById("basket").classList.remove("overlay-0");
	}
});

function addFavorite(id) {
	let indexFound = plates.findIndex((plate) => plate.id == id);
	if (indexFound !== -1) {
		favoritesPlates.push(plates[indexFound]);
		plates[indexFound].like = true;
	}
	renderRestaurant();
	console.log(favoritesPlates);
}

document
	.getElementById("menu-cards-container")
	.addEventListener("click", (e) => {
		if (e.target.classList.contains("add-favorite-bg")) {
			let idImg = e.target.getAttribute("id");
			let idSplit = idImg.split("");
			idSplit.splice(-3, 3);
			let id = Number(idSplit.join(""));
			console.log(id);
			removeFavorite(id);
		}
		if (e.target.classList.contains("add-favorite")) {
			let idImg = e.target.getAttribute("id");
			let idSplit = idImg.split("");
			idSplit.splice(-3, 3);
			let id = Number(idSplit.join(""));
			addFavorite(id);
		}
	});

function removeFavorite(id) {
	let indexFoundFavorites = favoritesPlates.findIndex(
		(plate) => plate.id == id
	);
	let indexFoundPlates = plates.findIndex((plate) => plate.id == id);
	favoritesPlates.splice(indexFoundFavorites, 1);
	plates[indexFoundPlates].like = false;
	renderRestaurant();
	console.log(favoritesPlates);
}
