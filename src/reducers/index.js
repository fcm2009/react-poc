import { fromJS } from 'immutable'

import { 
    RECEIVE_USER,
    UPDATE_NAME,
    UPDATE_AGE,
    LOGGEDIN,
    LOGOUT
} from '../actions'

const initalState = fromJS({
    userProfile: { id: 0, name: '', age: ''},
    token: ''
})


export default (state = initalState, action) => {
    switch (action.type) {
        case RECEIVE_USER:
            return state.setIn(['userProfile'], fromJS(action.userProfile))
        case UPDATE_NAME:
            return state.setIn(['userProfile', 'name'], fromJS(action.name))
        case UPDATE_AGE:
            return state.setIn(['userProfile', 'age'], fromJS(action.age))
        case LOGGEDIN:
            return state.set('token', fromJS(action.token))
        case LOGOUT:
            return state.set('token', fromJS(''))
        default:
            return state
    }
}