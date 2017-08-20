import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'
import Login from '../components/Login.jsx'
import UserProfileView from '../components/UserProfileView.jsx'

import { Route , withRouter, Switch } from 'react-router-dom'

const LoginContainer = (props) => { 
    return (
        <Route path='/login' component={(routeProps) => <Login {...props.functionCallbacks} {...routeProps}/>}/>
)
}

const mapStateToProps = state => {
    return {
        userProfile: {id: state.getIn(['userProfile', 'id']),
        name: state.getIn(['userProfile', 'name']),
        age: state.getIn(['userProfile', 'age'])},
    }
}

const mapDispatchToProps = dispatch => {
    return {
        functionCallbacks: {
        login: (username, password) => dispatch(login(username, password))
    }
}
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer))