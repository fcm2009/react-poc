import { LOGGEDIN, LOGOUT } from '../actions'


const initalState = ''


export default (state = initalState, action) => {
    switch (action.type) {
        case LOGGEDIN:
            return action.token
        case LOGOUT:
            return ''
        default:
            return state
    }
}