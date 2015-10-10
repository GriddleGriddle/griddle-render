import React, { Component } from 'react';
import GriddleContainer from './griddle-container';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import {Reducers, States, GriddleReducer} from 'griddle-core';
import { GriddleActions } from 'griddle-core';
import { GriddleHelpers as Helpers } from 'griddle-core'

export default class GriddleRedux extends Component {
  constructor(props) {
    super(props);

    //TODO: Switch this around so that the states and the reducers come in as props.
    //      if nothing is specified, it should default to the local one maybe
    const griddleReducer = GriddleReducer(
      /* griddle default states for local data */
      [States.data, States.local, States.position, States.selectionState],
      /* griddle default reducers */
      [Reducers.test, Reducers.data, Reducers.local, Reducers.position, Reducers.selection],
      /* helper methods */
      [Helpers.data, Helpers.local, Helpers.position]
    );

    // Use the thunk middleware to allow for multiple dispatches in a single action.
    const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

    this.store = createStoreWithMiddleware(griddleReducer);
  }

  render() {
    return (
      <Provider store={this.store}>
        {() => <GriddleContainer {...this.props}>
          {this.props.children}
        </GriddleContainer>}
      </Provider>
    );
  }

  static PropTypes = {
    data: React.PropTypes.array.isRequired
  }
}