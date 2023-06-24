import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Login from "./Login";
import Signup from "./Signup";
import ErrorPage from "./ErrorPage";
import Productreview from "./Productreview";
import Cart from "./Cart";
import Checkout from "./Checkout";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/productreview" element={<Productreview />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default Router;
