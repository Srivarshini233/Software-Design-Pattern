import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../UserHome/UserProduct.css"; // Ensure you have the styles defined
import { StoreContext } from "@/StoreProvider";
import { useContext } from "react";

const ToyProduct = () => {
   
  const { wishList, toggleFavorite } = useContext(StoreContext);
  const products = [
    { id: 1, name: "CatToy", description: "NERF gun for kids", size: "Large", color: "Orange", shape: "Gun", price: 1500, image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491898794/300/491898794-1.webp" },
    { id: 2, name: "Barbie ", description: "Barbie Dreamhouse with accessories", size: "Large", color: "Pink", shape: "House", price: 5000, image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/490803852/300/490803852-4.webp" },
    { id: 3, name: "Elephant", description: "NERF gun for kids", size: "Large", color: "Orange", shape: "Gun", price: 1500, image: "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492337042/300/492337042-1_8608.webp" },
    { id: 4, name: "Baby shark", description: "NERF gun for kids", size: "Large", color: "Orange", shape: "Gun", price: 1500, image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491960521/300/491960521-1.webp" },
    { id: 5, name: "DisneyPricess", description: "NERF gun for kids", size: "Large", color: "Orange", shape: "Gun", price: 1500, image: "https://hmadmin.hamleys.in/product/491056197/300/491056197-1.jpg" },
    { id: 6, name: "Mickey & Minnie", description: "NERF gun for kids", size: "Large", color: "Orange", shape: "Gun", price: 1500, image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492408492/300/492408492.webp" },
    { id: 7, name: "Teddy bear", description: "NERF gun for kids", size: "Large", color: "Orange", shape: "Gun", price: 1500, image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492409109/300/492409109-1.webp" },
    { id: 8, name: "My Little Pony", description: "NERF gun for kids", size: "Large", color: "Orange", shape: "Gun", price: 1500, image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492336764/300/492336764.webp" },
    { id: 9, name: "House", description: "NERF gun for kids", size: "Large", color: "Orange", shape: "Gun", price: 1500, image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492409575/300/492409575-1.jpeg" },
    { id: 10, name: "Wheels Track", description: "Exciting Hot Wheels Track", size: "Medium", color: "Red", shape: "Track", price: 2000, image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491959857/300/491959857-1.webp" },
    { id: 11, name: "IronMan", description: "Transformers action figure", size: "Medium", color: "Blue", shape: "Robot", price: 2500, image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491568833/300/491568833-1.webp" },
    { id: 12, name: "Avengers", description: "Exciting Lego Star Wars set", size: "Small", color: "Black", shape: "Spaceship", price: 1200, image: "https://hmadmin.hamleys.in/product/493664529/300/493664529-1.jpg" },
    { id: 13, name: "HarryPotter", description: "NERF gun for kids", size: "Large", color: "Orange", shape: "Gun", price: 1500, image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493176616/300/493176616-1.jpeg" },
    { id: 15, name: "paw patrol", description: "NERF gun for kids", size: "Large", color: "Orange", shape: "Gun", price: 1500, image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492410169/300/492410169-1.jpeg" },
    { id: 15, name: "Spiderman", description: "NERF gun for kids", size: "Large", color: "Orange", shape: "Gun", price: 1500, image: "https://hmadmin.hamleys.in/product/493175306/300/493175306-1.jpg" },
    { id: 16, name: "Marvels", description: "NERF gun for kids", size: "Large", color: "Orange", shape: "Gun", price: 1500, image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491960170/300/491960170-1.webp" },
    { id: 17, name: "Hot Wheels Track", description: "NERF gun for kids", size: "Large", color: "Orange", shape: "Gun", price: 1500, image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492410159/300/492410159-1.jpeg" },
    { id: 18, name: "Remote control", description: "NERF gun for kids", size: "Large", color: "Orange", shape: "Gun", price: 1500, image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492409379/300/492409379-1.jpeg" },
    { id: 19, name: "Helicopter", description: "NERF gun for kids", size: "Large", color: "Orange", shape: "Gun", price: 1500, image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492410173/300/492410173-1.jpeg" },
    { id: 20, name: "Car", description: "NERF gun for kids", size: "Large", color: "Orange", shape: "Gun", price: 1500, image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492363246/300/492363246-1.webp" },
    { id: 21, name: "Truck", description: "NERF gun for kids", size: "Large", color: "Orange", shape: "Gun", price: 1500, image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492410152/300/492410152-1.jpeg" },
  ];

  const [productList, setProductList] = useState(
    products.map((product) => ({
      ...product,
      isFavorited: wishList.some((item) => item.id === product.id),
    }))
  );

  const [selectedFilters, setSelectedFilters] = useState({
    shape: { spaceship: false, house: false, track: false, barbie: false, car: false },
    color: { black: false, pink: false, red: false, blue: false, orange: false },
    size: { small: false, medium: false, large: false },
    price: { lessThan2000: false, lessThan3000: false },
  });

  const toggleFavoriteProduct = (productId) => {
    const product = productList.find((product) => product.id === productId);
    toggleFavorite(product);
    setProductList((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, isFavorited: !product.isFavorited }
          : product
      )
    );
  };

  const toggleFilter = (filter, subFilter) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: {
        ...prevFilters[filter],
        [subFilter]: !prevFilters[filter][subFilter],
      },
    }));
  };

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

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="toy-page">
      <nav className="navbar">
        <button onClick={() => handleNavigation("/shopbycategory")} className="nav-button">
          Home
        </button>
        <button onClick={() => handleNavigation("/wishlist")} className="nav-button">
          Wishlist ❤
        </button>
        <button onClick={() => navigate("/cart")} className="nav-button">Cart 🛒</button>
      </nav>
      <aside className="filters mt-8 p-8">
        <h2>Filters</h2>
        <button
          className="reset"
          onClick={() =>
            setSelectedFilters({
              shape: { spaceship: false, house: false, track: false, barbie: false, car: false },
              color: { black: false, pink: false, red: false, blue: false, orange: false },
              size: { small: false, medium: false, large: false },
              price: { lessThan2000: false, lessThan3000: false },
            })
          }
        >
          Reset
        </button>
        <div className="filter-group p-1">
          <h3 className="font-bold">Shape</h3>
          {["spaceship", "house", "track", "barbie", "car"].map((shape) => (
            <div key={shape} className="filter-option p-1">
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
        <div className="filter-group p-1">
          <h3 className="font-bold">Color</h3>
          {["black", "pink", "red", "blue", "orange"].map((color) => (
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
          {["small", "medium", "large"].map((size) => (
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
          {filteredProducts.map((product) => (
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
              <h3 className="">{product.name}</h3>
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
