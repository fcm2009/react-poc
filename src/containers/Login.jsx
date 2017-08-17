import React  from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'


class Login extends React.Component {

    constructor() {
        super()
        this.state = { username: '', password: '' }
        this.usernameHandler = this.usernameHandler.bind(this)
        this.passwordHandler = this.passwordHandler.bind(this)
    }

    usernameHandler(event) {
        this.setState({ username: event.target.value })
    }

    passwordHandler(event) {
        this.setState({ password: event.target.value })
    }

    render() {
        return (
            <div>
                <input type='text' placeholder='Username' onChange={ this.usernameHandler } />
                <input type='password' placeholder='Password' onChange={ this.passwordHandler }/>
                <button onClick={ () => this.props.login(this.state.username, this.state.password) }>Login</button>
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