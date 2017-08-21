import React from 'react'
import { connect } from 'react-redux'
import { startCounter, stopCounter } from '../actions'

class UserProfileEditor extends React.Component {
    
    componentDidMount() {
        this.props.startCounter()
    }

    componentWillUnmount() {
        this.props.stopCounter()
    }

    render() {
        return (
            <div>
                <input type='text' readOnly placeholder value={ this.props.id }/>
                <input 
                    type='text' 
                    placeholder='User Name' 
                    value={ this.props.name } 
                    onChange={ e => this.props.updateName(e.target.value) } 
                />
                <input 
                    type='text' 
                    placeholder='Age' 
                    value={ this.props.age } 
                    onChange={ e => this.props.updateAge(e.target.value) } 
                />
                <button onClick={ this.props.updateProfile } disabled={ !this.props.editable }>Save</button>
            </div>
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

