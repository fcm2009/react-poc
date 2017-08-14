import { fromJS } from 'immutable'

import { 
    RECEIVE_USER,
    UPDATE_NAME,
    UPDATE_AGE
} from '../actions'

const initalState = fromJS({
    userProfile: { id: 0, name: '', age: ''}
})


export default (state = initalState, action) => {
    switch (action.type) {
        case RECEIVE_USER:
            return fromJS({ userProfile: action.userProfile })
        case UPDATE_NAME:
            return state.setIn(['userProfile', 'name'], action.name)
        case UPDATE_AGE:
            return state.setIn(['userProfile', 'age'], action.age)
        default:
            return state
    }
}