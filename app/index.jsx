import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';

class ReactClock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // empty
    }
  }

  render() {
    return (
      <Clock className='main-clock' />
    )
  }
}

ReactDOM.render(<ReactClock /> , document.getElementById('react-clock'));


var inspirationalQuotes = [
	'What will you do today, Napoleon?'
];
