// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import UserProfileContainer from './containers/UserProfileContainer.jsx'
import Home from './components/Home.jsx'
import Navigation from './components/Navigation.jsx'
import { fetchUser } from './actions'
import { BrowserRouter, Route, HashRouter, Switch  } from 'react-router-dom'


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
                <HashRouter>
                    <div>
                        <Navigation />
                        <Route exact path='/' component={ Home } />
                        <Route path='/profile' component={ UserProfileContainer } />
                    </div>
                </HashRouter>
        </Provider>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)
