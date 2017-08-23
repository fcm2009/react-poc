import React  from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'
import Input from 'react-toolbox/lib/input'
import Button from 'react-toolbox/lib/button'

class Login extends React.Component {

    constructor() {
        super()
        this.state = { username: '', password: '' }
        this.usernameHandler = this.usernameHandler.bind(this)
        this.passwordHandler = this.passwordHandler.bind(this)
    }

    usernameHandler(name) {
        this.setState({ username: name })
    }

    passwordHandler(password) {
        this.setState({ password: password })
    }

    render() {
        return (
            <div>
                <Input type='text' placeholder='Username' onChange={ this.usernameHandler.bind('name') } />
                <Input type='password' placeholder='Password' onChange={ this.passwordHandler.bind('password') }/>
                <Button icon='done' onClick={ () => this.props.login(this.state.username, this.state.password) } label='Login' />
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => dispatch(login(username, password))
    }
}


export default connect(null, mapDispatchToProps)(Login)