import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../css/Cart.css";
import { useNavigate } from "react-router-dom";
import {
  subTotal,
  deleteItems,
  deductOnDelete,
  totalItem,
} from "../slice/filterSlice";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.filter);

  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (user) {
    console.log(true);
  } else {
    console.log(false);
  }

  console.log(user);
  function addTotal() {
    let sum = 0;
    for (let i = 0; i < data.cartItems.length; i++) {
      sum += data.cartItems[i].price * data.cartItems[i].cartCount;
    }
    dispatch(subTotal(sum));
  }
  addTotal();

  function addTotalItems() {
    let sum = 0;
    for (let i = 0; i < data.cartItems.length; i++) {
      sum += data.cartItems[i].cartCount;
    }
    dispatch(totalItem(sum));
  }
  addTotalItems();

  const [cartLength] = useState(data.cartItems.length);
  const navigate = useNavigate();

  const checkOut = () => {
    if (user) {
      navigate("/checkout");
    } else {
      console.log("login to checkout");
      toast.error("login to checkout");
      setTimeout(function () {
        navigate("/login");
      }, 2000);
    }
  };

  return (
    <div className="cart-grid">
      {cartLength === 0 ? (
        <div className="cartError">
          {" "}
          <h2> No product added to cart </h2>{" "}
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th> Image</th>
              <th> Product </th>
              <th> price</th>
              <th> Qty</th>
              <th> Delete</th>
            </tr>
          </thead>

          <tbody>
            {data.cartItems.map((items) => (
              <tr key={items.id}>
                <td>
                  {" "}
                  <img src={items.imgUrl} alt="imgg" />{" "}
                </td>
                <td>{items.productName}</td>
                <td> ${items.price}</td>
                <td>{items.cartCount}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(deleteItems(items));
                      dispatch(deductOnDelete(items.cartAmount));
                      console.log(items.cartAmount);
                    }}
                  >
                    {" "}
                    Del
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {cartLength === 0 ? (
        " "
      ) : (
        <div className="subtotal">
          <div>
            <p> Subtotal</p>
            <h2> ${data.subtotal}</h2>
          </div>

          <p> Taxes and shipping will calculate in checkout</p>

          <div className="button">
            <motion.button
              onClick={checkOut}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Checkout
            </motion.button>

            <motion.button
              onClick={() => navigate("/shop")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Continue Shopping
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

// "site":"minimart-cca2a",
