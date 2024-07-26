import React, { useState } from "react";
import "../UserHome/UserProduct.css"// Ensure you have the styles defined
import { useNavigate } from "react-router-dom";
const ToyProduct = () => {
  // Unique data for products
  const products = [
    {
      id: 1,
      name: "Lego Star Wars",
      description: "Exciting Lego Star Wars set",
      size: "Small",
      color: "Black",
      shape: "Spaceship",
      price: 1200,
      image: "https://via.placeholder.com/150/1",
    },
    {
      id: 2,
      name: "Barbie Dreamhouse",
      description: "Barbie Dreamhouse with accessories",
      size: "Large",
      color: "Pink",
      shape: "House",
      price: 5000,
      image: "https://via.placeholder.com/150/2",
    },
    {
      id: 3,
      name: "Hot Wheels Track",
      description: "Exciting Hot Wheels Track",
      size: "Medium",
      color: "Red",
      shape: "Track",
      price: 2000,
      image: "https://via.placeholder.com/150/3",
    },
    {
      id: 4,
      name: "Transformers Optimus Prime",
      description: "Transformers action figure",
      size: "Medium",
      color: "Blue",
      shape: "Robot",
      price: 2500,
      image: "https://via.placeholder.com/150/4",
    },
    {
      id: 5,
      name: "NERF Blaster",
      description: "NERF gun for kids",
      size: "Large",
      color: "Orange",
      shape: "Gun",
      price: 1500,
      image: "https://via.placeholder.com/150/5",
    },
    // Add more toy products as needed
  ];

  // State to manage products and their favorited status
  const [productList, setProductList] = useState(
    products.map((product) => ({ ...product, isFavorited: false }))
  );

  // State to manage selected filters
  const [selectedFilters, setSelectedFilters] = useState({
    shape: { spaceship: false, house: false, track: false, robot: false, gun: false },
    color: { black: false, pink: false, red: false, blue: false, orange: false },
    size: { small: false, medium: false, large: false },
    price: { lessThan2000: false, lessThan3000: false },
  });

  // Handler to toggle the favorited status
  const toggleFavorite = (productId) => {
    setProductList((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, isFavorited: !product.isFavorited }
          : product
      )
    );
  };

  // Handler to toggle filter selection
  const toggleFilter = (filter, subFilter) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: {
        ...prevFilters[filter],
        [subFilter]: !prevFilters[filter][subFilter],
      },
    }));
  };

  // Function to filter products based on selected filters
  const getFilteredProducts = () => {
    return productList.filter((product) => {
      const { size, color, shape, price } = selectedFilters;

      const matchesSize = Object.entries(size).some(
        ([key, value]) => value && product.size.toLowerCase() === key
      );

      const matchesColor = Object.entries(color).some(
        ([key, value]) => value && product.color.toLowerCase() === key
      );

      const matchesShape = Object.entries(shape).some(
        ([key, value]) => value && product.shape.toLowerCase() === key
      );

      const matchesPrice =
        (price.lessThan2000 && product.price < 2000) ||
        (price.lessThan3000 && product.price < 3000) ||
        (!price.lessThan2000 && !price.lessThan3000);

      return (
        (matchesSize || Object.values(size).every((v) => !v)) &&
        (matchesColor || Object.values(color).every((v) => !v)) &&
        (matchesShape || Object.values(shape).every((v) => !v)) &&
        matchesPrice
      );
    });
  };

  const filteredProducts = getFilteredProducts();
  const navigate = useNavigate();

  // Function to handle navigation based on category
  const handleNavigation = (path) => {
      navigate(path);
  };
  return (
    <div className="toy-page">
      <nav className="navbar">
        <button onClick={()=>handleNavigation("/shopbycategory")}className="nav-button">Home</button>
        <button className="nav-button">Wishlist ❤</button>
        <button className="nav-button">Cart 🛒</button>
      </nav>
      <aside className="filters">
        <h2>Filters</h2>
        <button
          className="reset"
          onClick={() =>
            setSelectedFilters({
              shape: { spaceship: false, house: false, track: false, robot: false, gun: false },
              color: { black: false, pink: false, red: false, blue: false, orange: false },
              size: { small: false, medium: false, large: false },
              price: { lessThan2000: false, lessThan3000: false },
            })
          }
        >
          Reset
        </button>
        <div className="filter-group">
          <h3>Shape</h3>
          {["spaceship", "house", "track", "robot", "gun"].map((shape) => (
            <div key={shape} className="filter-option">
              <input
                type="checkbox"
                id={shape}
                checked={selectedFilters.shape[shape]}
                onChange={() => toggleFilter("shape", shape)}
              />
              <label
                htmlFor={shape}
                style={{
                  color: selectedFilters.shape[shape] ? "orange" : "black",
                }}
              >
                {shape.charAt(0).toUpperCase() + shape.slice(1)}
              </label>
            </div>
          ))}
        </div>
        <div className="filter-group">
          <h3>Color</h3>
          {["black", "pink", "red", "blue", "orange"].map((color) => (
            <div key={color} className="filter-option">
              <input
                type="checkbox"
                id={color}
                checked={selectedFilters.color[color]}
                onChange={() => toggleFilter("color", color)}
              />
              <label
                htmlFor={color}
                style={{
                  color: selectedFilters.color[color] ? "orange" : "black",
                }}
              >
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </label>
            </div>
          ))}
        </div>
        <div className="filter-group">
          <h3>Size</h3>
          {["small", "medium", "large"].map((size) => (
            <div key={size} className="filter-option">
              <input
                type="checkbox"
                id={size}
                checked={selectedFilters.size[size]}
                onChange={() => toggleFilter("size", size)}
              />
              <label
                htmlFor={size}
                style={{
                  color: selectedFilters.size[size] ? "orange" : "black",
                }}
              >
                {size.charAt(0).toUpperCase() + size.slice(1)}
              </label>
            </div>
          ))}
        </div>
        <div className="filter-group">
          <h3>Price</h3>
          <div className="filter-option">
            <input
              type="checkbox"
              id="lessThan2000"
              checked={selectedFilters.price.lessThan2000}
              onChange={() => toggleFilter("price", "lessThan2000")}
            />
            <label
              htmlFor="lessThan2000"
              style={{
                color: selectedFilters.price.lessThan2000 ? "orange" : "black",
              }}
            >
              Less than ₹2000
            </label>
          </div>
          <div className="filter-option">
            <input
              type="checkbox"
              id="lessThan3000"
              checked={selectedFilters.price.lessThan3000}
              onChange={() => toggleFilter("price", "lessThan3000")}
            />
            <label
              htmlFor="lessThan3000"
              style={{
                color: selectedFilters.price.lessThan3000 ? "orange" : "black",
              }}
            >
              Less than ₹3000
            </label>
          </div>
        </div>
      </aside>
      <main className="products">
        <div className="product-header">
          <h2>Toys</h2>
          <button className="toggle-fit">Enable My Fit</button>
        </div>
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <button
                className="wishlist"
                onClick={() => toggleFavorite(product.id)}
                style={{
                  color: product.isFavorited ? "red" : "transparent",
                  border: "1px solid red",
                }}
                onMouseEnter={(e) =>
                  !product.isFavorited && (e.target.style.color = "rgba(255,0,0,0.5)")
                }
                onMouseLeave={(e) =>
                  !product.isFavorited && (e.target.style.color = "transparent")
                }
              >
                ❤
              </button>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Size: {product.size}</p>
              <p>Color: {product.color}</p>
              <p>Shape: {product.shape}</p>
              <p>₹{product.price}</p>
              <p>Inclusive of all taxes</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ToyProduct;
