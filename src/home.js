import { useState } from "react";
import "./App.css";

function Home() {

  const products = [
    {
      id: 1,
      name: "Headphone",
      price: 1999,
      image: "https://picsum.photos/300/200?1"
    },
    {
      id: 2,
      name: "Watch",
      price: 2999,
      image: "https://picsum.photos/300/200?2"
    },
    {
      id: 3,
      name: "Laptop",
      price: 49999,
      image: "https://picsum.photos/300/200?3"
    }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {

    const exists = cart.find(
      (item) => item.id === product.id
    );

    if (exists) {

      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ]);

    }
  };

  const removeFromCart = (id) => {
    setCart(
      cart.filter((item) => item.id !== id)
    );
  };

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container">

      <h1>Products</h1>

      <div className="cart-box">
        <h2>Cart ({cart.length})</h2>

        {cart.map((item) => (
          <div
            key={item.id}
            className="cart-item"
          >
            <p>
              {item.name} x {item.quantity}
            </p>

            <button
              onClick={() =>
                removeFromCart(item.id)
              }
            >
              Remove
            </button>
          </div>
        ))}

        <h3>Total ₹{total}</h3>
      </div>

      <div className="product-container">

        {products.map((product) => (
          <div
            className="card"
            key={product.id}
          >

            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            <div className="card-content">

              <h3>{product.name}</h3>

              <div className="price">
                ₹{product.price}
              </div>

              <button
                className="btn"
                onClick={() =>
                  addToCart(product)
                }
              >
                Add To Cart
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Home;