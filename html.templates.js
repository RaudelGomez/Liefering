function restaurantHTML(categorie) {
  return /*html*/`
    <div class="card-hero ${categorie.name}">
					<img class="card-img"
							  src="${categorie.src}"
								alt="food"
                id="${categorie.name}Menu"
								/>
          <h3>${categorie.name}</h3>
			</div>
      <div id="${categorie.name}"></div>
    `
}

function paintingPlatesHTMLTemplates(plate) {
  return /*html*/`
        <div class="card">
          <div class="card-info">
          <h4>${plate.name}</h4>
          <p>${plate.description}</p>
          <p>${plate.price.toFixed(2)} €</p>
        </div>
        <div class="card-icons">
          <img
            class="photo-plate-mini"
            src="${plate.image}"
            alt="food"
          />
          <img
            class="border-circle-gray border-solid"
            src="./img/icons/add.svg"
            alt="add plate to basket"
            onclick="addPlateBasket(${plate.id})"
          />
          <img
            id="${plate.id}img"
            class="border-circle-gray border-solid add-favorite"
            src="./img/icons/favorite.svg"
            alt="favorite plate"
          />
        </div>
      </div>`
}

function favoritesHeadline() {
  return /*html*/`
    <h3 id="FavoritesMenu" class="headline-favorite">
      <span>Favorites</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ff0000" class="bi 							bi-heart-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
      </svg>
		</h3>`
}

function htmlRenderBasket(basketElement) {
	return /*html*/ `
    <div class="basket-element">
      <div class="basket-headline">
        <p class="basket-p">
          ${basketElement.amount} - ${basketElement.name}
        </p>
        <div class="container-popUp">
          <img class="name-food" data-id="${basketElement.id}" src="./img/icons/info.svg" alt="info">
        </div>
        <span>${(basketElement.amount * basketElement.price).toFixed(
					2
				)} €
        </span>
      </div>
      <br>
      <div class="order-container">
        <p>Add note</p>
        <div class="add-basket-container">
          <img
            class="border-circle-gray border-solid"
            src="./img/icons/remove.svg"
            alt="add element"
            onclick="removePlateBasket(${basketElement.id})"
          />
          <span>${basketElement.amount}</span>
          <img
            class="border-circle-gray border-solid"
            src="./img/icons/add.svg"
            alt="add element"
            onclick="addPlateBasket(${basketElement.id})"
          />
        </div>
      </div>
		</div>
  `;
}

function basketIsEmpty() {
	return /*html*/ `
    <div>
      <img src="./img/icons/shoppingBag.svg" alt="shoping bag">
      <p><strong>Fill your basket</strong></p>
      <p>Your basket is empty</p>
    </div>
  `;
}

function resultSumaTotal(basketTotal) {
	return /*html*/ `
    <p class="resultSumTotal"><strong>Total</strong> <strong>${basketTotal.toFixed(
			2
		)} €</strong></p>
  `;
}

function ifBasketIsNotEmpty(
	basketTotalContainer,
	basketTotal,
	sumBasketMobile,
	basketElementsTotal,
	basketCheckout
) {
	if (basket.length !== 0) {
		document.querySelector(".basket").classList.remove("d-block");
		basketTotalContainer.innerHTML = /*html*/ `${resultSumaTotal(basketTotal)}`;
		sumBasketMobile.innerHTML = /*html*/ `${basketTotal.toFixed(2)} €`;
		document.getElementById("quantity-element-basket").innerHTML =
			basketElementsTotal;
		basketCheckout.innerHTML = /*html*/ `
    <span class="basket-total-amount">${basketElementsTotal}</span> Checkout ${basketTotal.toFixed(
			2
		)} €`;
		basketCheckout.classList.add("basket-checkout");
	}
}
