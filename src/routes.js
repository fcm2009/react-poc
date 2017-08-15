import React from 'react'
import { Switch, Route } from 'react-router-dom'
import UserProfileContainer from './containers/UserProfileContainer.jsx'


const MyRoutes = () => (
    <Switch>
        <Route exact path='/' component={UserProfileContainer}/>
        <Route path='/profile' component={() => <h2>Abdullah Profile</h2>}/>
    </Switch>
)

export default MyRoutes