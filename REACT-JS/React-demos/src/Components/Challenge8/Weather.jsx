import React from 'react'

let temp = 26;

const Weather = () => {

    if (temp <= 15) {
        return <h1>It's cold outside</h1>
    }else if(temp >= 15 && temp <= 25){
        return <h1>It is nice outside</h1>
    }else if(25 <= temp){
        return <h1>It is hot outside</h1>
    }
}

export default Weather