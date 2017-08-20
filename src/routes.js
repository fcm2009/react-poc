import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import UserProfileContainer from './containers/UserProfileContainer.jsx'
import LoginContainer from './containers/LoginContainer.jsx'
import Login from './components/Login.jsx'
import UserProfileView from './components/UserProfileView.jsx'
import GuardComponent from './components/GuardComponent.jsx'
import { connect } from 'react-redux'

const MainRoutes = (props) => (
    <switch>
        <Route exact path='/' component={() => <Redirect to="/profile"/>}/>
        <Route path='/login' component= {LoginContainer}/>
        <Rout path='/profile' token={props.token} component={UserProfileContainer}/>
    </switch>
)

export default MainRoutes