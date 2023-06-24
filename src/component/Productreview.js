import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "../css/Productreview.css"
import productss from '../assets/data/products'
import { useDispatch } from 'react-redux'
import { Toaster, toast } from 'react-hot-toast'
import { updateCart, updateCartAmount } from '../slice/filterSlice'
import addLogo from "../assets/images/add.png"
import { motion } from 'framer-motion'

function Productreview() {

  const products = useLocation()
  const navigate = useNavigate()

  const cartProduct = products.state.productdata



  const dispatch = useDispatch()

  const alert = (items) => {
    dispatch(updateCart(cartProduct))
    toast.success('Added to cart!')
    dispatch(updateCartAmount(1))
  }

  const UpdateCartItem = (cartProduct) => {
    dispatch(updateCart(cartProduct))
    toast.success('Added to cart!')
    dispatch(updateCartAmount(1))
  }

  // PRODUCT SUGGESTIONS
  const data = productss.filter(items => items.id !== products.state.productdata.id && items.category === products.state.productdata.category)

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
          onClick={() => UpdateCartItem(items)}
          style={{ width: "50px" }}
          src={addLogo}
          alt='addLogo'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      </div>
    </div>
  ))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [products])

  return (
    <div>
      <div><Toaster position="top-right"
        reverseOrder={false} /></div>
      <div className='product-view-banner'>
        <h3> {products.state.productdata.productName}</h3>
      </div>
      <div className='Productreview'>
        <div className='grid1'>
          <img src={products.state.productdata.imgUrl} alt='product' />
        </div>

        <div className='grid2' >
          <h3> {products.state.productdata.productName}</h3>
          <p className='p1' > [ <span> {products.state.productdata.reviews[0].rating} </span> ratings ]</p>
          <div className='price' >
            <h4> ${products.state.productdata.price} </h4>
            <p className='p2' > Category: {products.state.productdata.category} </p>
          </div>
          <p className='p3'> {products.state.productdata.shortDesc}</p>

          <motion.button
            onClick={alert}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            Add to cart
          </motion.button>
        </div>
      </div>

      <div>
        < div style={{ display: 'flex', alignItems: "center", marginLeft: "1em" }}  >
          <h4> Description </h4>
          <h5 style={{ marginLeft: "1em", color: "grey" }} > Reviews (0)</h5>
        </div>
        <div style={{ margin: "1em", color: "grey" }} >
          {products.state.productdata.description}
        </div>
      </div>
      <div style={{ margin: "1em" }} >
        <h4> You may also like</h4>
        <div className='newProduct' >
          {newProducts}
        </div>

      </div>

    </div>

  )
}

export default Productreview