import React from 'react'


export default class Counter extends React.Component {
    
    constructor() {
        super()
        this.state = { remaningTime: 30, intervalId: null }
        this.tick = this.tick.bind(this)
    }

    componentDidMount() {
        const intervalId = setInterval(this.tick, 1000)
        this.setState({ intervalId: intervalId })
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId)
    }

    tick() {
        this.setState({ remaningTime: this.state.remaningTime - 1 })
    }

    render() {
        return (
            <div>Remaning Time: { this.state.remaningTime }</div>
        )
    }
}