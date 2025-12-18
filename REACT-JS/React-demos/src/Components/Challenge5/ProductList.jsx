import React from 'react'

function ProductList() {
    let products = [
        {id: 1, name: "Smartphone", price: "$699"},
        {id: 2, name: "Laptop", price: "$1200"},
        {id: 3, name: "Headphon", price: "$199"},
    ]
  return (
    <div>
        {products.map(({id, name, price}) => (
         <ul key={Math.random()}>
            <li>{id}</li>
            <li>{name}</li>
            <li>{price}</li>
         </ul>
        ))}
    </div>
  )
}

export default ProductList