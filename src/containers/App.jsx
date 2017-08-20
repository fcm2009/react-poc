import React from 'react'
import { BrowserRouter, Route, HashRouter  } from 'react-router-dom'
import UserProfileContainer from './UserProfileContainer.jsx'
import Counter from './Counter.jsx'
import Login from './Login.jsx'
import Home from '../components/Home.jsx'
import Navigation from '../components/Navigation.jsx'
import PrivateRoute from '../utils/PrivateRoute.jsx'
import { connect } from 'react-redux'


const App = props => {
    return (
        <HashRouter>
            <div>
                <Navigation />
                <Counter />
                <Route exact path='/' component={ Home } />
                <PrivateRoute path='/profile' token={ props.token } component={ UserProfileContainer } />
                <Route path='/login' component={ Login } />
            </div>
        </HashRouter>
    )
}

const mapStateToProps = state => {
    return {
        token: state.getIn(['token'])
    }
}


export default connect(mapStateToProps)(App)
