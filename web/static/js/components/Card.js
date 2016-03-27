import React, { Component, PropTypes } from 'react';

export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className="Card">
        {this.props.rank} of {this.props.suit}
      </span>
    );
  }
}

Card.propTypes = {
  rank: PropTypes.string.isRequired,
  suit: PropTypes.string.isRequired
};
