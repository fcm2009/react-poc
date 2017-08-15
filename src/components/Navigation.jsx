import React from 'react'
import { Link, Route } from 'react-router-dom'

export default props => {
    return (
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <Route path='/profile' render={ props => <li><Link to='/profile/view'>View</Link></li> } />
                <Route path='/profile' render={ props => <li><Link to='/profile/edit'>Edit</Link></li> } />
            </ul>
        </div>
    )
}