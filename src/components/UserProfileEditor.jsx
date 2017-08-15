import React from 'react'


export default ({ userProfile }) => {
    return (
        <div>
            <input type='text' readOnly placeholder value={ userProfile.id }/>
            <input type='text' placeholder='User Name' value={ userProfile.name } onChange={ e => updateName(e.target.value) } />
            <input type='text' placeholder='Age' value={ userProfile.age } onChange={ e => updateAge(e.target.value) } />
            <button onClick={ updateProfile }>Update Profile</button>
        </div>
    )
}