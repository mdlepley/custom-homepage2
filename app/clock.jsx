import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="clock">
  			<div className="glass"></div>
  			<h1 className="main-clock">{ this.state.date.toLocaleTimeString() }</h1>
  		</div>
    )
  }
}

Clock.propTypes = {
  date: React.PropTypes.string
};

Clock.defaultProps = {
  date: new Date().toLocaleTimeString()
};
