// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import UserProfileContainer from './containers/UserProfileContainer.jsx'
import { fetchUser } from './actions'
import { BrowserRouter, Route, HashRouter  } from 'react-router-dom'


const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

store.dispatch(fetchUser())

const App = props => {
    return (
        <Provider store={ store }>
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={ () => <div>Hello World</div> } />
                    <Route path='/a' component={ UserProfileContainer } />
                </div>
            </BrowserRouter>
        </Provider>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)
