"use strict";

import React from 'react';
import Flux from 'flux';
import DefaultGridWrapper from './gridWrapper';

class Griddle extends React.Component {
  constructor(props){
    super(props);

    this.dispatcher = new Flux.Dispatcher();

    this.state = {};
    
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
      name: 'one'
    }, {
      id: '2',
      name: 'two'
    }];
    if(data.length === 0) { return <h1>NOTHING!</h1>}

    var rows =
      data.map(item => (<tr>
            {Object.keys(item).map(key => 
              (<td>{item[key]}</td>)
            )}
          </tr>)
      );

    return (
      <this.props.gridWrapper>
        <table>
          {rows}
        </table>
      </this.props.gridWrapper>);

  }
}
// Configure the default props.
Griddle.defaultProps = {
  gridWrapper: DefaultGridWrapper
};

export default Griddle;