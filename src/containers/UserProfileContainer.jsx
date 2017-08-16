import React from 'react'
import { connect } from 'react-redux'
import { updateProfile, updateName, updateAge } from '../actions'
import UserProfileEdit from '../components/UserProfileEdit.jsx'
import UserProfileView from '../components/UserProfileView.jsx'

import { Route , withRouter, Switch } from 'react-router-dom'

const UserProfileContainer = (props) => { 
    return (
    <Switch>
        <Route exact path='/profile' component={(routeProps) => <UserProfileView {...props.userProfile} {...routeProps}/>}/>
        <Route path='/profile/edit' component={(routeProps) => <UserProfileEdit {...props.userProfile} {...props.functionCallbacks} {...routeProps}/>}/>
    </Switch> 
)
}

const mapStateToProps = state => {
    return {
        userProfile: {id: state.getIn(['userProfile', 'id']),
        name: state.getIn(['userProfile', 'name']),
        age: state.getIn(['userProfile', 'age'])}
    }
}

const mapDispatchToProps = dispatch => {
    return {
        functionCallbacks: {
        updateProfile: () => dispatch(updateProfile()),
        updateName: (name) => dispatch(updateName(name)),
        updateAge: (age) => dispatch(updateAge(age))}
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer))