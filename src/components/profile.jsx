import React from 'react'
import User  from './user.jsx'
import {store} from '../index'
import { connect } from 'react-redux'
import {updateName, updateAge} from '../actions/user-actions'
import { getUserProfile, postUserProfile } from '../services/user-service'

export class UserProfile extends React.Component {
    
    componentDidMount() {
        getUserProfile();
    }
    render() {
        return (
            <div>
                <h2>Profile</h2>
                <User user={this.props.user} updateName={this.props.updateName} updateAge={this.props.updateAge} onClick={() => postUserProfile(this.props.user)}/>
            </div>
        )
    }
}

function mapDispatch(dispatch) {
    return {
        updateName: name => dispatch(updateName(name)),
        updateAge: age => dispatch(updateAge(age))
    };
}
function mapProps(state) {
    return {user: state.user}; 
}; 

export default connect(mapProps, mapDispatch)(UserProfile);

