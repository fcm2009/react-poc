import React from 'react'
import { Link, Route } from 'react-router-dom'
import Navigation from 'react-toolbox/lib/navigation'
import RTLink from 'react-toolbox/lib/link'

export default props => {
    return (
        <Navigation type='vertical'>
            <RTLink><Link to='/'>Home</Link></RTLink>
            <RTLink><Link to='/profile'>Profile</Link></RTLink>
            <RTLink><Link to='/login'>Login</Link></RTLink>
            <RTLink><Link to='/profile/view'>View Profile</Link></RTLink>
            <RTLink><Link to='/profile/edit'>Edit Profile</Link></RTLink>
        </Navigation>
    )
}