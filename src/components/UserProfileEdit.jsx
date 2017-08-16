import React from 'react'


export default ({ id, name, age, updateProfile, updateName, updateAge, history }) => {
    return (
        <div>
            <div>
               <div>ID: {id}</div>
               <div>Name: <input type='text' placeholder='User Name' value={ name } onChange={ e => updateName(e.target.value) } /></div>
               <div>Age: <input type='number' placeholder='Age' value={ age } onChange={ e => updateAge(e.target.value) } /></div>
            </div>
            <button onClick={ () => { updateProfile(); history.push('/profile')} }>Update Profile</button>
        </div>
    )
}