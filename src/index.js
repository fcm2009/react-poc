// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import App from './components/App.jsx'


const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

const ReduxApp = props => {
    return (
        <Provider store={ store }>
            <App />
        </Provider>
    )
}

ReactDOM.render(
    <ReduxApp />,
    document.getElementById('root')
)
