import React from 'react'

function ProductInfo() {
    // let name = "Laptop";
    // let price = "$120";
    // let avail = "In stock";
    let productObj = {
        name: "Mobile",
        price: "$1200",
        avail: "In stock",
    }
  return (
    <div>
        <p>The name of this product in {productObj.name} and price is {productObj.price} which is available in {productObj.avail}</p>
    </div>
  )
}

export default ProductInfo