import React, { useState } from 'react'
import "./index.css"
import Nav from './Navigation/Nav'
import Prodcuts from './Products/Prodcuts'
import Recommended from './Recommended/Recommended'
import Sidebar from './SideBar/Sidebar'

//Databse
import products from "./db/Data"


function App() {

  
  //Input filter
  
  const [query,setQuery] = useState("");
  
  const handleinputChange = event => {
    setQuery(event.target.value);
  }
  
  const filtereditems = products.filter((product) => {
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  })
  
  //Radio filter
  const [selectedCategory, setSelectedCategory] = useState(nul);

  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }

  //Buttons filter
  const handleClick = event => {
    setSelectedCategory(event.target.value)
  }

  return (
    <div>
      <Sidebar/>
      <Nav/>
      <Recommended/> 
      <Prodcuts/>
    </div>
  )
}

export default App