// App.jsx
// Top-level component. Renders the landing page with the company name,
// an about-us paragraph, and a "Get Started" button that navigates to the
// product listing page. Uses simple state-based page switching (no router
// needed) so the app deploys cleanly to GitHub Pages.
import React, { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  // showProductList controls which "page" is visible.
  // false -> landing page, true -> product listing page.
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  // Called from ProductList's navbar "Home" link to return to the landing page.
  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      {/* Landing page */}
      <div
        className={`landing-page ${showProductList ? 'fade-out' : ''}`}
        style={{ display: showProductList ? 'none' : 'flex' }}
      >
        <div className="landing-content">
          <h1>Welcome To Paradise Nursery</h1>
          <div className="divider"></div>
          <p className="tagline">Where Green Meets Serenity</p>
          <AboutUs />
          <button className="get-started-button" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      </div>

      {/* Product listing + cart page */}
      <div
        className="product-list-container"
        style={{ display: showProductList ? 'block' : 'none' }}
      >
        <ProductList onHomeClick={handleHomeClick} />
      </div>
    </div>
  );
}

export default App;
