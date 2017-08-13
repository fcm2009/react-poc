import React from 'react'
import User  from './user.jsx'

export default class Profile extends React.Component {
    constructor() {
        super(); 
        this.state = {user: {name: 'Ahmed', age: 12, id:1}};
    }

    componentDidMount() {
        fetch(`http://localhost:3000/user/0`)
        .then(result=>result.json())
        .then(items=>this.setState({user: items})); 
    }
    render() {
        return (
            <div>
                <h2>Profile</h2>
                <User user={this.state.user}/>
            </div>
        )
    }
}

