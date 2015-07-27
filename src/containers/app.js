import React, { Component } from 'react';
import GriddleContainer from './griddle-container';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import {Reducers, States, GriddleReducer} from 'griddle-core';
import { GriddleActions } from 'griddle-core';

/* this looks a little like angular DI ¯\_(ツ)_/¯*/
const griddleReducer = GriddleReducer(
  /* griddle default states for local data */
  [States.data, States.local],
  /* griddle default reducers */
  [Reducers.data, Reducers.local]
);

/* set up the redux store */
const combinedReducer = combineReducers(griddleReducer);
const store = createStore(griddleReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <GriddleContainer data={this.props.data}/>}
      </Provider>
    )
  }
}