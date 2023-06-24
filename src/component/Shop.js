import React, { useEffect, useState } from "react";
import "../css/Shop.css";
import products from "../assets/data/products";
import { useNavigate } from "react-router-dom";
import addLogo from "../assets/images/add.png";
import { updateCart, updateCartAmount } from "../slice/filterSlice";
import { Toaster, toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

const Shop = () => {
  const [data, setData] = useState(products);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const UpdateCartItem = (cartProduct) => {
    dispatch(updateCart(cartProduct));
    toast.success("Added to cart!");
    console.log("object");
  };

  // Looping through the Product data
  const product = data.map((items) => (
    <div key={items.id} className="products">
      <div className="hoverable-img">
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() =>
            navigate("/productreview", { state: { productdata: items } })
          }
          src={items.imgUrl}
          alt="img"
        />
      </div>
      <p className="p1"> Click image to view</p>
      <h4>{items.productName} </h4>
      <p className="p2">{items.category}</p>
      <div className="price-grid">
        <h3> ${items.price}</h3>
        <motion.img
          onClick={() => {
            UpdateCartItem(items);
            dispatch(updateCartAmount(1));
          }}
          style={{ width: "50px" }}
          src={addLogo}
          alt="addLogo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      </div>
    </div>
  ));

  // FILTER BY CATEGORY
  const FilterProducts = (event) => {
    const pro = products.filter(
      (items) => items.category === event.target.value
    );
    setData(pro);
    if (event.target.value === "Filter By Category") {
      setData(products);
    }
  };

  // Sorting products

  const sortProducts = (e) => {
    if (e.target.value === "Ascending") {
      const sortedProduct = products.sort(function (a, b) {
        if (a.productName.toUpperCase() < b.productName.toUpperCase()) {
          return -1;
        }
        if (a.productName.toUpperCase() > b.productName.toUpperCase()) {
          return 1;
        }
        return 0;
      });

      setData(sortedProduct);
    }

    if (e.target.value === "Descending") {
      const sortedProduct = products.sort(function (a, b) {
        if (b.productName.toUpperCase() < a.productName.toUpperCase()) {
          return -1;
        }
        if (b.productName.toUpperCase() > a.productName.toUpperCase()) {
          return 1;
        }
        return 0;
      });
      setData(sortedProduct);
    }
  };

  // useEffect(() => {
  //   console.log("changed");
  // }, [data]);

  // SEARCHING BY NAME

  const search = (event) => {
    const newSearch = products.filter((items) =>
      items.productName.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setData(newSearch);
  };
  return (
    <div>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>

      <div className="banner">
        <h4>Products</h4>
      </div>

      <div className="filter-search">
        <div>
          <select
            className="filter-select"
            onChange={FilterProducts}
            name="Filter"
          >
            <option> Filter By Category </option>

            <option value="sofa"> Sofa </option>
            <option value="chair"> Chair </option>
            <option value="mobile"> Mobile </option>
            <option value="watch"> Watch </option>
            <option value="wireless"> Wireless </option>
          </select>
        </div>

        <div className="filter-search-grid2">
          <select className="sort" name="Sort" onChange={sortProducts}>
            <option> Sort</option>
            <option value="Ascending"> Ascending </option>
            <option value="Descending"> Descending</option>
          </select>
        </div>

        <input
          onChange={search}
          type="text"
          placeholder="Search by Category...."
        />
      </div>

      <div>
        {data.length === 0 ? (
          <h1 className="no-products-found"> No products are found!</h1>
        ) : (
          <div className="product-grid">{product} </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
