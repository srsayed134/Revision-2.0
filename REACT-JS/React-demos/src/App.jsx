// import React from 'react'

// function App() {
//   const myName = "HuXn Webdev";
//   const multiply = (a,b) => a * b;
//   const specialClass = "anything-i-want";

//   return (
//     <div>
//       <p>2 + 2 = {2+2}</p>
//       <h3>{myName}</h3>
//       <p>My friend List: {["Alex", "Jhon", "Waheed", "Jordan"]}</p>
//       <p>2 * 2 = {multiply(2, 2)}</p>
//       <p className={specialClass}>This is spechial class</p>
//     </div>
//   )
// }

// export default App

//Challenge4+++++++++++(Dynamic content)

// import React from 'react'
// import Greeting from './Components/Challenge4/Greeting'
// import ProductInfo from './Components/Challenge4/ProductInfo'

// function App() {
//   return (
//     <div>
//       <Greeting/>
//       <ProductInfo/>
//     </div>
  
//   )
// }

// export default App

//++++++++++++(Lists) +++++++++++
// import React from 'react'

// function App() {

//   let users = [{
//     name: "kim",
//     age: 10,
//     pl: "JS"
//   },{
//     name: "Nim",
//     age: 25,
//     pl: "Python",
//   },{
//     name: "Jim",
//     age: 23,
//     pl: "Golang"
//   }
//   ]
  
//   return (
//     <div>
//       {users.map((user) => (
//         <ul key={Math.random()}>
//           <li>{user.name}</li>
//           <li>{user.age}</li>
//           <li>{user.pl}</li>
//         </ul>
//       ))}
//       {/* by JS destructuring */}

//       {users.map(({name, age, pl}) => (
//         <ul key={Math.random()}>
//           <li>{name}</li>
//           <li>{age}</li>
//           <li>{pl}</li>
//         </ul>
//       ))}
//     </div>
//   )
// }

// export default App

//Challenge(5) +++++++++++++++

// import React from 'react'
// import UserList from './Components/Challenge5/UserList'
// import ProductList from './Components/Challenge5/ProductList'

// function App() {
//   return (
//     <div>
//       <UserList/>
//       <ProductList/>
//     </div>
//   )
// }

// export default App

//++++++++++++++(props)++++++++++

// import React from 'react'

// function App() {
//   return (
//     <div>
//       <User
//       img = "https://avatars.githubusercontent.com/u/183190177?v=4"
//       name = "Sayed"
//       age = {22}
//       isMaried = {false}
//       hobbies = {["Coding", "Problem Solving", "Managing"]}
//       />
//     </div>
//   )
// }


// function User(props) {
//   return (
//     <div>
//       <img src={props.img} alt={props.name} srcset="" />
//       <h1>Name: {props.name}</h1>
//       <p>Age: {props.age}</p>
//       <p>Is Maried: {props.isMaried}</p>
//       <p>Hobbies: {props.hobbies}</p>
//       <p>Hobbies: {props.hobbies[0]}</p>
//       <p>Hobbies: {props.hobbies[1]}</p>
//       <p>Hobbies: {props.hobbies[2]}</p>
//     </div>
//   )
// }


// export default App

//Ex:-2 (by destructuring)+++++++++++++

// import React from 'react'

// function App() {
//   return (
//     <div>
//       <User 
//       img = "https://avatars.githubusercontent.com/u/183190177?v=4"
//       name = "Sayed"
//       age = {22}
//       isMaried = {false}
//       hobbies = {["Coding", "Problem Solving", "Managing"]}
//       />
//     </div>
//   )
// }


// function User({img, name, age, isMaried, hobbies}) {
//   return (
//     <div>
//       <img src={img} alt={name} srcset="" />
//       <h1>Name: {name}</h1>
//       <p>Age: {age}</p>
//       <p>isMaried: {isMaried}</p>
//       <p>Hobbies: {hobbies}</p>
//       <p>Hobby 0: {hobbies[0]}</p>
//       <p>Hobby 1: {hobbies[1]}</p>
//       <p>Hobby 2: {hobbies[2]}</p>
//       <p>Hobby 3: {hobbies[3]}</p>
//     </div>
//   )
// }

// export default App

//Challenge 6 +++++++++++++++++

// Ex:- 1

// import React from 'react'
// import Person from './Components/Challenge6/Person'
// import Product from './Components/Challenge6/Product'
// import Car from './Components/Challenge6/Car'
// import Card from './Components/Challenge7/Card'

// function App() {
//   return (
//     <div>
//       <Person
//       name = "Forid"
//       age = {20}
//       />

//       <Product
//       name = "Book"
//       price = {200}
//       />

//       <Car
//       brand = "Toyota"
//       productionYear = {2013}
//       type = "Hybrid"
//       />

//       <Card>
//         <br />
//         <br />
//         <h1 >This is inline example</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quos ducimus ut voluptatem nobis laudantium?</p>
//       </Card>
//       <Card>
//         <br />
//         <br />
//         <h1 >This is inline example</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quos ducimus ut voluptatem nobis laudantium?</p>
//       </Card>

//     </div>
//   )
// }

// export default App

//+++++++++++++Conditional Rendering+++++++

// Ex:-1 

// import React from 'react'

// const ValidPassword = () => <h1>Valid Password</h1>;
// const InvalidPassword = () => <h1>Invalid Password</h1>

// const Password = ({isValid}) => {
//     // if (isValid) {
//     //   return <ValidPassword/>
//     // } 
//     //   return <InvalidPassword/>

//    return isValid ? <ValidPassword/> : <InvalidPassword/>

// };

// function App() {
//   return (
//     <div>
//          <Password
//          isValid = {true}
//          /> 
//     </div>
//   )
// }

// export default App

// Ex:2 

// import React from 'react'

// const ValidInput = () => <h1>Valid Pass</h1>
// const InvalidtInput = () => <h1>InValid Pass</h1>

// const Password = ({isValid}) => 
//   isValid ? <ValidInput/> : <InvalidtInput/>

// function App() {


//   return (
//     <div>
//         <Password isValid={true}/>
//     </div>
//   )
// }

// export default App

//Ex: -3 

// import React from 'react'

// const Cart = () => {
//   const items = ["Wireless Earbuds", "Power Bank", "New SSD", "Hoddie"];

//   return <div>
//     <h1>Cart </h1>
//     {items.length > 0 && <h2>You have {items.length} items in your Cart</h2>}

//     <ul>
//         <h1>Products</h1>
//         {items.map((item) => (
//           <li key={Math.random()}>{item}</li> 
//         ))}
//     </ul>
//   </div>

// }

// function App() {
//   return <Cart/>
// }

// export default App

//Challenge 8 ++++++++++++++++++

// import React from 'react'
// import Weather from './Components/Challenge8/Weather'
// import UserStatus from './Components/Challenge8/UserStatus'
// import Greeting from './Components/Challenge8/Greeting'

// function App() {
//   return (
//     <div>
//       <Weather/>
//       <UserStatus 
//       isLoggedIn = {true}
//       isAdmin = {true}
//       />
//       <Greeting 
      
//       timeOfDay = "morning"

//       />
//     </div>
//   )
// }

// export default App

//++++++++++++++ Styling ++++++++++++

// Ex:- 1 (inline css)
 
// const App = () => {
//     return (
//         <section>
//             <h1 style={{
//             color: "red",
//             backgroundColor: "Green",
//             padding: "2rem"
//             }} >Inline section</h1>
//         </section>
//     )
// }
// export default App;

// Ex:- 2 (seperate object)

// const App = () => {

//     const styles = {
//         color: "red",
//         backgroundColor: "green",
//         padding: "2rem",
//     }
    
//     return (<section>
//         <h1 style={styles}> Lorem, ipsum dolor. </h1>
//     </section>)
// }

// export default App;

// Ex:- 3 (seperate file)

// import "./index.css/"

// const App = () => {
//     return (
//         <section>
//             <h1>Lorem, ipsum dolor.</h1>
//         </section>
//     )
// }

// export default App;

//+++++++++++++++++ Ading icon +++++++++

// import "./index.css/"
// import { FaCartArrowDown } from "react-icons/fa";
// import { FaBuilding } from "react-icons/fa";



// const App = () => {
//     return (
//         <section>
//             <h2>Lorem, ipsum dolor.</h2>
//             <FaCartArrowDown /> <br />
//             <FaBuilding />
//         </section>
//     )
// }

// export default App;

//Challenge ++++++++++++++++++++++

// import React from 'react'
// import StyleCard from './Components/Challenge9/StyleCard'
// import ProfileCard from './Components/Challenge9/ProfileCard'
// import IconComponent from './Components/Challenge9/IconComponent'

// function App() {
//   return (
//     <div>
//         <StyleCard/>
//         <ProfileCard/>
//         <IconComponent />
//     </div>
//   )
// }

// export default App

//+++++++++++++++++++++ Event +++++++++++++

//Ex:- 1

// const Button = () => {
//     return (
//         <button onClick={() => console.log(Math.round(Math.random() * 100 ))}>
//             Click
//         </button>
//     )
// }

// const App = () => {
//     return (
//         <section>
//             <Button/>
//         </section>
//     )
// }

// export default App

// Ex:- 2

// const Button = () => {

//     const handleClick = () => console.log(Math.floor(Math.random() * 100))

//     return(
//          <button onClick={handleClick}>Click</button>
//     )
// }

// const App = () => {
//     return (
//       <Button/>
//     )
// }
// export default App

//Ex:- 3

// const Copy = () => {

//     const chackedCopy = () => console.log("Do not copy")

//     return (
//          <p onMouseMove={chackedCopy}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur deserunt excepturi molestias ipsam numquam tempore ipsa nulla consectetur dignissimos doloremque.</p>
//     )
// }

// import React from 'react'

// function App() {
//   return (
//     <div>
//         <Copy/>
//     </div>
//   )
// }

// export default App

//+++++++++++++++State Hooks +++++++++++

