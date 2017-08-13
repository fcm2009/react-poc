import React from 'react'
import User  from './user.jsx'
import store from '../store.js'
import { getUserProfile } from '../services/user-service'
import {getUserProfileAction} from '../actions/user-actions.js'

export default class UserProfile extends React.Component {
    constructor() {
        super(); 
        this.state = {user: {}};
    }

    componentDidMount() {
        getUserProfile()
        .then(response => store.dispatch(getUserProfileAction(response))); 
    }
    render() {
        return (
            <div>
                <h2>Profile</h2>
                <User user={this.props.user}/>
            </div>
        )
    }
}

