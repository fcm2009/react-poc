import React from 'react'
import { connect } from 'react-redux'
import { updateProfile, updateName, updateAge } from '../actions'
import UserProfileViewer from '../components/UserProfileViewer.jsx'
import UserProfileEditor from '../components/UserProfileEditor.jsx'
import { Route, Link, Switch } from 'react-router-dom'


const userProfileContainer = ({ userProfile, callbacks, match }) => {
    return (
        <Switch>
            <Route path={ `${match.url}/view` } render={ props => <UserProfileViewer { ...userProfile } {...props}   /> } />
            <Route path={ `${match.url}/edit` } render={ props => <UserProfileEditor { ...userProfile } {...callbacks} /> } />
        </Switch>
    )
}

const mapStateToProps = state => {
    return {
        userProfile: state.get('userProfile').toJS()
    }
}

const mapDispatchToProps = dispatch => {
    return {
        callbacks: {
            updateProfile: () => dispatch(updateProfile()),
            updateName: name => dispatch(updateName(name)),
            updateAge: age => dispatch(updateAge(age))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(userProfileContainer)