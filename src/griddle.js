"use strict";

import React from 'react';
import Flux from 'flux';
import ComponentRegister from './componentRegister';

class Griddle extends React.Component {
  constructor(props, context){
    super(props, context);

    this.dispatcher = new Flux.Dispatcher();
    this.state = {
    // Build a component register to allow for reasonable overrides
      register: new ComponentRegister(this.props.componentOverrides)
    };
    
    // this.dataStore.addChangeListener(this.dataChange.bind(this));
  }

  getChildContext() {
    return {
      register: this.state.register
    };
  }

  componentDidMount() {
    //if (this.props.data){
    //  this.localActions.loadData(this.props.data);
    //}
  }

  dataChange() {
    // this.setState({dataState: this.dataStore.getState()});
  }

  render() {
    const data = [{
      id: '1',
      name: 'one',
      children: [{
        id: '11',
        name: 'eleven'
      },{
        id: '12',
        name: 'twelve'
      },{
        id: '13',
        name: 'thirteen'
      }]
    }, {
      id: '2',
      name: 'two',
      children: [{
          id: '11',
          name: 'eleven'
        },{
          id: '12',
          name: 'twelve'
        },{
          id: '13',
          name: 'thirteen'
        }]
    }, {
      id: '3',
      name: 'three',
    }];
    if(data.length === 0) { return <h1>NOTHING!</h1>}

    return (
      <this.state.register.gridWrapper>
        <this.state.register.gridHeader/>
        <this.state.register.gridContent data={data}/>
        <this.state.register.gridFooter/>
      </this.state.register.gridWrapper>
    );
  }
}
// Configure the child context types.
Griddle.childContextTypes = {
  register: React.PropTypes.object
};
// Configure the default props.
Griddle.defaultProps = {
  componentOverrides: {}
};

export default Griddle;