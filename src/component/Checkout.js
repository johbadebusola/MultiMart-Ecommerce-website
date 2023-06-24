import React from "react";
import "../css/Checkout.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Checkout = () => {
  const checkoutInfo = useSelector((state) => state.filter);

  return (
    <>
      <div className="checkout">
        <div className="box1">
          <h4>Billing information</h4>
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <input type="tel" placeholder="Phone number" />
          <input type="text" placeholder="Street address" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Postal code" />
          <input type="text" placeholder="Country" />
        </div>

        <div className="box2">
          <div>
            <h5> Total Qty</h5>
            <p>{checkoutInfo.totalItem}</p>
          </div>
          <div>
            <h5> Sub total</h5>
            <p> ${checkoutInfo.subtotal}</p>
          </div>
          <div>
            <h5> Shipping</h5>
            <p> $0</p>
          </div>
          <hr />
          <div>
            <h2> Total Cost:</h2>
            <h2> ${checkoutInfo.subtotal}</h2>
          </div>
          <div className="checkout-btn">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Place an order
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
