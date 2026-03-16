import React from 'react';
import './FruitStore.css';
import CartDetails from './CartDetails';
import './CartDetails.css'

const fruits = [
    {id: 1, name: 'Apple', price: '250/kg', img: '/apple.jpg' },
    {id: 2, name: 'Avacado', price: '200/kg', img: '/avacado.jpg' },
    {id: 3, name: 'Banana', price: '120/kg', img: '/banana.jpg' },
    {id: 4, name: 'Grapes', price: '200/kg', img: '/grapes.jpg' },
    {id: 5, name: 'Kiwi', price: '300/kg', img: '/kiwi.jpg' },
    {id: 6, name: 'Mango', price: '150/kg', img: '/mango.jpg' },
    {id: 7, name: 'Orange', price: '400/kg', img: '/orange.jpg' },
    {id: 8, name: 'Pineapple', price: '600/kg', img: '/pineaapple.jpg' },
    {id: 9, name: 'Pomegranate', price: '100/kg', img: '/pomegranate.jpg' },
    {id: 10, name: 'Watermelon', price: '120/kg', img: '/watermelon.jpg' },
];

function FruitStore() {

    const [cart, setCart] = React.useState([]);

    const addToCart = (fruit) => {

        // convert "100/kg" → 100
        const numericPrice = parseInt(fruit.price);

        const existingFruit = cart.find((item) => item.id === fruit.id);

        if (existingFruit) {
            setCart(
                cart.map((item) =>
                    item.id === fruit.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCart([
                ...cart,
                {
                    id: fruit.id,
                    name: fruit.name,
                    price: numericPrice, // store number instead of string
                    quantity: 1
                }
            ]);
        }
    };

    return (
        <div className="container">
            <h1>Fresh Fruits Store</h1>

            <div className="grid">
                {fruits.map((fruit) => (
                    <div key={fruit.id} className="card">

                        <img src={fruit.img} alt={fruit.name} />

                        <span className="alt-text">
                            {fruit.name} (Image not available)
                        </span>

                        <div className="card-content">
                            <p>{fruit.name}</p>
                            <p>Rs.{fruit.price}</p>

                            <button onClick={() => addToCart(fruit)}>
                                Add to Cart
                            </button>
                        </div>

                    </div>
                ))}
            </div>

            <CartDetails cart={cart} setCart={setCart} />

        </div>
    );
}

export default FruitStore;