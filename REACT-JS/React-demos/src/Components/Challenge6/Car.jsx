import React from 'react'

function Car({brand, productionYear, type}) {
  return (
    <div>
      <h1>Car brand: {brand}</h1>
      <h1>Car release Year: {productionYear}</h1>
      <h1>Car Energy Type: {type}</h1>
    </div>
  )
}

export default Car