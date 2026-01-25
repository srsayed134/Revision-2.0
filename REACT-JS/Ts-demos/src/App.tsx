//Basic 1( Types For Props) +++++++++++++++++++++
//User tsx
// import User from "./Components/User"
// function App() {
//   return (
//     <div>
//       <User name= "Alex" age={20} isStudent={true}/>
//     </div>
//   )
// }
// export default App

import { useState } from "react"
import UserProfile from "./Components/Challenge3(Usestate type)/UserProfile";
import Todolist from "./Components/Challenge3(Usestate type)/Todolist";

//Reactnodes ++++++++++++

// import React from 'react'
// import User from './Components/User'

// function App() {
//   return (
//     <div>
//     <User >
//         <p>Hello</p>
//     </User>
//     </div>
//   )
// }

// export default App

//Challenge : 1

// import React from 'react'
// import Button from './Components/Challenge1/Button'

// function App() {
//   return (
//     <div>
//         <Button label="Click" onClick= {() => console.log("Clicked")} disable={false}/>
//     </div>
//   )
// }

// export default App
//Challege : 1a (share type)

// import AdminInfo from './Components/Challenge1/AdminInfo'
// import UserInfo from './Components/Challenge1/UserInfo'
// import type { AdminInfos, ExampleInfo, Info } from './Components/Challenge1/types'
// import Example from './Components/Challenge1/Example'

// function App() {
//     //method : 1
//     const user : Info = {
//         id: 1,
//         name: "Jhon Doe",
//         email: "jhon@email.com"
//     }
//     //method : 2
//     const admin : AdminInfos = {
//         id: 2,
//         name: "Jane",
//         email: "jane@email.com",
//         role: "admin",
//         lastLogin: new Date(),
//     }
//     //Method : 3
//     const exinfo : ExampleInfo = {
//         id: 3,
//         name: "Example User",
//         email: "example@email.com",
//         religion: "Do not want to say",
//         location: "Frankfoot",
//         role: "user",
//         lastLogin: new Date()
//     }

//   return (
//     <div>
//         <AdminInfo admin={admin}/>
//         <UserInfo user={user}/>
//         <Example exinfos={exinfo}/>
//     </div>
//   )
// }

// export default App

//Challege : 2 (reuseable type)
// import AdminIfo from "./Components/Challenge2(reuseble type)/AdminIfo";
// import UserInfo from "./Components/Challenge2(reuseble type)/UserInfo";

// function App() {
//   return (
//     <div>
//       <UserInfo
//         userName="Alex"
//         email="alex@email.com"
//         age={28}
//         location={["Earth", "USA"]}
//       />
//       <AdminIfo
//         userName="Alex"
//         email="alex@email.com"
//         age={28}
//         location={["Mars", "Unknown"]}
//         admin="Yes"
//       />
//     </div>
//   );
// }

// export default App;

//Use type in useState

// import Counter from "./Components/Code1(Counter)/Counter"

// function App() {
//   return (
//     <div>
//         <Counter/>
//     </div>
//   )
// }

// export default App

//Challenge 3 +++++++++++++


// function App() {

//   const [count, setCount] = useState<number>(0);

//   const increment = () => {
//     setCount(prevCount => prevCount + 1);
//   }
//   return (

//     <div>
//       <h1>Counter : {count}</h1>
//       <button onClick={increment}>Increment</button>
//       <UserProfile/>
//       <Todolist/>
//     </div>
//   )
// }

// export default App

//

