import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';

class ReactClock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //time: new Date().toLocaleTimeString()
    }
  }

  render() {
    return (
      <Clock className='main-clock' />
    )
  }
}

ReactDOM.render(<ReactClock /> , document.getElementById('react-clock-2'));



// old, but working-ish, clock code
function tick() {
  const element = (
    <div className="clock">
			<div className="glass"></div>
			<h1 className="main-clock">{new Date().toLocaleTimeString()}</h1>
		</div>
  );
  ReactDOM.render(
    element,
    document.getElementById('react-clock')
  );
}

//setInterval(startTime, 500);
setInterval(tick, 1000);



// var inspirationalQuotes = [
// 	'What will you do today, Napoleon?'
// ];
