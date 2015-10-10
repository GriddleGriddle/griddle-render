import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { GriddleActions } from 'griddle-core';
import PropertyHelper from '../utils/property-helper';

@connect(state => {
  return {
    state: state.toJSON()
  };
})

export var GriddleContainer = ComposedComponent => class extends Component {
  static defaultProps = {
    dataKey: 'visibleData'
  }

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
    const { state, dispatch, dataKey } = this.props;

    return (
      <ComposedComponent
        {...state}
        components={this.props.components}
        {...this.state.actionCreators}
        data={state[dataKey]} />
    );
  }
}
