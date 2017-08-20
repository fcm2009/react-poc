import { fromJS } from 'immutable'

import { 
    RECEIVE_USER,
    UPDATE_NAME,
    UPDATE_AGE,
    LOGGEDIN,
    LOGOUT,
    TICK,
    TOGGLE_COUNTER
} from '../actions'

const initalState = fromJS({
    userProfile: { id: 0, name: '', age: ''},
    token: '',
    counter: { 
        remainingTime: 30,
        started: false
    }
})


export default (state = initalState, action) => {
    switch (action.type) {
        case RECEIVE_USER:
            return state.set('userProfile', fromJS(action.userProfile))
        case UPDATE_NAME:
            return state.setIn(['userProfile', 'name'], action.name)
        case UPDATE_AGE:
            return state.setIn(['userProfile', 'age'], action.age)
        case LOGGEDIN:
            return state.set('token', action.token)
        case LOGOUT:
            return state.set('token', '')
        case TOGGLE_COUNTER:
            return state.setIn(['counter, started'], !status.getIn(['counter, started'])) 
        case TICK:
            return state.set('remainingTime', state.get('remainingTime') - 1)
        default:
            return state
    }
}