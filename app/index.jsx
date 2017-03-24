import React from 'react'
import ReactDOM from 'react-dom'
import Clock from './clock'
import Inspire from './inspire'

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

class ReactInspire extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <Inspire className='inspirational-quote' />
    )
  }
}

ReactDOM.render(<ReactClock /> , document.getElementById('react-clock'));
ReactDOM.render(<ReactInspire />, document.getElementById('react-inspire'));
