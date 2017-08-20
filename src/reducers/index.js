import { fromJS } from 'immutable'

import { 
    RECEIVE_USER,
    UPDATE_NAME,
    UPDATE_AGE, 
    LOGGED, 
    LOGGOUT
} from '../actions'

const initalState = fromJS({
    userProfile: { id: 0, name: '', age: ''}, 
    token: ''
})


export default (state = initalState, action) => {
    switch (action.type) {
        case RECEIVE_USER:
            return fromJS({ userProfile: action.userProfile })
        case UPDATE_NAME:
            return state.setIn(['userProfile', 'name'], action.name)
        case UPDATE_AGE:
            return state.setIn(['userProfile', 'age'], action.age)
        case LOGGED: {
            console.log("reducer ", action.token)
            return state.setIn(['token'], action.token)
        }
        case LOGGOUT: 
            return state.setIn[['token'], '']
        default:
            return state
    }
}