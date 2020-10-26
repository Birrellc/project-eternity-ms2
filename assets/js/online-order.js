
let addToBasket = document.querySelectorAll(".menu-btn");
let foodIndex = 0;
let totalPrice = 0;
let basketItem = [];

let food = [{
        name: "Rack of Lamb",
        price: 40,
        inBasket: 0
    },
    {
        name: "Stacked Burger",
        price: 18,
        inBasket: 0
    },
    {
        name: "Avacado & Egg",
        price: 20,
        inBasket: 0
    },
    {
        name: "Sirloin Steak",
        price: 40,
        inBasket: 0
    },
    {
        name: "Moqueca",
        price: 25,
        inBasket: 0
    },
    {
        name: "Avacado & Toast",
        price: 15,
        inBasket: 0
    },
    {
        name: "Skewered Kebab",
        price: 35,
        inBasket: 0
    },
    {
        name: "Pizza",
        price: 24,
        inBasket: 0
    }
];
// This adds onClick events to each food item in the list
for (let i = 0; i < addToBasket.length; i++) {
    addToBasket[i].addEventListener("click", e => {
        foodIndex = i;
        if (!basketItem.includes(foodIndex)) {
            basketItem.push(foodIndex);
            addItemToBasket(food[i], i);
        }
    });
}
// This adds item to basket
function addItemToBasket(food, itemIndex) {
    let menuNumbers = sessionStorage.getItem("addItemToBasket");
    menuNumbers = parseInt(menuNumbers);
    if (menuNumbers) {
        sessionStorage.setItem("addItemToBasket", +1);
    }
    updateStoreBasket(food, itemIndex);
}

function updateStoreBasket(food, itemIndex) {
    let basketProducts = sessionStorage.getItem("foodInBasket");
    basketProducts = JSON.parse(basketProducts);
    // If the basket has products
    if (basketProducts !== null) {
        // If this item of food isnt in the basket already then..
        if (basketProducts[food.name] === undefined) {
            // Update the basket with the existing items and add our new item into it
            basketProducts = {
                ...basketProducts,
                [food.name]: food
            };
        }
        // Regardless if the item was there before or not we want to increase the quantity by 1
        basketProducts[food.name].inBasket += 1;
        totalCost(food);
    } else {
        food.inBasket = 1;
        basketProducts = {
            [food.name]: food
        };
        totalCost(food);
    }
    sessionStorage.setItem("foodInBasket", JSON.stringify(basketProducts));
    updateModal(itemIndex);
}

function totalCost(food) {
    let currentBasketPrice = sessionStorage.getItem("totalPrice");
    // If we have a current Basket price
    if (currentBasketPrice !== null) {
        currentBasketPrice = parseInt(currentBasketPrice);
        sessionStorage.setItem("totalPrice", currentBasketPrice + food.price);
    } else {
        // If we have no current Basket price
        sessionStorage.setItem("totalPrice", food.price);
    }
}
// recieve object from DOM and assign variables to div classes
function getBasketData() {
    return {
        products: JSON.parse(sessionStorage.getItem("foodInBasket")),
        priceValue: sessionStorage.getItem("totalPrice") || 0,
        product: document.querySelector(".product"),
        price: document.querySelector(".price"),
        quantity: document.querySelector(".quantity"),
        totalPrice: document.querySelector(".total-price")
    };
}
// push objects from localstorage array into dynamic div's on the DOM
function updateModal(itemIndex) {
    let basket = getBasketData();
    if (basket.products === null) {
        return false;
    }
    let foodItem = food[itemIndex];
    if (foodItem !== undefined) {
        totalPrice += foodItem.price;
        basket.product.insertAdjacentHTML("beforeend",
            `<div class="productName">${foodItem.name}</div>`
        );
        basket.price.insertAdjacentHTML("beforeend",
            `<div class="productPrice">${foodItem.price}</div>`
        );
        basket.quantity.insertAdjacentHTML("beforeend",
            `<div class="productQuantity"data-itemIndex=${itemIndex}><i class="fas fa-minus"></i><span class="item-quantity">
            ${foodItem.inBasket}</span><i class="fas fa-plus"></i></div>`);
        basket.totalPrice.innerHTML = `<div class="totalPrice">${totalPrice}</div>`;
    }
}
// allows access of the individual parentNodes of dynamic divs for increments and decrements in following function
Element.prototype.parents = function() {
    let parents = [];
    let currentParent = this.parentNode;
    if (currentParent === undefined); {
        parents.push(currentParent);
        currentParent = currentParent.parentNode;
    }
    return parents;
};

document.querySelector(".quantity").addEventListener("click", function (e) {
    // Get index of the item of which the quantity icons were clicked
    const itemIndex = e.target
        .parents(".productQuantity")[0]
        .getAttribute("data-itemIndex");
    const item = food[itemIndex];
    // when clicked on plus icon
    if (e.target.classList.contains("fa-plus")) {
        // increasing the quantity by 1 in item object and in DOM
        item.inBasket++;
        e.target.parentNode.querySelector(".item-quantity").innerText = item.inBasket;
        totalPrice += item.price;
        // When clicked on minus icon
    } else if (e.target.classList.contains("fa-minus") && item.inBasket > 1) {
        // decreasing the quantity by 1 in item object and in DOM
        item.inBasket--;
        e.target.parentNode.querySelector(".item-quantity").innerText = item.inBasket;
        totalPrice -= item.price;
    }
    document.querySelector( 
        ".total-price"
    ).innerHTML = `<div class="totalPrice">${totalPrice}</div>`;
});