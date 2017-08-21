import React from 'react'
import { connect } from 'react-redux'
import { updateProfile, updateName, updateAge, logout, fetchUser } from '../actions'
import UserProfileViewer from '../components/UserProfileViewer.jsx'
import UserProfileEditor from '../containers/UserProfileEditor.jsx'
import { Route, Link, Switch } from 'react-router-dom'


class userProfileContainer extends React.Component {

    componentDidMount() {
        this.props.callbacks.fetchUser()
    }

    render() {
        return (
            <Switch>
                <Route 
                    path={ `${this.props.match.url}/view` } 
                    render={ routerProps => <UserProfileViewer { ...this.props.userProfile } { ...routerProps } { ...this.props.callbacks }   /> }
                />
                <Route 
                    path={ `${this.props.match.url}/edit` } 
                    render={ () => <UserProfileEditor { ...this.props.userProfile } { ...this.props.callbacks } /> } 
                />
            </Switch>
        )
    }
}

const mapStateToProps = state => {
    return {
        userProfile: state.userProfile.toJS()
    }
}

const mapDispatchToProps = dispatch => {
    return {
        callbacks: {
            updateProfile: () => dispatch(updateProfile()),
            updateName: name => dispatch(updateName(name)),
            updateAge: age => dispatch(updateAge(age)),
            logout: () => dispatch(logout()),
            fetchUser: () => dispatch(fetchUser())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(userProfileContainer)