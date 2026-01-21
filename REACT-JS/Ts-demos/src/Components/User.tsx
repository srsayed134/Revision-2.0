//Props typed inline (props object)
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

//Inline type + destructuring
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
// Using type

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
// Using interface

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
// Using FC (FunctionComponent)

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

// import React, { type ReactNode } from 'react'

// interface UserShape{
//    children:ReactNode;
// }

// function User({children} : UserShape) {
//   return (
//     <div>
//         <h2>{children}</h2>
//     </div>
//   )
// }

// export default User
