import { connect } from 'react-redux'
import { updateProfile, updateName, updateAge } from '../actions'
import UserProfile from '../components/UserProfile.jsx'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
    return {
        id: state.getIn(['userProfile', 'id']),
        name: state.getIn(['userProfile', 'name']),
        age: state.getIn(['userProfile', 'age'])
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateProfile: () => dispatch(updateProfile()),
        updateName: (name) => dispatch(updateName(name)),
        updateAge: (age) => dispatch(updateAge(age))
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile))