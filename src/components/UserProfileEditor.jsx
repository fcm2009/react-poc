import React from 'react'
import Counter from '../containers/Counter.jsx'

export default ({ id, name, age, updateProfile, updateName, updateAge }) => {
    return (
        <div>
            <Counter />
            <input type='text' readOnly placeholder value={ id }/>
            <input type='text' placeholder='User Name' value={ name } onChange={ e => updateName(e.target.value) } />
            <input type='text' placeholder='Age' value={ age } onChange={ e => updateAge(e.target.value) } />
            <button onClick={ updateProfile }>Save</button>
        </div>
    )
}