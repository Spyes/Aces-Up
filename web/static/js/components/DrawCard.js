import React, { Component } from 'react';
import { dealHand } from '../actions';
import { connect } from 'react-redux';

class DrawCard extends Component {
  constructor(props) {
    super(props);
    this.onClickDrawCard = this.onClickDrawCard.bind(this);
  }

  onClickDrawCard() {
    let { dispatch } = this.props;
    dispatch(dealHand());
  }
  
  render() {
    return (
        <button className="btn btn-success" onClick={this.onClickDrawCard}>Draw Card</button>
    );
  }
}

export default connect()(DrawCard);
