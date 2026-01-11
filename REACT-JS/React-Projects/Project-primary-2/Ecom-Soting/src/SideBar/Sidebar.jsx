import React from 'react'
import "./Sidebar.css"
import Category from './Category/Category'
import Colors from './Colors/Colors'
import Price from './Prices/Price'

function Sidebar() {
  return (
    <section className="sidebar">
        <div className='logo-container'>
            <h1>🛒</h1>
        </div>
        <Category/>
        <Colors/>
        <Price/>
    </section>
  )
}

export default Sidebar