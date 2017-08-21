import { fromJS } from 'immutable'
import { DEACTIVATE_USER_PROFILE_EDITOR, ACTIVATE_USER_PROFILE_EDITOR } from '../actions'


const initalState = fromJS({
    editable: true
})


export default (state = initalState, action) => {
    switch (action.type) {
        case ACTIVATE_USER_PROFILE_EDITOR:
            return state.set('editable', true)
        case DEACTIVATE_USER_PROFILE_EDITOR:
            return state.set('editable', false)
        default:
            return state
    }
}