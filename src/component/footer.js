import React, { useEffect, useState } from 'react'
import "../css/Footer.css"
import { Link } from 'react-router-dom'


const Footer = () => {
  const [rerender,setRerender] = useState(false)

const redirect = () => {
setRerender(!rerender)
}
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [rerender])
  return (
    <div className='footer-container'>
        <div className='grid1'>
        <h4> Minimart</h4>
        <p>Lorem ipsium dolor sit amet consectetur, adipisicing elit. Quaerat nulla repellant quo eaque alias corporis sunt, facilis nesciunnt rem fugit!</p>
        </div>

        <div className='grid2'> 
        <h4> Top Categories</h4>
        <p>Mobile Phones</p>
        <p>Modern Sofa</p>
        <p>Arm Chair</p>
        <p>Smart Watches</p>
        </div>

        <div className='grid3' >
        <h4> Useful Link</h4>
        <p onClick={redirect} >  <Link to="/shop"> Shop </Link>  </p>
        <p onClick={redirect} > <Link to="/cart"> Cart </Link>  </p>
        <p onClick={redirect} > <Link to="/login"> Login </Link>  </p>
        <p> Privacy Policy </p>
        </div>

        <div className='grid4' >
    <h4>Contact</h4>
    <p> 5, Freetown Road, Sydney Australia</p>
    <p> +2348074901641</p>
    <p> Adebusolatoyin@gmail.com</p>
        </div>
       
    </div>
  )
}

export default Footer