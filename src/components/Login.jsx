import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'


export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {username: '', password: ''}
        this.loginUser = this.loginUser.bind(this);

    }

    loginUser() {
        this.props.login({'username': this.state.username, 'password': this.state.password})
    }
    
    usernameChange(event) { 
        this.setState({ username: event.target.value});
    }

    onPasswordChange(event) {
        this.setState({password: event.target.value});
    }

    render() {
        return (
        <div> 
            <input placeholder='username' value={this.state.username} type='text' onChange={(e) => this.usernameChange(e)}/>
            <input placeholder='password' type='password' value={this.state.password} onChange={(e) => this.onPasswordChange(e)}/> 
            <button onClick={this.loginUser}>Login</button>
        </div> 
        )
    } 
}
