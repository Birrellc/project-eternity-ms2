$(function () {
    $('.cart').on('click', function () {
        $('#cartModal').modal('show');
    });
});
let products = document.querySelectorAll('.menu-btn');

let food = [{
        name: 'Menu 1',
        price: 10,
        inCart: 0
    },
    {
        name: 'Menu 2',
        price: 12,
        inCart: 0
    },
    {
        name: 'Menu 3',
        price: 11,
        inCart: 0
    },
    {
        name: 'Menu 4',
        price: 13,
        inCart: 0
    },
    {
        name: 'Menu 5',
        price: 14,
        inCart: 0
    },
    {
        name: 'Menu 6',
        price: 15,
        inCart: 0
    },
    {
        name: 'Menu 7',
        price: 16,
        inCart: 0
    },
    {
        name: 'Menu 8',
        price: 17,
        inCart: 0
    },
]

for (let i = 0; i < products.length; i++) {
    products[i].addEventListener('click', () => {
        itemNumbers(food[i]);
    })
}

function itemNumbers(food) {
    let menuNumbers = sessionStorage.getItem('itemNumbers');
    menuNumbers = parseInt(menuNumbers);
    if (menuNumbers){
        sessionStorage.setItem('itemNumbers', menuNumbers + 1);
    } else {
        sessionStorage.setItem('itemNumbers', 1)
    }
    setItem(food);
}

function setItem(food) {
    let cartProducts = sessionStorage.getItem('foodInCart');
    cartProducts = JSON.parse(cartProducts);
    if (cartProducts !== null) {
        if (cartProducts[food.name] === undefined) {
            cartProducts = {
                ...cartProducts,
                [food.name]: food
            }
        }
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
    updateCart()
}

function totalCost(food) {
    let currentCartPrice = sessionStorage.getItem("totalPrice");
    console.log("currentCartPrice", currentCartPrice);
    if (currentCartPrice !== null) {
        currentCartPrice = parseInt(currentCartPrice);
        sessionStorage.setItem("totalPrice", currentCartPrice + food.price);
        console.log('we are updating cart price', currentCartPrice + food.price )
    } else {
        sessionStorage.setItem("totalPrice", food.price);
        console.log('we are setting cart price')
    }
}

function updateCart() {
    let cartProducts = sessionStorage.getItem("foodInCart");
    cartProducts = JSON.parse(cartProducts);
    let totalPriceValue = 0
    totalPriceValue = sessionStorage.getItem("totalPrice")
    let cartModalProduct = document.querySelector('.product');
    let cartModalPrice = document.querySelector('.price');
    let cartModalQuantity = document.querySelector('.quantity');
    let cartModalTotalPrice = document.querySelector('.total-price')
    if (cartProducts != null) {
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
