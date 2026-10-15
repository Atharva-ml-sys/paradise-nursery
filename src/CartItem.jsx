// CartItem.jsx
// Shopping cart page for Paradise Nursery.
// Requirements covered:
//  - Shows the total cart amount for all plants.
//  - Shows the total cost for each plant line (unit cost x quantity).
//  - Each plant displays a thumbnail, name, and unit price.
//  - Increase button: increments quantity and updates all values.
//  - Decrease button: decrements quantity (removes item if it hits zero).
//  - Delete button: removes the plant from the cart.
//  - Checkout button: shows a "Coming Soon" message.
//  - Continue Shopping button: returns to the product listing page.
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

function CartItem({ onContinueShopping }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate the total cost of all items in the cart.
  const calculateTotalAmount = () => {
    return cartItems
      .reduce((total, item) => total + item.cost * item.quantity, 0)
      .toFixed(2);
  };

  // Calculate the subtotal for a single cart line.
  const calculateTotalCost = (item) => {
    return (item.cost * item.quantity).toFixed(2);
  };

  // Total number of plants in the cart (sum of quantities).
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Increase the quantity of a plant by one.
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Decrease the quantity by one. If it would drop to zero, remove the item.
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // Remove a plant entirely from the cart.
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Placeholder checkout handler.
  const handleCheckoutShopping = () => {
    alert('Coming Soon! Checkout functionality will be available shortly.');
  };

  const handleContinueShopping = (e) => {
    if (onContinueShopping) {
      onContinueShopping(e);
    }
  };

  return (
    <div className="cart-container">
      <h2 className="cart-heading">
        Total Cart Amount: ${calculateTotalAmount()}
      </h2>
      <p className="cart-total-items">
        Total number of plants in the cart: {totalQuantity}
      </p>

      {cartItems.length === 0 ? (
        <p className="cart-empty">
          Your cart is empty. Add some plants to get started!
        </p>
      ) : (
        <div className="cart-items-list">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.name}>
              <img
                className="cart-item-image"
                src={item.image}
                alt={item.name}
              />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-cost">Unit Price: ${item.cost}</div>
                <div className="cart-item-quantity">
                  <button
                    className="cart-quantity-button cart-quantity-minus"
                    onClick={() => handleDecrement(item)}
                  >
                    -
                  </button>
                  <span className="cart-item-quantity-value">
                    {item.quantity}
                  </span>
                  <button
                    className="cart-quantity-button cart-quantity-plus"
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </button>
                </div>
                <div className="cart-item-total">
                  Total: ${calculateTotalCost(item)}
                </div>
                <button
                  className="cart-item-delete"
                  onClick={() => handleRemove(item)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-actions">
        <button
          className="continue-shopping-button"
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </button>
        <button className="checkout-button" onClick={handleCheckoutShopping}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;
