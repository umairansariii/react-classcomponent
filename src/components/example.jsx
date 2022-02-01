import React from "react";

class Tracker extends React.Component {
    constructor(props) {
        super(props)
        this.state = { seconds: 0 }
    }
    update() {
        this.setState({
            seconds: this.state.seconds + 1
        })
        console.log("I'm alive 💀")
    }
    componentDidMount() {
        this.timer = setInterval(() => this.update(), 1000)
    }
    render() {
        return (
            <h1>{this.state.seconds} seconds on the page.</h1>
        )
    }
};

export default Tracker;