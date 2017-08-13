// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import UserProfileContainer from './containers/UserProfileContainer.jsx'


const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

const App = props => {
    return (
        <Provider store={ store }>
            <UserProfileContainer />
        </Provider>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)
