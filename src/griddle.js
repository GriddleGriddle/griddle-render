"use strict";

import React from 'react';
import Flux from 'flux';
import ComponentRegister from './componentRegister';

class Griddle extends React.Component {
  constructor(props){
    super(props);

    this.dispatcher = new Flux.Dispatcher();

    this.state = {
      register: new ComponentRegister(this.props.componentOverrides)
    };
    
    // this.dataStore.addChangeListener(this.dataChange.bind(this));
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
      <this.state.register.gridWrapper register={this.state.register}>
        <this.state.register.gridHeader register={this.state.register}/>
        <this.state.register.gridContent data={data} register={this.state.register} />
        <this.state.register.gridFooter />
      </this.state.register.gridWrapper>
    );
  }
}
// Configure the default props.
Griddle.defaultProps = {
  componentOverrides: {}
};

export default Griddle;