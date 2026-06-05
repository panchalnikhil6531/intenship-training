import React, { useState } from "react";
import "./App.css";

function Cart({ cart, setCart }) {

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("COD");

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const gst = subtotal * 0.18;
  const delivery = subtotal > 0 ? 99 : 0;
  const total = subtotal + gst + delivery;

  const handleCheckout = () => {
    if (!name || !address) {
      alert("Please fill all details");
      return;
    }

    alert(
      `Order Placed Successfully!\n\nCustomer: ${name}\nPayment: ${payment}\nTotal: ₹${total.toFixed(2)}`
    );

    setCart([]);
  };

  return (
    <div className="cart-page">

      <h1>🛒 Shopping Cart</h1>

      <div className="cart-layout">

        {/* Left Side */}
        <div className="cart-items">

          {cart.length === 0 ? (
            <h2>Your Cart Is Empty</h2>
          ) : (
            cart.map((item) => (
              <div className="cart-card" key={item.id}>

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>

                  <div className="qty-box">
                    <button onClick={() => decreaseQty(item.id)}>
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQty(item.id)}>
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>

              </div>
            ))
          )}

        </div>

        {/* Billing */}
        <div className="billing-card">

          <h2>Billing Details</h2>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <textarea
            placeholder="Delivery Address"
            value={address}
            onChange={(e) =>
              setAddress(e.target.value)
            }
          />

          <select
            value={payment}
            onChange={(e) =>
              setPayment(e.target.value)
            }
          >
            <option>COD</option>
            <option>UPI</option>
            <option>Credit Card</option>
            <option>Debit Card</option>
          </select>

          <hr />

          <div className="bill-row">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>

          <div className="bill-row">
            <span>GST (18%)</span>
            <span>₹{gst.toFixed(2)}</span>
          </div>

          <div className="bill-row">
            <span>Delivery</span>
            <span>₹{delivery}</span>
          </div>

          <hr />

          <div className="bill-total">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>

          <button
            className="checkout-btn"
            onClick={handleCheckout}
          >
            Checkout
          </button>

        </div>

      </div>

    </div>
  );
}

export default Cart;