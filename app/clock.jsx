import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }

  render() {
    return (
      <div>{ this.state.time }</div>
    )
  }
}

Clock.propTypes = {
  time: React.PropTypes.string
};

Clock.defaultProps = {
  time: new Date().toLocaleTimeString()
};
