import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import "./Products.css"

function Prodcuts({result}) {
  return (
    <section className='card-container'>
      {result}
      
    </section>
  )
}

export default Prodcuts