import React, { Component } from 'react';

class UserTime extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.submitCallback}>
                    <label>
                        Enter Time:
                        <input type="number" onChange={this.props.changeCallback} />
                    </label>
                    <input type="submit" value="Submit" /> 
                </form>
            </div>
        )
    }
}

export default UserTime;