import React, { useEffect } from 'react'

function BasicEffect() {

    useEffect(()=> {
        console.log("This is example")
    }, [])

  return (
    <div>BasicEffect</div>
  )
}

export default BasicEffect