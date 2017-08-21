// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import App from './containers/App.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

const ReduxApp = props => {
    return (
        <MuiThemeProvider>
            <Provider store={ store }>
                <App />
            </Provider>
        </MuiThemeProvider>
    )
}

ReactDOM.render(
    <ReduxApp />,
    document.getElementById('root')
)
