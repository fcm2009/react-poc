import React from 'react'


export default ({ id, name, age, history, match, logout }) => {
    return (
        <div>
            <div>Id: { id }</div>
            <div>Name: { name }</div>
            <div>Age: { age }</div>
            <button onClick={ () => history.push(`/profile/edit`) }>Update Profile</button>
            <button onClick={ () => logout() }>LogOut</button>
        </div>
    )
}