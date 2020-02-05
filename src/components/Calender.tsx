import React from "react";
import './Calender.scss'

interface CalenderState {
  date: Date;
}

class Calender extends React.Component<{}, CalenderState> {
  timerID?: NodeJS.Timeout;

  state:CalenderState = {
    date: new Date()
  };

  componentDidMount() : void {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    if (this.timerID === undefined)
      return;

    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="Calender">
        <h2>{this.state.date.getFullYear()}년 {this.state.date.getMonth()}월 {this.state.date.getDay()}일</h2>
        <h4>{this.state.date.getHours()}시 {this.state.date.getMinutes()}분 {this.state.date.getSeconds()}초</h4>
      </div>
    );
  }
}

export default Calender;
