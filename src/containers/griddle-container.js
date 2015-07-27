import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { GriddleActions } from 'griddle-core';
import Griddle from '../griddle.js';
import PropertyHelper from '../utils/property-helper';

/* UPDATE the props to be ...state.griddle (as JSON) */
@connect(state => {
  return ({
  state: state.toJSON()
})})
export default class GriddleContainer extends Component {
  constructor(props) {
    super();
    this.state = {};
    this.state.actionCreators = bindActionCreators(GriddleActions, props.dispatch);

    const properties = PropertyHelper.propertiesToJS(
      props.children,
      props.data.length > 0 ?
        Object.keys(props.data[0]) :
        []
    );

    if(props.data) {
      this.state.actionCreators.loadData(props.data, properties);
    }
  }

  render() {
    const { state, dispatch } = this.props;

    return (
      <Griddle
        {...state}
        {...this.state.actionCreators}
        data={state.visibleData} />
    );
  }
}