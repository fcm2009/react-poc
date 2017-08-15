import React from 'react'
import { connect } from 'react-redux'
import { updateProfile, updateName, updateAge } from '../actions'
import UserProfileViewer from '../components/UserProfileViewer.jsx'
import UserProfileEditor from '../components/UserProfileEditor.jsx'
import { Route } from 'react-router-dom'


const userProfileContainer = ({ userProfile }) => {
    return (
        <div>
            <Route path='/view' userProfile={ userProfile } component={ UserProfileViewer } />
            <Route path='/edit' userProfile={ userProfile } component={ UserProfileEditor } />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userProfile: state.get('userProfile')
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateProfile: () => dispatch(updateProfile()),
        updateName: (name) => dispatch(updateName(name)),
        updateAge: (age) => dispatch(updateAge(age))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(userProfileContainer)