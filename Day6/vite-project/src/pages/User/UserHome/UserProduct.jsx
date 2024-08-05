import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for HTTP requests
import { useNavigate } from "react-router-dom";
import "../UserHome/UserProduct.css"; // Ensure you have the styles defined
import { StoreContext } from "@/StoreProvider";
import { useContext } from "react";

const ToyProduct = () => {
  const { wishList, toggleFavorite } = useContext(StoreContext);
  const [productList, setProductList] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    color: { black: false, pink: false, red: false, blue: false, orange: false },
    size: { small: false, medium: false, large: false },
    price: { lessThan2000: false, lessThan3000: false },
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch products from backend
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/users/getproduct'); // Adjust URL as per your backend endpoint
        const productsFromBackend = response.data;
        setProductList(productsFromBackend.map(product => ({
          ...product,
          isFavorited: wishList.some(item => item.id === product.id),
        })));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [wishList]); // Include wishList in dependency array to re-fetch products on wishList change

  const toggleFavoriteProduct = (productId) => {
    const product = productList.find(product => product.id === productId);
    toggleFavorite(product);
    setProductList(prevProducts =>
      prevProducts.map(product =>
        product.id === productId ? { ...product, isFavorited: !product.isFavorited } : product
      )
    );
  };

  const toggleFilter = (filter, subFilter) => {
    setSelectedFilters(prevFilters => ({
      ...prevFilters,
      [filter]: {
        ...prevFilters[filter],
        [subFilter]: !prevFilters[filter][subFilter],
      },
    }));
  };

  const getFilteredProducts = () => {
    return productList.filter(product => {
      const { size, color, price } = selectedFilters;

      const matchesSize = Object.entries(size).some(([key, value]) => value && product.size.toLowerCase() === key);
      const matchesColor = Object.entries(color).some(([key, value]) => value && product.color.toLowerCase() === key);
      const matchesPrice = (price.lessThan2000 && product.price < 2000) ||
        (price.lessThan3000 && product.price < 3000) ||
        (!price.lessThan2000 && !price.lessThan3000);

      return (
        (matchesSize || Object.values(size).every(v => !v)) &&
        (matchesColor || Object.values(color).every(v => !v)) &&
        matchesPrice
      );
    });
  };

  const filteredProducts = getFilteredProducts();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="toy-page">
      <nav className="navbar">
        <button onClick={() => handleNavigation("/shopbycategory")} className="nav-button">Home</button>
        <button onClick={() => handleNavigation("/wishlist")} className="nav-button">Wishlist ❤</button>
        <button onClick={() => navigate("/cart")} className="nav-button">Cart 🛒</button>
      </nav>
      <aside className="filters mt-8 p-8">
        <h2>Filters</h2>
        <button
          className="reset"
          onClick={() =>
            setSelectedFilters({
              color: { black: false, pink: false, red: false, blue: false, orange: false },
              size: { small: false, medium: false, large: false },
              price: { lessThan2000: false, lessThan3000: false },
            })
          }
        >
          Reset
        </button>
        <div className="filter-group p-1">
          <h3 className="font-bold">Color</h3>
          {["black", "pink", "red", "blue", "orange"].map(color => (
            <div key={color} className="filter-option p-1">
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
        <div className="filter-group p-1">
          <h3 className="font-bold">Size</h3>
          {["small", "medium", "large"].map(size => (
            <div key={size} className="filter-option p-1">
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
        <div className="filter-group p-1">
          <h3 className="font-bold">Price</h3>
          <div className="filter-option p-1">
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
          <div className="filter-option p-1">
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
          <h2 className="font-bold ">TOYTIDE products</h2>
          <button className="toggle-fit">Enable My Fit</button>
        </div>
        <div className="product-grid">
          {filteredProducts.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <button
                className="wishlist"
                onClick={() => toggleFavoriteProduct(product.id)}
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
              <p>Size: {product.size}</p>
              <p>Color: {product.color}</p>
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
