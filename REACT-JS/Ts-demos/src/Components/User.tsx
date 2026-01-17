// // import React from 'react'

// export default function User(props: {name:string; age:number; isStudent:boolean}) {
//   return (
//     <div>
//         <h2>{props.name}</h2>
//         <h2>{props.age}</h2>
//         <h2>{props.isStudent}</h2>
//     </div>
//   )
// }

// Another

// // import React from 'react'

// function User({name, age, isStudent} : {name:string; age:number; isStudent:boolean}) {
//   return (
//     <div>
//         <h2>{name}</h2>
//         <h2>{age}</h2>
//         <h2>{isStudent}</h2>
//     </div>
//   )
// }

// export default User

//Another 2 

// import React from 'react'
// type UserInfo = {
//     name: string;
//     age: number;
//     isStudent: boolean
// }

// function User({name, age, isStudent}: UserInfo) {
//   return (
//     <div>
//         <h2>{name}</h2>
//         <h2>{age}</h2>
//         <h2>{isStudent}</h2>
//     </div>
//   )
// }

// export default User

//Another 3 

// interface UserInfo  {
//     name: string;
//     age: number;
//     isStudent: boolean
// }

// function User({name, age, isStudent}: UserInfo) {
//   return (
//     <div>
//         <h2>{name}</h2>
//         <h2>{age}</h2>
//         <h2>{isStudent}</h2>
//     </div>
//   )
// }

// export default User

// //Another 4 
// import type { FC } from 'react'

// type UserInfo = {
//     name: string;
//     age: number;
//     isStudent: boolean
// }

// const User: FC<UserInfo> = ({name, age, isStudent}: UserInfo) => {
//   return (
//     <div>
//         <h2>{name}</h2>
//         <h2>{age}</h2>
//         <h2>{isStudent}</h2>
//     </div>
//   )
// }

// export default User

//Another: 5 Reactnodes
