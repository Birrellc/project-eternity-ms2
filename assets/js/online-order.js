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
    updateModal()
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

const getCartData = () => ({
    products: JSON.parse(sessionStorage.getItem("foodInCart")),
    priceValue: sessionStorage.getItem("totalPrice") || 0,
    product: document.querySelector('.product'),
    price: document.querySelector('.price'),
    quantity: document.querySelector('.quantity'),
    totalPrice: document.querySelector('.total-price')
})


function updateModal() {
    let cart = getCartData()
    if (cart.products === null) {
        return false
    }
    cart.product.innerHTML = '';
    Object.values(cart.products).map(food => {
        cart.product.innerHTML = `<div class="product">${food.name}</div>`;
        cart.price.innerHTML = `<div class="price">${food.price}</div>`;
        cart.quantity.innerHTML = `<div class="quantity">${food.inCart}</div>`;
        cart.price.innerHTML = `<div class="total-price">${cart.totalPrice}</div>`
    });
}