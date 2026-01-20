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
// Ex: -1 (number)

// import React, { useState } from 'react'

// function App() {
//     const [count, setCount] = useState(0);
//     const [word, setWord] = useState("Huxn");

//     const increment = () => setCount(count + 1);
//     const decrement = () => setCount(count - 1)

//   return (
//     <div>
//         <h1>{word}</h1>
//         <h1>{count}</h1>
//         <button onClick={increment}>+</button>
//         <button onClick={decrement}>-</button>
//     </div>
//   )
// }

// export default App

//Ex:- 2 (Array)

// import React, { useState } from 'react'

// function App() {

//   const [friend, setFriend] = useState(["Alex", "Jhon", "Niom", "Mahin"])
//   const addOneFrien = () => setFriend([...friend, "Huxn"])
//   const removeFriend = () => setFriend(friend.filter(f => f !== "Jhon"))
//   const updateOneFriend = () => setFriend(friend.map(f => f === "Alex" ? "Alex Smith" : f))

//   return (
//     <div>
//         {friend.map((f) => (
//             <li key={f}>{f}</li>
//         ))}
//         <button onClick={addOneFrien}>Add new friend</button>
//         <button onClick={removeFriend}>Remove new friend</button>
//         <button onClick={updateOneFriend}>Update new friend</button>
//     </div>
//   )
// }

// export default App

//Practice+++++++++++++++++++++

// import React, { useState } from 'react'

// function App() {

//   const [friends, setFriends] = useState(["Alex", "Jhon", "Dimon", "Simon"])

//   //Add newFriend
//   let newFriend = "Nikon"
//   const addFriend = () => {
//     return setFriends([...friends, newFriend])
//   }

//   //Remove slectFriend
//   let selectFriend = "Alex"
//   const removeFriend = () => {
//     return setFriends(friends.filter(f => f !== selectFriend) )
//   }

//   //Update friend
//   let updateFriend = "Jon"
//   const updateFriends = () => {
//     return setFriends(friends.map(f => f === "Jhon" ? updateFriend : f))
//   }

//   return (
//     <div>
//       <ul>{friends.map((f) => {return <li>{f}</li>})}</ul>
//       <button onClick={addFriend}>Add New Friend</button>
//       <button onClick={removeFriend}>Ramove one friend</button>
//       <button onClick={updateFriends}>Update a friend</button>

//     </div>
//   )
// }

// export default App

// Ex:- 3 (object)

// import React from 'react'
// import { useState } from 'react'

// function App() {

//     const [movie, setMovie] = useState({
//         title: "Equalizer 3",
//         rating: 7,
//         year : 2000
//     })

//     // const handleClick = () => {
//     //     const copyMovies = {
//     //         ...movie,
//     //         rating: 5,
//     //         title: "PK",
//     //         year: 2005,
//     //     }
//     //     setMovie(copyMovies);
//     // }

//     const handleClick = () => {
//         setMovie({...movie, rating: 5, title: "PK", year: 2009});
//     }

//   return (
//     <div>
//         <h1>{movie.title}</h1>
//         <h1>{movie.rating}</h1>
//         <h1>{movie.year}</h1>

//         <button onClick={handleClick}>Change Rating</button>
//     </div>
//   )
// }

// export default App

//Practice ++++++++++++++++

// import React, { useState } from 'react'

// function App() {
//   //Properties
//   const [profile, setProfile] = useState([
//     {id: 1, name: "Michel", profession: "Programmer"},
//     {id: 2, name: "Christopher", profession: "Director"},
//     {id: 3, name: "Rajamouli", profession: "Producer"},
//   ]);

//   const [singleProfile, setsingleProfile] = useState(
//     {name: "Sayed", age: 24, profession: "Unemployed"}
//   )

//   //Update id 1 (full object)
//   let updateFullName = {id: 1, name: "Sir michel", profession: "Programmer"};

//   const updateProfile = () => {
//     return setProfile(profile.map(p => p.id === 1 ? updateFullName : p))
//   }

//   //Update id 2 (only name)
//   let updateName = {name: "Christopher nolan"};

//   const updateOnlyName = () => {
//     return setProfile(profile.map(p => p.id === 2 ? {...p, ...updateName} : p))
//   }

//   //Update object

//   let updateFullObject = {name: "Sayedur Rahman", age: 25, profession: "Programmer"}

//   const updateObject = () => {
//     return setsingleProfile({...singleProfile, ...updateFullObject})
//   }

//   return (
//     <div>
//       <ul>{profile.map(p => <li key={p.id}>{p.name}</li>)}</ul>
//       <ul>{profile.map(p => <li key={p.id}>{p.profession}</li>)}</ul>

//       <button onClick={updateProfile}>Update full profile</button>
//       <button onClick={updateOnlyName}>Update one name</button>

//       <h1>{singleProfile.name}</h1>
//       <h1>{singleProfile.age}</h1>
//       <h1>{singleProfile.profession}</h1>

//       <button onClick={updateObject}>Update info</button>
//     </div>
//   )
// }

// export default App

//Ex:- 4 (Object inside Array)

// import React from 'react'
// import { useState } from 'react'

// function App() {

//     const [movies, setMovies] = useState([
//         {id: 1, title: "PK", rating: 8.5},
//         {id: 2, title: "RRR", rating: 7.5},
//     ]);

//     const handleClick = () => {
//            setMovies(
//             movies.map(m => m.id === 1 ? {...m, title: "3 idiots", rating: 8.9} : m))
//     }

//   return (
//     <div>
//         {movies.map(m => <li key={m.id}>{m.title}</li>)}
//         {movies.map(m => <li key={m.id}>{m.rating}</li>)}

//         <button onClick={handleClick}>Change Name</button>
//     </div>
//   )
// }

// export default App

//++++++++++++++Share useState+++ (code1)

// import React, { useState } from 'react'
// import Comp1 from './Components/Code1(ShareState)/Comp1'
// import Comp2 from './Components/Code1(ShareState)/Comp2'

// function App() {

//   const[count, setCount] = useState(0)

//   return (
//     <div>
//       <Comp1 count = {count} onclickHandler = {() => setCount(count + 1)}/>
//       <Comp2 count = {count} onclickHandler = {() => setCount(count - 1)}/>
//     </div>
//   )
// }

// export default App

//++++++++++++++Import useState +++++++(code1)

//Ex: 1

// import React from 'react'
// import Comp3 from './Components/Code1(ShareState)/Comp3'

// function App() {
//   return (
//     <div>
//       <Comp3/>
//     </div>
//   )
// }

// export default App

//Ex: 2

// import React from 'react'
// import Comp4 from './Components/Code1(ShareState)/Comp4'

// function App() {
//   return (
//     <div>
//       <Comp4/>
//     </div>
//   )
// }

// export default App

//++++++++++++Challenge (10)++++++++++++

// Ex:- 1

// import React from 'react'
// import Counter from './Components/Challenge10/Counter';

// function App() {
//   return (
//     <div>
//         <Counter/>
//     </div>
//   )
// }

// export default App;

//Ex:- 2 (leftover)

// import React from 'react'
// import TodoList from './Components/Challenge10/TodoList'
// import Profile from './Components/Challenge10/profile'

// function App() {
//   return (
//     <div>
//       {/* <TodoList/> */}
//       <Profile/>
//     </div>
//   )
// }

// export default App

// Ex:- 3 (leftover)

//+++++++++++++++ Portal +++++++++ (leftOver)
//  import React from 'react'
// import CopyInput from './Components/Code2(Copy)/CopyInput'

//  function App() {
//    return (
//      <div>
//         <CopyInput/>
//      </div>
//    )
//  }

//  export default App
//++++++++++++++ Advance Keys +++++++++

// import React from 'react'
// import Switcher from './Components/Code3(Switcher)/Switcher'

// function App() {
//   return (
//     <div>
//         <Switcher/>
//     </div>
//   )
// }

// export default App

//+++++++++++++++ UseEffect +++++++++++++

// import React, { useEffect, useState } from 'react'

// function App() {

//   const [value, setValue] = useState(0);
//   const [something, setSomething] = useState(0);

//   useEffect(() => {
//     console.log("Call useEffect")
//     document.title = `Increment ${value}`
//     document.title = `Increment ${something}` //Last assignment wins
//   }, [value, something])

//   return (

//     <div>
//       <h2>{value}</h2>
//       <button onClick={() => setValue(value + 1)}>Click me</button>
//       <h2>{something}</h2>
//       <button onClick={() => setSomething(something + 1)}>Something</button>
//     </div>
//   )
// }

// export default App

//++++++fetch data by useEffect++++++++++

//** useEffect is using for control render each time */
//** useEffect = side work (internet, timers, storage) */

// import React, { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function getData() {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts"
//       );
//       const data = await response.json();
//       if (data && data.length) setData(data);
//     }
//     getData();
//   }, []); //Runs once when the component mounts (empty dependency array).

//   return (
//     <div>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

//+++++++++++Challenge 11++++++++++++++++

// import React from 'react'
// import BasicEffect from './Components/Challenge11/BasicEffect'
// import CounterEffect from './Components/Challenge11/CounterEffect'
// import FetchDataEffect from './Components/Challenge11/FetchDataEffect'

// function App() {
//   return (
//     <div>
//       {/* <BasicEffect/> */}
//       {/* <CounterEffect/> */}
//       <FetchDataEffect/>
//     </div>
//   )
// }

// export default App

//+++++++++++Pop driling+++++++++++(code 4)

// import React from 'react'
// import Comp1 from './Components/Code4(Pop driling)/Comp1';

// function App() {

//     const name = "Huxn";

//   return (
//     <div>
//         <Comp1 name = {name}/>
//     </div>
//   )
// }

// export default App

//+++++++++ Context API +++++++++++ (code 5)
//Manage and share state to easy pop driling

// import React, { createContext, useState } from "react";
// import Code1 from "./Components/Code5(Context-API)/Code1";

// export const Data = createContext();
// export const Data1 = createContext();

// function App() {
//     let name = "Jhoon";
//     let age = 18;

//   return (
//     <div>
//       <Data.Provider value={name}>
//         <Data1.Provider value={age}>
//             <Code1/>
//         </Data1.Provider>
//       </Data.Provider>

//     </div>
//   );
// }

// export default App;

//++++++++++++ useContext Hook +++++(Code6)

// import React, { createContext } from 'react'
// import Comp1 from './Components/Code6(useContext)/Comp1';

// export const Data = createContext()
// export const Data1 = createContext()

// function App() {

//     let name = "Alex";
//     let age = 23

//   return (
//     <div>
//       <Data.Provider value={name}>
//         <Data1.Provider value={age}>
//            <Comp1/>
//         </Data1.Provider>
//       </Data.Provider>
//     </div>
//   )
// }

// export default App

//++++++++Challenge  ++++++++++(12)

// import React from 'react'
// import UserProfile from './Components/Challenge12/UserProfile'
// import UserProvider from './Components/Challenge12/UserContext'
// import UpdateUser from './Components/Challenge12/UpdateUser'

// function App() {
//   return (
//     <UserProvider>
//         <UserProfile/>
//         <UpdateUser/>
//     </UserProvider>
//   )
// }

// export default App

// ++++++++++++ useReducer ++++++++++++

// import React, { act, useReducer } from "react";

// const initialState = { count: 0 };
// const reducer = (state, action) => {
//   if (action.type === "increment") {
//     return { ...state, count: state.count + 1 };
//   } else if (action.type === "decrement") {
//     return { ...state, count: state.count - 1 };
//   } else if (action.type === "reset") {
//     return {...state, count: 0}
//   } else{
//     return state
//   }
// };

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return <div>
//     <h1>Count {state.count}</h1>
//     <button onClick={() => dispatch({type: "increment"})}>+</button>
//     <button onClick={() => dispatch({type: "decrement"})}>-</button>
//     <button onClick={() => dispatch({type: "reset"})}>*</button>
//   </div>;
// }

// export default App;

//+++++++++++++++++ Challenge (13) ++++++++

// import React from 'react'
// import Counter from './Components/Challenge13/Counter'

// function App() {
//   return (
//     <div>
//         <Counter/>
//     </div>
//   )
// }

// +++++++++++++++ useRef +++++++++

// import React, { useRef } from 'react'

// function App() {

//     const inputElement = useRef(null)
//     console.log(inputElement)

//     const focusInput = () =>{
//         inputElement.current.focus()
//         inputElement.current.value = "HuXn"
//     }

//   return (
//     <div>
//         <input type="text" ref={inputElement}/>
//         <button onClick={() => focusInput()}>Focus and write huxn</button>
//     </div>
//   )
// }

// export default App

//++++++++++++Challenge ++++++

// import React from 'react'
// import Timer from './Components/Challenge14/Timer'

// function App() {
//   return (
//     <div>
//         <Timer/>
//     </div>
//   )
// }

// export default App

//Repractice

// import React, { useRef } from 'react'

// function App() {

//   const element = useRef(null);
//   console.log(element)

//   const changeFocus = () => {
//     element.current.focus()
//     element.current.value = "HuXn"
//   }

//   return (
//     <div>
//        <input type="text" ref={element}/>
//        <button onClick={() => changeFocus()}>Focus</button>
//     </div>
//   )
// }

// export default App

//++++++++++++++ Custom hook +++++++++++

// import React, { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

//   return (
//     <div>
//       {data &&
//         data.map((item) => {
//           return <p key={item.id}>{item.title}</p>;
//         })}
//     </div>
//   );
// }

// export default App;


// +++++++++++++++ useFetch (7) +++++++++

// import React from 'react'
// import UseFetch from './Components/Code7(customHook)/useFetch'

// function App() {

//     const [data] = UseFetch("https://jsonplaceholder.typicode.com/todos")

//   return (
//     <div>
//         {data && data.map((item => {
//             return <p key={item.id}>{item.title}</p>
//         }))}
//     </div>
//   )
// }

// export default App

// +++++++++++ useId ++++++++++

// import React, { useId } from 'react'

// function App() {

//     const id = useId();

//   return (
//     <div>
//        <label htmlFor={`${id}-email`}>Email</label>
//        <input type="email" id= {`${id}-email`}/>

//        <br />

//        <label htmlFor={`${id}-pass`}>Password</label>
//        <input type="password" id={`${id}-pass`} />

//     </div>
//   )
// }

// export default App

//Code (8) +++++++++

// import React from 'react'
// import Unique from './Components/Code8(useId)/Unique'

// function App() {
//   return (
//     <div>
//         <Unique/>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, sit voluptatibus. Sunt ea consectetur inventore, nobis perspiciatis voluptates doloremque delectus?</p>

//         <Unique/>

//         {/* for both unique component react will create self id  */}
//     </div>
//   )
// }

// export default App

import React from 'react'

function App() {
  return (
    <div>
        <h1>hfsdf</h1>
    </div>
  )
}

export default App