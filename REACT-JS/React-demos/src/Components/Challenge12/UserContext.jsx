import React, { createContext, useState } from 'react'

export const UserContext = createContext()

function UserProvider({children}) {

    const [user, setUser] = useState({name: "John Doe"})

    const updateUser = newName => {
        setUser({name: newName})
    }

  return (
    <UserContext.Provider value = {{user, updateUser}}>
    {children}
    </UserContext.Provider>
  )
}

export default UserProvider
