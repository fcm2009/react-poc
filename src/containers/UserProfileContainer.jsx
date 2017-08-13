import { connect } from 'react-redux'
import { updateProfile, updateName, updateAge } from '../actions'
import UserProfile from '../components/UserProfile.jsx'


const mapStateToProps = state => {
    return {
        userProfile: state.get('userProfile')
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateProfile: () => dispatch(updateProfile()),
        updateName: (name) => dispatch(updateName(name)),
        updateAge: (age) => dispatch(updateAge(age))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)