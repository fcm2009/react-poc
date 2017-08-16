import React from 'react'


export default ({ id, name, age, history }) => {
    return (
        <div>
            <div>
               <div>ID: {id} </div>
               <div>Name: {name}</div>
               <div>Age: {age} </div>
            </div>
            <button  onClick={ () => history.push('/profile/edit') }>Edit Profile</button>
        </div>
    )
}