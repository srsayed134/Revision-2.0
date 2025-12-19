import React from 'react'


function UserStatus({isAdmin, isLoggedIn}) {
    if (isLoggedIn && isAdmin) {
       return <h1>Welcome Admin!</h1>
    }else if(isLoggedIn){
       return <h1>Welcome User</h1>
    }
}

export default UserStatus