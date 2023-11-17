const product = [
    {
        id: 1,
        image: 'uniq.jpg',
        title: 'Uniqlo T-shirt',
        brand: 'Uniqlo',
        quantity: 'Quantity: 1',
        price: '10.00',
    },

    {
        id: 2,
        image: 'Levi.jpg',
        title: "Levi's Jeans",
        brand: 'Levi',
        quantity: 'Quantity: 1',
        price: '50.00',
    },
    {
        id: 3,
        image: 'nike.jpg',
        title: "Nike Sneakers",
        brand: 'Nike',
        quantity: 'Quantity: 1',
        price: '60.00',
    },
    {
        id: 4,
        image: 'adidas.jpg',
        title: "Adidas Sandals",
        brand: 'Adidas',
        quantity: 'Quantity: 1',
        price: '40.00',
    },

    {
        id: 5,
        image: 'zara.jpg',
        title: "Zara Dress",
        brand: 'Zara',
        quantity: 'Quantity: 1',
        price: '30.00',
    },

    {
        id: 6,
        image: 'H&MSkirt.jpg',
        title: "H&M Skirt",
        brand: 'H&M',
        quantity: 'Quantity: 1',
        price: '20.00',
    },

    {
        id: 7,
        image: 'mango.jpg',
        title: "Mango Blouse",
        brand: 'Mango',
        quantity: 'Quantity: 1',
        price: '15.00',
    },

    {
        id: 8,
        image: 'ChristianLouboutinHeels.jpg',
        title: "Christian Louboutin Heels",
        brand: 'Christian Louboutin',
        quantity: 'Quantity: 1',
        price: '70.00',
    },

    {
        id: 9,
        image: 'TNFJ.jpg',
        title: "The North Face Jacket",
        brand: 'The North Face',
        quantity: 'Quantity: 1',
        price: '40.00',
    },

    {
        id: 10,
        image: 'gucci-hat.jpg',
        title: "Gucci Hat",
        brand: 'Gucci',
        quantity: 'Quantity: 1',
        price: '10.00',
    },
]

const categories =[...new Set(product.map((item)=>
    {return item}))]

 let cart = document.getElementById('root')
 cart.innerHTML = categories.map((item)=>
 {
    var {image, title, brand, quantity, price} = item;
    return(
        `<div class="box">
            <div class="img-box">
            <img src=${image}></img>
            </div>
            <div class="left">
                <p>${brand}</p>
                <p>${title}</p>
                <p>${quantity}</p>
                <h2>${price}</h2>
                <button>Add to Cart</button>
            </div>
        </div>`
    )
 }).join('')  