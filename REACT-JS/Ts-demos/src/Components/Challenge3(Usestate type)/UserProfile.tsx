import { useState } from "react";

interface UserProfileStat {
    name: string;
    age: number | "";
    email: string ;
}


function UserProfile() {

 const [profile, setProfile] = useState<UserProfileStat>({
        name: "",
        age: "",
        email: ""
    })
 const updateName = (name: string) => {
    setProfile((prevProfile) => ({...prevProfile , name}))
 }
 const updateAge = (age: string) => {
    setProfile((prevProfile) => ({...prevProfile , age: age === "" ? "" : +age})) 
 }
 const updateEmail = (email: string ) => {
    setProfile((prevProfile) => ({...prevProfile, email}))
 }
  return (
    <div>
      <h2>User Profile</h2>
      <input type="text" placeholder="Name" value={profile.name} onChange={(e) => updateName(e.target.value)}/>
      <input type="number" placeholder="Age" value={profile.age} onChange={(e) => updateAge(e.target.value)}/>
      <input type="email" value={profile.email} onChange={(e) => updateEmail(e.target.value)} />

      <h2>Profile summery: </h2>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
      <p>Email: {profile.email}</p>

    </div>
  )
}

export default UserProfile