/* This code was created with the help of a tutorial which has been used as a reference guide throughout,
that being said the code has been modified from the original
And no function remains the same as in the original code */
// Tutorial link = https://www.youtube.com/watch?v=B20Getj_Zk4

let addToBasket = document.querySelectorAll(".menu-btn");
let foodIndex = 0;
let totalPrice = 0;
let basketItem = [];
let storedBasketItems = JSON.parse(localStorage.getItem("foodInBasket")) || {};

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

for (let i = 0; i < addToBasket.length; i++) { //
    addToBasket[i].addEventListener("click", e => { //False positive for warning in JSHINT https://stackoverflow.com/a/64688795/14580125
        if (!basketItem.includes(i)) {
            basketItem.push(i);
            addItemToBasket(food[i], i);
        } else {
            return;
        }
    });
}

// show previously stored basket data

for (const key in storedBasketItems) {
    if (storedBasketItems.hasOwnProperty(key)) { //credit for this line of code - https://stackoverflow.com/a/64688795/14580125
        // get corresponding food index
        food.forEach(function (food, i) { //False positive for warning in JSHINT https://stackoverflow.com/a/64688795/14580125
            if (food.name === storedBasketItems[key].name) foodIndex = i;
        });

        if (!basketItem.includes(foodIndex)) {
            basketItem.push(foodIndex);
            food[foodIndex].inBasket = storedBasketItems[key].inBasket;
            updateModal(foodIndex);
        }
    }
}

// This adds item to basket

function addItemToBasket(food, itemIndex) {
    let menuNumbers = localStorage.getItem("addItemToBasket");
    menuNumbers = parseInt(menuNumbers);
    if (menuNumbers) {
        localStorage.setItem("addItemToBasket", +1);
    }
    updateStoreBasket(food, itemIndex);
}

function updateStoreBasket(food, itemIndex) {
    let basketProducts = localStorage.getItem("foodInBasket");
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
    localStorage.setItem("foodInBasket", JSON.stringify(basketProducts));
    updateModal(itemIndex);
}

function totalCost(food) {
    let currentBasketPrice = localStorage.getItem("totalPrice");
    // If we have a current Basket price
    if (currentBasketPrice !== null) {
        currentBasketPrice = parseInt(currentBasketPrice);
        localStorage.setItem("totalPrice", currentBasketPrice + food.price);
    } else {
        // If we have no current Basket price
        localStorage.setItem("totalPrice", food.price);
    }
}

// Recieve object from Storage and assign variables to div classes - Template

// Credit for this function - https://stackoverflow.com/questions/64308378/best-way-to-break-up-a-function-javascript

function getBasketData() {
    return {
        delete: document.querySelectorAll(".product far fa-times-circle"),
        products: JSON.parse(localStorage.getItem("foodInBasket")),
        priceValue: localStorage.getItem("totalPrice") || 0,
        product: document.querySelector(".product"),
        price: document.querySelector(".price"),
        quantity: document.querySelector(".quantity"),
        totalPrice: document.querySelector(".total-price")
    };
}

// push objects from localstorage array into dynamic div's on the DOM

// Partial Credit (i modified it again) for this function - https://stackoverflow.com/questions/64308378/best-way-to-break-up-a-function-javascript

function updateModal(itemIndex) {
    let basket = getBasketData();
    if (basket.products === null) {
        return false;
    }
    let foodItem = food[itemIndex];
    if (foodItem !== undefined) {
        totalPrice += foodItem.price * foodItem.inBasket;
        basket.product.insertAdjacentHTML("beforeend",
            `<div class="product-name" data-food="${foodItem.name}">
                <i class="far fa-times-circle delete-btn"></i>
                <span>${foodItem.name}</span>
            </div>`
        );
        basket.price.insertAdjacentHTML("beforeend",
            `<div class="product-price" data-food="${foodItem.name}">
                £ ${foodItem.price}
            </div>`
        );
        basket.quantity.insertAdjacentHTML("beforeend",
            `<div class="product-quantity"data-itemIndex=${itemIndex} data-food="${foodItem.name}">
                <i class="fas fa-minus"></i>
                <span class="item-quantity">${foodItem.inBasket}</span>
                <i class="fas fa-plus"></i>
            </div>`
        );
        basket.totalPrice.innerHTML = `<div class="total-price">£ ${totalPrice}</div>`;
    }
}

// Allows access of the individual parentNodes by pushing into an array

Element.prototype.parents = function () {
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
        .parents(".product-quantity")[0]
        .getAttribute("data-itemIndex");
    const item = food[itemIndex];

    // If there is no item, then don't do anything - fixes item.name undefinted html bug on shopping cart
    if (!item) {
        return;
    }

    // when clicked on plus icon
    if (e.target.classList.contains("fa-plus")) {
        // increasing the quantity by 1 in item object and in DOM
        item.inBasket++;
        e.target.parentNode.querySelector(".item-quantity").innerText =
            item.inBasket;
        totalPrice += item.price;

        // When clicked on minus icon
    } else if (e.target.classList.contains("fa-minus") && item.inBasket > 1) {
        // decreasing the quantity by 1 in item object and in DOM
        item.inBasket--;
        e.target.parentNode.querySelector(".item-quantity").innerText =
            item.inBasket;
        totalPrice -= item.price;
    }
    // Allows Data to Remain on page after refresh
    let cartItems = localStorage.getItem("foodInBasket");
    cartItems = JSON.parse(cartItems);
    cartItems = {
        ...cartItems,
        [item.name]: item
    };
    localStorage.setItem("foodInBasket", JSON.stringify(cartItems));
    localStorage.setItem("totalPrice", totalPrice);

    document.querySelector(
        ".total-price"
    ).innerHTML = `<div class="total-Price">£ ${totalPrice}</div>`;
});

// Function for deleting items in basket through use of a Font awesome icon

function deleteButtons() {
    addEventListenerByClass("click", "delete-btn", function (e) {
        let cartItems = localStorage.getItem("foodInBasket");
        cartItems = JSON.parse(cartItems);
        let foodName = e.target.parentNode.getAttribute("data-food");
        let foodItem = cartItems[foodName];
        totalPrice -= foodItem.price * foodItem.inBasket;
        let foodIndex;

        food.forEach(function (food, i) {
            if (food.name === foodItem.name) foodIndex = i;
        });

        foodItem.inBasket = 0;
        food[foodIndex] = foodItem;
        delete cartItems[foodName];
        basketItem.pop(foodIndex);
        localStorage.setItem("foodInBasket", JSON.stringify(cartItems));
        localStorage.setItem("totalPrice", totalPrice);
        document.querySelector(".total-price").innerHTML = totalPrice;
        document
            .querySelectorAll('[data-food="' + foodName + '"]')
            .forEach(function (el) {
                el.parentElement.removeChild(el);
            });
    });
}

deleteButtons();

// targeting function used to allow deletion of elements created
function addEventListenerByClass(event, className, callback) {
    document.addEventListener(event, function (e) {
        if (e.target && e.target.classList.contains(className)) {
            callback(e);
        }
    });
}