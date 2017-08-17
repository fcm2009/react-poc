import React from 'react'
import { Link, Route } from 'react-router-dom'

export default props => {
    return (
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/profile/view'>View Profile</Link></li>
                <li><Link to='/profile/edit'>Edit Profile</Link></li>
            </ul>
        </div>
    )
}