import React from 'react'
import { connect } from 'react-redux'
import { toggleCounter } from '../actions'

class UserProfileEditor extends React.Component {
    
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <input type='text' readOnly placeholder value={ this.props.userProfile.id }/>
                <input 
                    type='text' 
                    placeholder='User Name' 
                    value={ this.props.userProfile.name } 
                    onChange={ e => this.props.callbacksupdateName(e.target.value) } 
                />
                <input 
                    type='text' 
                    placeholder='Age' 
                    value={ this.props.userProfile.age } 
                    onChange={ e => this.props.callback.updateAge(e.target.value) } 
                />
                <button onClick={ updateProfile }>Save</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleCounter: dispatch(toggleCounter())
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileEditor)

