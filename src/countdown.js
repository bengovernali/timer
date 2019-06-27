import React, { Component } from 'react';

class Countdown extends Component {
    render() {
        return (
            <div>
                <p>Remaining Time: {this.props.time} s</p>
            </div>
        )
    }
}

export default Countdown;