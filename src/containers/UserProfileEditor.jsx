import React from 'react'
import { connect } from 'react-redux'
import { startCounter, stopCounter } from '../actions'
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card'
import Input from 'react-toolbox/lib/input'
import Button from 'react-toolbox/lib/button'


class UserProfileEditor extends React.Component {
    
    componentDidMount() {
        this.props.startCounter()
    }

    componentWillUnmount() {
        this.props.stopCounter()
    }

    render() {
        return (
            <Card style={{ margin: 10 }}>
                <CardTitle>User ID: { this.props.id }</CardTitle>
                <CardText>
                    <Input 
                        type='text' 
                        placeholder='User Name' 
                        value={ this.props.name } 
                        onChange={ e => this.props.updateName(e.target.value) } 
                    />
                    <Input 
                        type='text' 
                        placeholder='Age' 
                        value={ this.props.age } 
                        onChange={ e => this.props.updateAge(e.target.value) } 
                    />
                </CardText>
                <CardActions>
                    <Button icon='done' onClick={ this.props.updateProfile } disabled={ !this.props.editable } label='Save' />
                </CardActions>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        editable: state.UserProfileEditor.get('editable')
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startCounter: () => dispatch(startCounter()),
        stopCounter: () => dispatch(stopCounter())
    }
} 


export default connect(mapStateToProps, mapDispatchToProps)(UserProfileEditor)

