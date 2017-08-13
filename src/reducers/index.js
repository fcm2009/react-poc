import { fromJS } from 'immutable'

import { 
    REQUEST_USER,
    RECEIVE_USER,
    UPDATE_NAME,
    UPDATE_AGE
} from '../actions'

const initalState = fromJS({
    userProfile: { id: '0', name: '', age: ''}
})


export default (state = initalState, action) => {
    switch (action.type) {
        case REQUEST_USER:
            console.log(state); return state
        case RECEIVE_USER:
            console.log(state.toJS(), action); return state.set('userProfile', action.userProfile)
        case UPDATE_NAME:
            console.log(state); return state.setIn(['userProfile', 'name'], action.name)
        case UPDATE_AGE:
            console.log(state); return state.setIn(['userProfile', 'age'], action.age)
        default:
            console.log(state); return state
    }
}