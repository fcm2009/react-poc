import React from 'react'
import { connect } from 'react-redux'
import { toggleCounter } from '../actions'

class UserProfileEditor extends React.Component {
    
    componentDidMount() {
        this.props.toggleCounter()
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
                <button onClick={ this.props.updateProfile }>Save</button>
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
        toggleCounter: () => dispatch(toggleCounter())
    }
} 


export default connect(mapStateToProps, mapDispatchToProps)(UserProfileEditor)

