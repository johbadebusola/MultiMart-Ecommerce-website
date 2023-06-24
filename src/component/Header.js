import React, { useEffect, useState } from "react";
import logo from "../assets/images/eco-logo.png";
import { Link } from "react-router-dom";
import avatar from "../assets/images/user-icon.png";
import cart from "../assets/images/carts.png";
import { useSelector } from "react-redux";
import { app } from "../firebase";
import { getAuth } from "firebase/auth";

const Header = () => {
  const [toggle, setToggle] = useState(false);
const auth = getAuth(app)
  const CartAmount = useSelector((state) => state.filter.cartAmount);
const [isLoggedin, setIsloggedIn] = useState(false)
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
        if(user){
            setIsloggedIn(true)
        }
        else{
            setIsloggedIn(false)
        }
    })
  })
  return (
    <div className="header">
      <div className="title">
        <img src={logo} alt="Logo" />
        <h4> MiniMart</h4>
      </div>

      <div className="box1">
        <div className="cart">
          <div className="items-count">
            <p> {CartAmount} </p>
          </div>

          <img src={cart} alt="cart" />
        </div>

        {
            isLoggedin ?    <div className="avatar">
          <img src={avatar} alt="Logo" />
        </div> : " "
        }

      

        <div className="hamburger" onClick={toggleMenu}>
          <div className={` menu1 ${toggle ? " menu1-toggle" : ""}`}> </div>
          <div className={` menu2 ${toggle ? " menu2-toggle" : ""}`}> </div>
          <div className={` menu3 ${toggle ? " menu3-toggle" : ""}`}> </div>
        </div>
      </div>

      <nav className={toggle ? " " : "active"}>
        <ul onClick={toggleMenu}>
          <li>
            {" "}
            <Link to="/"> Home </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/shop"> Shop </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/login"> Login </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/signup"> Signup </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/cart">Cart </Link>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
