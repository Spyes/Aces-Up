import React, { Component, PropTypes } from 'react';
import Card from './Card';

export default class Hand extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var cards = this.props.cards.map(function (card, key) {
      return (
        <span key={key}>
          <Card suit={card.suit} rank={card.rank} />
        </span>
      );
    });
    return (
      <div className="Hand">
        {cards}
      </div>
    );
  }
}

Hand.propTypes = {
  cards: PropTypes.array.isRequired
};
