import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import UserProfileContainer from './containers/UserProfileContainer.jsx'
import UserProfileView from './components/UserProfileView.jsx'


const MainRoutes = () => (
    <switch>
        <Route exact path='/' component={() => <Redirect to="/profile"/>}/>
        <Route path='/profile' component={UserProfileContainer}/>
    </switch>
)

export default MainRoutes