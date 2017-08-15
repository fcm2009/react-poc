import React from 'react'


export default ({ id, name, age, updateProfile, updateName, updateAge }) => {
    return (
        <div>
            <input type='text' readOnly placeholder value={ id }/>
            <input type='text' placeholder='User Name' value={ name } onChange={ e => updateName(e.target.value) } />
            <input type='text' placeholder='Age' value={ age } onChange={ e => updateAge(e.target.value) } />
            <button onClick={ updateProfile }>Save</button>
        </div>
    )
}