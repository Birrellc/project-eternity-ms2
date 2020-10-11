$(function () {
    $('.cart').on('click', function () {
        $('#cartModal').modal('show');
    });
});

let addToBasket = document.querySelectorAll('.menu-btn');


let food = [{
        name: 'lamb',
        price: 10,
        inCart: 0
    },
    {
        name: 'burger',
        price: 11,
        inCart: 0
    },
    {
        name: 'avacado',
        price: 12,
        inCart: 0
    },
    {
        name: 'steak',
        price: 13,
        inCart: 0
    },
    {
        name: 'prawns',
        price: 14,
        inCart: 0
    },
    {
        name: 'toast',
        price: 15,
        inCart: 0
    },
    {
        name: 'kebab',
        price: 16,
        inCart: 0
    },
    {
        name: 'pizza',
        price: 17,
        inCart: 0
    },
]
// This adds onClick events to each food item in the list
for (let i = 0; i < addToBasket.length; i++) {
    addToBasket[i].addEventListener('click', () => {
        // Use new name for function  i.e. addItemToCart()
        addItemToBasket(food[i]);
    })
}


function addItemToBasket(food) {
    let menuNumbers = sessionStorage.getItem('addItemToBasket');
    menuNumbers = parseInt(menuNumbers);
    if (menuNumbers) {
        sessionStorage.setItem('addItemToBasket', menuNumbers + 1);
    } else {
        sessionStorage.setItem('addItemToBasket', 1)
    }
    updateStoreBasket(food);
}


function updateStoreBasket(food) {
    let cartProducts = sessionStorage.getItem('foodInCart');
    cartProducts = JSON.parse(cartProducts);
    // If the cart has products
    if (cartProducts !== null) {
        // If this item of food isnt in the cart already then..
        if (cartProducts[food.name] === undefined) {
            // Update the cart with the existing items and add our new item into it
            cartProducts = {
                ...cartProducts,
                [food.name]: food
            }
        }
        // Regardless if the item was there before or not we want to increase the quantity by 1
        cartProducts[food.name].inCart += 1;
        totalCost(food)
    } else {
        food.inCart = 1;
        cartProducts = {
            [food.name]: food
        }
        totalCost(food)
    }
    sessionStorage.setItem("foodInCart", JSON.stringify(cartProducts));
    addProduct()
    addPrice()
    addQuantity()
    totalPrice()
}

function totalCost(food) {
    let currentCartPrice = sessionStorage.getItem("totalPrice");
    console.log("currentCartPrice", currentCartPrice);
    // If we have a current cart price
    if (currentCartPrice !== null) {
        currentCartPrice = parseInt(currentCartPrice);
        sessionStorage.setItem("totalPrice", currentCartPrice + food.price);
        console.log('we are updating cart price', currentCartPrice + food.price)
    } else {
        // If we have no current cart price
        sessionStorage.setItem("totalPrice", food.price);
        console.log('we are setting cart price')
    }
}

function updateModal() {
    let cartProducts = sessionStorage.getItem("foodInCart");
    cartProducts = JSON.parse(cartProducts);
    let totalPriceValue = 0
    totalPriceValue = sessionStorage.getItem("totalPrice")
    let cartModalProduct = document.querySelector('.product');
    let cartModalPrice = document.querySelector('.price');
    let cartModalQuantity = document.querySelector('.quantity');
    let cartModalTotalPrice = document.querySelector('.total-price')
    if (cartProducts !== null) {
        cartModalProduct.innerHTML = '';
        Object.values(cartProducts).map(food => {
            let productName = `<div class="productName">${food.name}</div>`
            cartModalProduct.innerHTML = productName;

            let productPrice = `<div class="productPrice">${food.price}</div>`
            cartModalPrice.innerHTML = productPrice;

            let productQuantity = `<div class="productQuantity">${food.inCart}</div>`
            cartModalQuantity.innerHTML = productQuantity;

            let totalPrice = `<div class="totalPrice">${totalPriceValue}</div>`
            cartModalTotalPrice.innerHTML = totalPrice
        });
    }
}