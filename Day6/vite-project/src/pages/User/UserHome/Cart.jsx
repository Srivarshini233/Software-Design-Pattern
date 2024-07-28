import React, { useContext, useState } from 'react';
import { StoreContext } from '@/StoreProvider';
import { Link, useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart } = useContext(StoreContext);
  const [quantities, setQuantities] = useState(cart.reduce((acc, product) => {
    acc[product.id] = 1;
    return acc;
  }, {}));
  const navigate = useNavigate();

  const handleQuantityChange = (id, amount) => {
    setQuantities((prevQuantities) => {
      const newQuantities = {
        ...prevQuantities,
        [id]: Math.max(prevQuantities[id] + amount, 1),
      };
      return newQuantities;
    });
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => {
      return total + product.price * quantities[product.id];
    }, 0);
  };

  const handleBuyNow = () => {
    navigate('/buynow');
  };

  return (
    <div className="cart-page h-screen w-screen">
      <div>
      <nav className='navbar nav-container'>
       <button onClick={() => handleNavigation("/shopbycategory")} className="nav-button">
          Home
        </button>
        <button onClick={() => handleNavigation("/wishlist")} className="nav-button">
          Wishlist ❤
        </button>

      </nav>
      </div>
      <h2 className='font-bold flex justify-center items-center pt-3 pb-5 card-made textsizes'>Cart 🛒</h2>
      <div className="cart-grid">
        {cart.length > 0 ? (
          cart.map((product) => (
            <div className="cart-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Size: {product.size}</p>
              <p>Color: {product.color}</p>
              <p>Shape: {product.shape}</p>
              <p>₹{product.price}</p>
              <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                <span>{quantities[product.id]}</span>
                <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
              </div>

              <p className="product-total">Total: {quantities[product.id]} x ₹{product.price} = ₹{quantities[product.id] * product.price}</p>
              <button className= 'text-white h-10 w-36 bg-green-600 rounded mt-12' onClick={handleBuyNow}>Buy Now</button>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <div className='flex justify-end gap-5'>
        <button className= 'text-white h-10 w-36 bg-green-600 rounded mt-12' onClick={handleBuyNow}>Buy Now</button>
        <div className="total-price">
          Total Price: ₹{calculateTotalPrice()}
        </div>
      </div>
    </div>
  );
};

export default Cart;
