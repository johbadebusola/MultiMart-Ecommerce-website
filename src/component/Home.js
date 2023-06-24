import React from 'react'
import "../css/Home.css"
import heroImage from "../assets/images/hero-img.png"
import serviceData from "../assets/data/serviceData"
import { useNavigate } from 'react-router-dom'
import productss from '../assets/data/products'
import { useDispatch } from 'react-redux'
import { Toaster, toast } from 'react-hot-toast'
import { updateCart, updateCartAmount } from '../slice/filterSlice'
import addLogo from "../assets/images/add.png"
import { motion } from "framer-motion"
import { database } from '../firebase'

const Home = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const UpdateCartItem = (cartProduct) => {
    dispatch(updateCart(cartProduct))
    toast.success('Added to cart!')
  }

  const shop = () => {
    navigate("/shop")
  }

  const service = serviceData.map((items) =>
  (<div className='service-container' key={items.title} >
    <div style={{ backgroundColor: items.bg }} >


      <img src={items.icon} alt='icon' />
      <div>
        <h4> {items.title}</h4>
        <p> {items.subtitle} </p>
      </div>

    </div>

  </div>)
  )

  // TRENDING PRODUCT
  const data = productss.filter(items => items.category === "chair")

  const newProducts = data.map((items) => (
    <div key={items.id} className='products' >

      <div className='hoverable-img' >

        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/productreview", { state: { productdata: items } })}
          src={items.imgUrl}
          alt="img"
        />

      </div>
      <p className='p1' > Click image to view</p>
      <h4>{items.productName} </h4>
      <p className='p2' >{items.category}</p>
      <div className='price-grid' >
        <h3> ${items.price}</h3>
        <motion.img
          onClick={() => {
            UpdateCartItem(items)
            dispatch(updateCartAmount(1))
          }}
          style={{ width: "50px" }}
          src={addLogo}
          alt='addLogo'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />

      </div>
    </div>
  ))

  // Best sales

  const bestSalesData = productss.filter(items => items.category === "sofa")

  const bestSales = bestSalesData.map((items) => (
    <div key={items.id} className='products' >

      <div className='hoverable-img' >
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/productreview", { state: { productdata: items } })}
          src={items.imgUrl}
          alt="img"
        />
      </div>
      <p className='p1' > Click image to view</p>
      <h4>{items.productName} </h4>
      <p className='p2' >{items.category}</p>
      <div className='price-grid' >
        <h3> ${items.price}</h3>
        <motion.img
          onClick={() => {
            UpdateCartItem(items)
            dispatch(updateCartAmount(1))
          }}
          style={{ width: "50px" }}
          src={addLogo}
          alt='addLogo'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />

      </div>
    </div>
  ))



  return (
    <div>
      <div><Toaster position="top-right"
        reverseOrder={false} /></div>


      <div className='container' >
        <div className='box1' >
          <p className='p1' > Trending product in 2023</p>
          <motion.h3
            initial={{ marginLeft: "-4em ", opacity: "0" }}
            whileInView={{ marginLeft: "0em", opacity: "1" }}
            transition={{ delay: 0.2 }}>
            Make Your Interior More Mininimalistic & Modern
          </motion.h3>
          <p className='p2' >
            Lorem ipsium dolor sit amet consectetur, adipisicing elit. Quaerat nulla repellant quo eaque alias corporis sunt, facilis nesciunnt rem fugit!
          </p>
          <motion.button
            onClick={shop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ marginTop: "4em ", opacity: "0" }}
            whileInView={{ marginTop: "0em", opacity: "1" }}
            transition={{ delay: 0.2 }}
          >

            SHOP NOW
          </motion.button>
        </div>

        <div className='hero-img' >
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            src={heroImage}
            alt='Hero img'
          />
        </div>
      </div>
      {/* SERVICE */}
      <div className='service-grid' >
        {service}
      </div>

      {/* TRENDING PRODUCT */}
      <div className='trending-product' >
        <h4> Trending Products </h4>
        <div className='product-grid'>
          {newProducts}
        </div>
      </div>
      {/* BEST SALES */}
      <div className='trending-product' >
        <h4> Best Sales </h4>
        <div className='product-grid'>
          {bestSales}
        </div>
      </div>

      <div className='trending-product' >
        <h4> New Arrivals </h4>
        <div className='product-grid'>


          <div className='products' >

            <div className='hoverable-img' >
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate("/productreview", { state: { productdata: productss[20] } })}
                src={productss[20].imgUrl}
                alt="img"
              />
            </div>
            <p className='p1' > Click image to view</p>
            <h4>{productss[20].productName} </h4>
            <p className='p2' >{productss[20].category}</p>
            <div className='price-grid' >
              <h3> ${productss[20].price}</h3>
              <motion.img
                onClick={() => {
                  UpdateCartItem(productss[20])
                  dispatch(updateCartAmount(1))
                }}
                style={{ width: "50px" }}
                src={addLogo}
                alt='addLogo'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            </div>

          </div>



          <div className='products' >
            <div className='hoverable-img' >
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate("/productreview", { state: { productdata: productss[12] } })}
                src={productss[12].imgUrl}
                alt="img"
              />
            </div>
            <p className='p1' > Click image to view</p>
            <h4>{productss[12].productName} </h4>
            <p className='p2' >{productss[12].category}</p>
            <div className='price-grid' >
              <h3> ${productss[12].price}</h3>
              <motion.img
                onClick={() => {
                  UpdateCartItem(productss[12])
                  dispatch(updateCartAmount(1))
                }
                }
                style={{ width: "50px" }}
                src={addLogo}
                alt='addLogo'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            </div>
          </div>

          <div className='products' >
            <div className='hoverable-img' >
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate("/productreview", { state: { productdata: productss[23] } })}
                src={productss[23].imgUrl}
                alt="img"
              />
            </div>
            <p className='p1' > Click image to view</p>
            <h4>{productss[23].productName} </h4>
            <p className='p2' >{productss[23].category}</p>
            <div className='price-grid' >
              <h3> ${productss[23].price}</h3>
              <motion.img
                onClick={() => {
                  dispatch(updateCartAmount(1))
                  UpdateCartItem(productss[23])
                }}
                style={{ width: "50px" }}
                src={addLogo}
                alt='addLogo'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            </div>
          </div>


          <div className='products' >
            <div className='hoverable-img' >
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate("/productreview", { state: { productdata: productss[17] } })}
                src={productss[17].imgUrl}
                alt="img"
              />
            </div>
            <p className='p1' > Click image to view</p>
            <h4>{productss[17].productName} </h4>
            <p className='p2' >{productss[17].category}</p>
            <div className='price-grid' >
              <h3> ${productss[17].price}</h3>
              <motion.img
                onClick={() => {
                  dispatch(updateCartAmount(1))
                  UpdateCartItem(productss[17])
                }}
                style={{ width: "50px" }}
                src={addLogo}
                alt='addLogo'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            </div>
          </div>


        </div>
      </div>

    </div>

  )
}

export default Home