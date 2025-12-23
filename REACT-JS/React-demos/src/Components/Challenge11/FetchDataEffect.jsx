import React, { useEffect, useState } from 'react'

function FetchDataEffect() {

    const[data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
           const data = await fetch("https://jsonplaceholder.typicode.com/posts");
           const readable = await data.json();
           if(readable && readable.length) setData(readable);

        }
        getData()
    }, [])

  return (
    <div>
         <ul>
            {data.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
         </ul>
    </div>
  )
}

export default FetchDataEffect