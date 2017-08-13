import { Map, fromJS, toJS } from 'immutable'

import { 
    REQUEST_USER,
    RECEIVE_USER,
    UPDATE_NAME,
    UPDATE_AGE
} from '../actions'

const initalState = fromJS({
    userProfile: { id: '', name: '', age: ''}
})

export default (state = initalState, action) => {
    switch (action.type) {
        case REQUEST_USER:
            return state
        case RECEIVE_USER:
            return state.set('userProfile', action.userProfile)
        case UPDATE_NAME:
            return state.setIn(['userProfile', 'name'], 'bbb')
        case UPDATE_AGE:
            return state.setIn(['userProfile', 'age'], 'bbb')
        default:
            return state
    }
}