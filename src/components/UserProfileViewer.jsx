import React from 'react'


export default ({ id, name, age, history, match }) => {
    return (
        <div>
            <div>Id: { id }</div>
            <div>Name: { name }</div>
            <div>Age: { age }</div>
            <button onClick={ () => history.push(`${match.url}/profile/edit`) }>Update Profile</button>
        </div>
    )
}