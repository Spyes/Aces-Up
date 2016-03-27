import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import { setupSocket } from '../socket';
import GameApp from './GameApp';

const store = configureStore();
setupSocket();

export default class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <GameApp />
      </Provider>
    );
  }
}
