import React from 'react'

export default class Inspire extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [
        {
          text: 'What will you do today, Napoleon?',
          author: 'kid on the bus'
        }, {
          text: 'Get out and live your life!',
          author: 'French Robin Williams'
        }, {
          text: 'You\'re a beautiful unicorn with a horn that can pierce the sky.',
          author: 'Melanie'
        }
      ],
      quote: function() {
        return this.quotes[this.getRandomArbitrary(0, this.quotes.length)];
      }
    }
  } // end constructor

  getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (min - max));
  }

  getQuote() {
    const n = this.getRandomArbitrary(0, this.state.quotes.length);
    return this.state.quotes[n];
  }

  renderQuote() {
    var quote = this.getQuote();
    return(
      <div>
        <p className="quote">{ quote.text }</p>
        <p className="author">{ quote.author }</p>
      </div>
    )
  }

  render() {
    return (
      <div className="inspire">
        <p className="quote">{ this.state.quote.text }</p>
        <p className="author">{ this.state.quote.author }</p>
      </div>
    )
  }

}

Inspire.propTypes = {
  quotes: React.PropTypes.array,
  quote: React.PropTypes.func
}

Inspire.defaultProps = {
  quotes: [],
  quote: function() {}
}
