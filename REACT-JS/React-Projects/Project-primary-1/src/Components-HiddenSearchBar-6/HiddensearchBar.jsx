// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import "./Style.css";

// function HiddensearchBar() {

//   const [showInput, setShowInput] = useState(false);
//   const [bgColor, setBgColor] = useState("white")

//   const handleClick = (e) => {
//     setBgColor("#1a1a1a");
//     if (e.target.className === "container"){
//       setShowInput(false);
//       setBgColor("#fff")
//     }
//   }

//   return (
//     <section
//       className="container"
//       style={{ backgroundColor: bgColor }}
//       onClick={handleClick}
//     >
//       {showInput ? (
//         <input type="text" placeholder="Search..." />
//       ) : (
//         <FaSearch onClick={() => setShowInput(true)} />
//       )}
//     </section>
//   );
// }

// export default HiddensearchBar;

//Prac:- 1

// import React, { useState } from 'react'
// import { FaSearch } from "react-icons/fa";
// import "./Style.css"


// function HiddensearchBar() {
//   const [bgColor, setBgcolor] = useState("white")
//   const [showTime, setShowTime] = useState(false)

//   const handleClick = (e) => {
//     setBgcolor("#1b1b1b");
//     if(e.target.className === "container"){
//       setShowTime(false);
//       setBgcolor("white")
//     }
//   }

//   return (
//     <section 
//     style={{backgroundColor: bgColor}}
//     className='container'
//     onClick={handleClick}
//     >
//         {showTime ? (
//           <input type="text" placeholder='Search....'/>
//         ) : (
//           <FaSearch onClick = {() => setShowTime(true)}/>
//         )}
//     </section>
//   )
// }

// export default HiddensearchBar

import React, { useState } from 'react'
import "./Style.css"
import {FaSearch} from "react-icons/fa";


function HiddensearchBar() {

  const [bg, setBg] = useState("white");
  const [show, setShow] = useState(false);

  const handleClick = e => {
    setBg("#1b1b1b");
    if(e.target.className === "container"){
      setShow(false)
      setBg("white");
    }
  }

  return (
    <section 
    className='container'
    style={{backgroundColor: bg}}
    onClick={handleClick}
    >
      {show ? (
        <input type="text" placeholder='Search...'/>
      ) : (
        <FaSearch onClick={() => setShow(true)}/>
      )}
    </section>
  )
}

export default HiddensearchBar