import React, { useState } from 'react'
import "./index.css"
import Nav from './Navigation/Nav'
import Prodcuts from './Products/Prodcuts'
import Recommended from './Recommended/Recommended'
import Sidebar from './SideBar/Sidebar'

//Databse
import products from "./db/Data"
import Category from './SideBar/Category/Category'
import Card from './Comp/Card'


function App() {

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState("")
  const handleInoutChange = event => {
    setQuery(event.target.value)
  }
  const filteredItems = products.filter((product) => {
    return product.title
      .toLowerCase()
      .indexOf(query.toLowerCase()) !== -1
  })
  const handleChange = event => {
    setSelectedCategory(event.target.value);
  }
  const handleClick = event => {
    setSelectedCategory(event.target.value)
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products

    //Filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }
    //Selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          newPrice === selected ||
          company === selected ||
          title === selected);
    }
    return filteredProducts.map(({img, title, star, reviews, newPrice, prevPrice}) => (
      <Card
      key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      newPrice={newPrice}
      prevPrice={prevPrice}/>
    ))
  }

  const result = filteredData(products, selectedCategory, query)

  return (
    <div>
      <Sidebar handleChange={handleChange}/>
      <Nav />
      <Recommended />
      <Prodcuts />
    </div>
  )
}

export default App