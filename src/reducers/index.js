import { combineReducers } from 'redux'
import UserProfileReducer from './UserProfileReducer'
import TokenReducer from './TokenReducer'
import CounterReducer from './CounterReducer'
import UserProfileEditorReducer from './UserProfileEditorReducer'


export default combineReducers({ 
    userProfile: UserProfileReducer,
    token: TokenReducer,
    counter: CounterReducer,
    UserProfileEditor: UserProfileEditorReducer
})