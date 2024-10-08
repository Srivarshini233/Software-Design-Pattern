import React, { createContext, useState ,useContext} from 'react';

// Create a context to manage the state of the cart and wishlist
export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleFavorite = (product) => {
    setWishList((prevWishList) => {
      const isFavorited = prevWishList.find((item) => item.id === product.id);
      if (isFavorited) {
        return prevWishList.filter((item) => item.id !== product.id);
      } else {
        return [...prevWishList, product];
      }
    });
  };
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if the product is already in the cart
      const productExists = prevCart.some(item => item.id === product.id);
      if (productExists) {
        // If product exists, don't add it again
        return prevCart;
      }
      // Add new product to cart
      toggleFavorite(product); // Optionally remove the product from the wishlist after adding to the cart
      return [...prevCart, product];
    });
  };
  return (
    <StoreContext.Provider value={{ wishList, toggleFavorite, cart, addToCart }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
