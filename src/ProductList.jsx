// ProductList.jsx
// Product listing page for Paradise Nursery.
// Requirements covered:
//  - Displays at least six unique houseplants grouped into three categories.
//  - Each plant shows a thumbnail, name, description, and price.
//  - "Add to Cart" button adds the plant to the Redux cart, then disables.
//  - Navbar with links to Home, Plants, and Cart appears on both pages.
//  - Cart icon displays the total number of items, updating dynamically.
//  - Toggles between the product grid and the shopping cart view.
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import plantsData from './plantsData';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();

  // Controls whether the cart page is shown instead of the product grid.
  const [showCart, setShowCart] = useState(false);

  // Track which plants have already been added so their button can be disabled.
  const [addedToCart, setAddedToCart] = useState({});

  // Read all cart items from the Redux store.
  const cartItems = useSelector((state) => state.cart.items);

  // Total quantity across all items — drives the cart icon badge.
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Dispatch addItem and mark the plant as added (disables its button).
  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  // Navbar link handlers.
  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  return (
    <div>
      {/* ---------- Navbar (appears on both Product Listing and Cart pages) ---------- */}
      <nav className="navbar">
        <div className="navbar-brand" onClick={onHomeClick}>
          <span className="navbar-logo">🌱</span>
          <div className="navbar-title">
            <h3>Paradise Nursery</h3>
            <span className="navbar-subtitle">Where Green Meets Serenity</span>
          </div>
        </div>
        <div className="navbar-links">
          <a href="#" onClick={onHomeClick}>
            Home
          </a>
          <a href="#" onClick={handlePlantsClick}>
            Plants
          </a>
          <a href="#" onClick={handleCartClick} className="cart-link">
            {/* Cart icon with a dynamic item count badge. */}
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{totalQuantity}</span>
          </a>
        </div>
      </nav>

      {/* ---------- Page body: product grid OR cart ---------- */}
      {!showCart ? (
        <div className="product-grid-wrapper">
          {plantsData.map((categoryObj, index) => (
            <div key={index} className="category-section">
              <h2 className="category-title">{categoryObj.category}</h2>
              <div className="product-grid">
                {categoryObj.plants.map((plant, plantIndex) => (
                  <div key={plantIndex} className="product-card">
                    <img
                      className="product-image"
                      src={plant.image}
                      alt={plant.name}
                    />
                    <div className="product-info">
                      <h3 className="product-name">{plant.name}</h3>
                      <p className="product-description">{plant.description}</p>
                      <p className="product-cost">${plant.cost}</p>
                      <button
                        className={`add-to-cart-button ${
                          addedToCart[plant.name] ? 'added' : ''
                        }`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={addedToCart[plant.name]}
                      >
                        {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
