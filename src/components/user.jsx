import React from 'react'

export default class User extends React.Component {
    render() {
        return (
            <div>
                <div>ID: {this.props.user.id}</div>
                <div>Name: <input value={this.props.user.name} onChange={event => this.props.updateName(event.target.value)} /></div>
                <div>Age: <input type='number' value={this.props.user.age} onChange={event => this.props.updateAge(event.target.value)}/></div>  
                <button onClick={this.props.onClick}>Submit</button>
            </div>
        )
    }
}