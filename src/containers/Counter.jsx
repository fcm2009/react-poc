import React from 'react'
import { connect } from 'react-redux'
import { tick } from '../actions'

class Counter extends React.Component {
    
    constructor() {
        super()
        this.state = { intervalId: null }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.started && !this.props.started) {
            const intervalId = setInterval(this.props.tick, 1000)
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
        remainingTime: state.counter.get('remainingTime'),
        started: state.counter.get('started')
    }
}

const mapDispatchToProps = dispatch => {
    return {
        tick: () => dispatch(tick())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)