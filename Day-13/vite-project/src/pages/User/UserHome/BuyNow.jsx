import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '@/StoreProvider';
import { postOrder } from '@/services/api';
import { User } from '@/services/user'; // Adjust the path as necessary
import './OrderPage.css';
import gpayQrCode from './image.jpg'; // Ensure QR code image exists

const OrderPage = () => {
  const { cart } = useContext(StoreContext);
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await User.getUserData();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, []);

  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

  const handlePaymentMethodClick = (method) => {
    setPaymentMethod(method);
    setShowPaymentModal(true);
  };

  const handlePaymentConfirmation = async (e) => {
    const orderData = {
      userId: user.id,
      productId: cart[0].id,
      userAddress: user.address, // Assuming address is part of user data
      paymentMethod,
    };
    try {
      e.preventDefault()
      const response = await postOrder(orderData.userId, orderData.productId, orderData.userAddress, orderData.paymentMethod);
      console.log(orderData);  
      setShowPaymentModal(false);
      navigate('/confirmpage', { state: { cart, totalPrice, paymentMethod } });
    } catch (error) {
      console.error('Error posting order:', error);
      console.log(orderData);
    }
  };

  return (
    <div className="order-page h-screen w-screen flex flex-col">
      <nav className="order-navbar flex justify-end items-end">
        <button onClick={() => navigate("/shopbycategory")} className="order-navbar-link">Home</button>
      </nav>
      <div className="order-container flex flex-grow">
        <div className="order-payment-section fixed shadow-lg p-6">
          <h2 className="order-section-title">Select Payment Method</h2>
          <form className="order-payment-form">
            <div className="order-form-group">
              <input type="radio" id="cod" name="payment" value="cash" onChange={() => handlePaymentMethodClick('cash')} />
              <label htmlFor="cod">Cash on Delivery</label>
            </div>
            <div className="order-form-group">
              <input type="radio" id="phonepe" name="payment" value="phonepe" onChange={() => handlePaymentMethodClick('phonepe')} />
              <label htmlFor="phonepe">PhonePe</label>
            </div>
            <div className="order-form-group">
              <input type="radio" id="gpay" name="payment" value="gpay" onChange={() => handlePaymentMethodClick('gpay')} />
              <label htmlFor="gpay">GPay</label>
            </div>
            <div className="order-form-group">
              <input type="radio" id="upi" name="payment" value="upi" onChange={() => handlePaymentMethodClick('upi')} />
              <label htmlFor="upi">UPI</label>
            </div>
            <div className="order-form-group">
              <input type="radio" id="netbanking" name="payment" value="netbanking" onChange={() => handlePaymentMethodClick('netbanking')} />
              <label htmlFor="netbanking">Net Banking</label>
            </div>
          </form>
        </div>
        <div className="order-products-section ml-auto overflow-y-auto p-6">
          <h2 className="order-section-title">Your Products</h2>
          <div className="order-products-grid">
            {cart.map((product) => (
              <div className="order-product-card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Size: {product.size}</p>
                <p>Color: {product.color}</p>
                <p>Shape: {product.shape}</p>
                <p>₹{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showPaymentModal && (
        <div className="order-modal-overlay">
          <div className="order-modal-content">
            <button className="order-close-button" onClick={() => setShowPaymentModal(false)}>X</button>
            {user && (
              <div className="order-user-details">
                <h3>User Details</h3>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Address: {user.address}</p>
              </div>
            )}
            {paymentMethod === 'cash' && (
              <>
                <h3>Cash on Delivery</h3>
                <p>Total amount to be paid on delivery: ₹{totalPrice}</p>
                <button className="order-confirm-button" onClick={handlePaymentConfirmation}>Confirm Payment</button>
              </>
            )}
            {paymentMethod === 'gpay' && (
              <>
                <h3>GPay Payment</h3>
                <img src={gpayQrCode} alt="GPay QR Code" className="order-qr-code" />
                <p>Pay ₹{totalPrice}</p>
                <button className="order-confirm-button" onClick={handlePaymentConfirmation}>Confirm Payment</button>
              </>
            )}
            {paymentMethod === 'phonepe' && (
              <>
                <h3>PhonePe Payment</h3>
                <img src={gpayQrCode} alt="PhonePe QR Code" className="order-qr-code" />
                <p>Pay ₹{totalPrice}</p>
                <button className="order-confirm-button" onClick={handlePaymentConfirmation}>Confirm Payment</button>
              </>
            )}
            {paymentMethod === 'upi' && (
              <>
                <h3>UPI Payment</h3>
                <input type="text" placeholder="Enter UPI ID" className="order-input" />
                <p>Pay ₹{totalPrice}</p>
                <button className="order-confirm-button" onClick={handlePaymentConfirmation}>Confirm Payment</button>
              </>
            )}
            {paymentMethod === 'netbanking' && (
              <>
                <h3>Net Banking</h3>
                <input type="text" placeholder="Enter Account Number" className="order-input" />
                <p>Pay ₹{totalPrice}</p>
                <button className="order-confirm-button" onClick={handlePaymentConfirmation}>Confirm Payment</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
