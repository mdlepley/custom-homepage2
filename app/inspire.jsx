import React from 'react'

export default class Inspire extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [
        {
          quote: 'What will you do today, Napoleon?',
          author: 'kid on the bus'
        }, {
          quote: 'Get out and live your life!',
          author: 'French Robin Williams'
        }
      ]
    }
  }

  componentWillMount() {
    //pickQuote();
  }

  pickQuote() {
    return '';
  }

  getRandomArbitrary(min, max) {
    return Math.floor(Math.random(0, 1));
  }

  render() {
    return (
      <div className="inspire">
        <span className="quote">{ this.state.quotes[0].quote }</span>
        <span className="author">{ this.state.quotes[0].author }</span>
      </div>
    )
  }

}

Inspire.propTypes = {
  quotes: React.PropTypes.array
}

Inspire.defaultProps = {
  quotes: []
}
