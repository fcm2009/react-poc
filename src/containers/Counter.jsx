import React from 'react'
import { connect } from 'react-redux'
import { tick } from '../actions'

class Counter extends React.Component {
    
    constructor() {
        super()
        this.state = { intervalId: null }
    }

    componentWillUpdate(nextProps) {
        if(nextProps.started) {
            const intervalId = setInterval(this.props.tick, 1000)
        }
    }

    componentWillReceiveProps() {
        if(nextProps.started) {
            this.setState({ intervalId: intervalId })
        }
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId)
    }

    render() {
        return (
            <div>Remaning Time: { this.props.remainingTime }</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        remainingTime: state.getIn(['counter', 'remainingTime']),
        started: state.getIn(['counter', 'started'])
    }
}

const mapDispatchToProps = dispatch => {
    return {
        tick: () => dispatch(tick())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)