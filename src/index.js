// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import UserProfile from './components/profile.jsx'
import { connect } from 'react-redux'
import { Provider } from 'react-redux';
import {combineReducers, createStore, compose} from 'redux'
import userReducer from './reducers/user-reducer'

export const store = createStore(
    userReducer,
    compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)
ReactDOM.render(
    <Provider store={store}>
    <UserProfile />
    </Provider>,
    document.getElementById('root')
)
