//@ts-check

import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./CartWidget.css"


const CartWidget = ({ cant }) => {
    return (
        <div>
        <ShoppingCartIcon id= 'cartIcon'/>
        <h5 id="cant">{cant}</h5>
       </div>  
    )
  }
  
export default CartWidget