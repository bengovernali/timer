import React, { Component } from 'react';
import './App.css';
import Countdown from './countdown.js';
import UserTime from './UserTime.js';
import Pause from './pause.js';
import Reset from './reset.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { field: 0, time: 0, count: 0, run: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  counter = 0;

  updateTime() {
    if ((this.state.count > 0) && (this.state.run === true)) {
      const newTime = this.state.count - 1;
      this.setState(() => {
        return {count: newTime};
      })
    }
    else {
      clearInterval(this.counter);
    }
  }

  handleChange(event) {
    this.setState({field: event.target.value});
  }

  handleSubmit(event) {
    this.setState({time: this.state.field, count: this.state.field, run: true});
    event.preventDefault();
    this.counter = setInterval(() => {
        this.updateTime()}, 1000);
    return this.counter;
  }

  pause() {
    if (this.state.run === true) {
      this.setState({run: false});
    }
    else {
      this.setState({run: true});
      this.counter = setInterval(() => {
        this.updateTime()}, 1000);
    }
  }

  reset() {
    this.pause();
    this.setState({count: this.state.time});
  }

  render() {
    return (
      <div className="App">
        <Countdown time={this.state.count} />
        <UserTime submitCallback={(event) => this.handleSubmit(event)} changeCallback={(event) => this.handleChange(event)} />
        <Pause pause={() => this.pause()} />
        <Reset reset={() => this.reset()} />
      </div>
    )
  };
}

export default App;
