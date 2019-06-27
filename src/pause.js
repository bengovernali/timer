import React, { Component } from 'react';

class Pause extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.pause}>Pause/Resume</button>
            </div>
        )
    }
}

export default Pause;