// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import UserProfileContainer from './containers/UserProfileContainer.jsx'
import { fetchUser } from './actions'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import MainRoutes from './routes'

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
            <MainRoutes/>
        </Provider>
    )
}


ReactDOM.render(
    <HashRouter> 
        <App />
    </HashRouter>,
    document.getElementById('root')
)
