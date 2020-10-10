$(function () {
    $('.cart').on('click', function () {
        $('#cartModal').modal('show');
    });
});

let items = document.querySelectorAll('.menu-btn');

let food = [{
        name: 'Menu 1',
        price: 10,
        inCart: 0
    },
    {
        name: 'Menu 2',
        price: 10,
        inCart: 0
    },
    {
        name: 'Menu 3',
        price: 10,
        inCart: 0
    },
    {
        name: 'Menu 4',
        price: 10,
        inCart: 0
    },
    {
        name: 'Menu 5',
        price: 10,
        inCart: 0
    },
    {
        name: 'Menu 6',
        price: 10,
        inCart: 0
    },
    {
        name: 'Menu 7',
        price: 10,
        inCart: 0
    },
    {
        name: 'Menu 8',
        price: 10,
        inCart: 0
    },
]

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', () => {
        itemNumbers(food[i]);
    })
}

function itemNumbers(food) {
    let menuNumbers = sessionStorage.getItem('itemNumbers');
    menuNumbers = parseInt(menuNumbers);
    setItem(food);
}

function setItem(food) {
    let cartProducts = sessionStorage.getItem('foodInCart');
    cartProducts = JSON.parse(cartProducts);

    if (cartProducts != null) {
        if (cartProducts[food.name] == undefined) {
            cartProducts = {
                ...cartProducts,
                [food.name]: food
            }
        }
        cartProducts[food.name].inCart += 1;
    } else {
        food.inCart = 1;
        cartProducts = {
            [food.name]: food
        }


    }
    sessionStorage.setItem("foodInCart", JSON.stringify(cartProducts));
    console.log("my cartProducts are", cartProducts);
}