import React, { Component } from 'react';
import GriddleContainer from './griddle-container';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import {Reducers, States, GriddleReducer} from 'griddle-core';
import { GriddleActions } from 'griddle-core';


export default class App extends Component {
  constructor(props) {
    super(props);

    //TODO: Switch this around so that the states and the reducers come in as props.
    //      if nothing is specified, it should default to the local one maybe
    const griddleReducer = GriddleReducer(
      /* griddle default states for local data */
      [States.data, States.local],
      /* griddle default reducers */
      [Reducers.data, Reducers.local]
    );

    /* set up the redux store */
    const combinedReducer = combineReducers(griddleReducer);
    this.store = createStore(griddleReducer);
  }

  render() {
    return (
      <Provider store={this.store}>
        {() => <GriddleContainer data={this.props.data}/>}
      </Provider>
    )
  }
}