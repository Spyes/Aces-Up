import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Hand from '../components/Hand';
import DrawCard from '../components/DrawCard';

class GameApp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
  }

  render() {
    return (
      <div className="GameApp">
        <Hand cards={this.props.hand || []} />
        <DrawCard />
      </div>
    );
  }
}

GameApp.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(GameApp);
