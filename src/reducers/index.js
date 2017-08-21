import { combineReducers } from 'redux'
import UserProfileReducer from './UserProfileReducer'
import TokenReducer from './TokenReducer'
import CounterReducer from './CounterReducer'


export default combineReducers({ 
    userProfile: UserProfileReducer,
    token: TokenReducer,
    counter: CounterReducer 
})