"use strict";

import React from 'react';
import Flux from 'flux';
import DefaultGridWrapper from './gridWrapper';
import DefaultGridHeader from './gridHeader';
import DefaultGridContent from './gridTable';
import DefaultGridItem from './gridRow';
import DefaultGridProperty from './gridColumn';
import DefaultGridFooter from './gridFooter';

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

    return (
      <this.props.gridWrapper>
        <this.props.gridHeader/>
          <this.props.gridContent>
            {data.map(item => (
              <this.props.gridItem>
                {Object.keys(item).map(key => (
                  <this.props.gridProperty value={item[key]} />
                  )
                )}
              </this.props.gridItem>)
            )}
          </this.props.gridContent>
        <this.props.gridFooter />
      </this.props.gridWrapper>
    );
  }
}

// Configure the default components that will be used for each component.
Griddle.defaultProps = {
  gridWrapper: DefaultGridWrapper,
  gridHeader: DefaultGridHeader,
  gridContent: DefaultGridContent,
  gridItem: DefaultGridItem,
  gridProperty: DefaultGridProperty,
  gridFooter: DefaultGridFooter
};

export default Griddle;