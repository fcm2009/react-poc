import React from 'react'

export default class User extends React.Component {
    render() {
        return (
            <div>
                <div>ID: {this.props.user.id}</div>
                <div>Name: {this.props.user.name}</div>
                <div>Age: {this.props.user.age}</div>
            </div>
        )
    }
}