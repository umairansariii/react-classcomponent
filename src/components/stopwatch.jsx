import React from "react";

class Stopwatch extends React.Component {
    constructor() {
        super()
        this.state = {
            display: '00:00:00',
            milliseconds: 0,
            laps: [],
            running: false
        }
    }
    format(milliseconds) {
        const mm = Math.floor(milliseconds / 6000) % 60
        const ss = Math.floor(milliseconds / 100) % 60
        const ms = milliseconds % 100

        return `${mm<10?'0'+mm:mm}:${ss<10?'0'+ss:ss}:${ms<10?'0'+ms:ms}`
    }
    tick() {
        this.setState({
            milliseconds: this.state.milliseconds + 1,
            display: this.format(this.state.milliseconds),
        })
    }
    start() {
        if (!this.state.running) {
            this.setState({ running: true })
            this.timer = setInterval(() => this.tick(), 10)
        }
    }
    stop() {
        if (this.state.running) {
            this.setState({ running: false })
            clearInterval(this.timer)
        }
    }
    flag() {
        if (this.state.running) {
            this.state.laps.unshift(this.format(this.state.milliseconds))
        }
    }
    reset() {
        this.setState({
            display: '00:00:00',
            milliseconds: 0,
            laps: [],
            running: false,
        })
        clearInterval(this.timer)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        return (
            <div className="stopwatch">
                <div className="timer">{this.state.display}</div>

                <div className="buttons">
                    {
                        this.state.running ?
                        <button onClick={() => this.flag()} className='run'>
                            <img src='./icons/laps.svg' alt='icon'/> Laps
                        </button> : 
                        <button onClick={() => this.start()}>
                            <img src='./icons/start.svg' alt='icon'/> Start
                        </button>
                    }
                    <button onClick={() => this.stop()} className={this.state.running? 'stop':''}>
                        <img src='./icons/stop.svg' alt='icon'/> Stop
                    </button>
                    <button onClick={() => this.reset()}>
                        <img src='./icons/reset.svg' alt='icon'/> Reset
                    </button>
                </div>

                <div className='laps'>
                    <ol>{this.state.laps.map((lap,i) => <li key={i}>{lap}</li>)}</ol>
                </div>
            </div>
        )
    }
};

export default Stopwatch;