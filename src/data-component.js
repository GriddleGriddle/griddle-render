import React from 'react';
import Flux from 'flux';
import {LocalActions, LocalDataPlugin, DataStore} from 'griddle-core';
import LocalEvents from './local-events';

//heavily influenced by https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775ter)
function AddLocalDataStore(ComposedComponent) {
  return class extends React.Component {
    constructor(props) {
      this.dispatcher = new Flux.Dispatcher();
      this.dataStore = new DataStore(this.dispatcher, [LocalDataPlugin]);
      this.events = LocalEvents(new LocalActions(this.dispatcher));

      this.dataStore.addChangeListener(this._dataChange.bind(this));

      this.state = {};
      this.state.data = this.dataStore.getVisibleData();
      this.state.hasNext = false;
      this.state.hasPrevious = false;
    }

    componentDidMount() {
      if (this.props.data){
        this.events.loadData(this.props.data);
      }
    }

    render() {
      return <ComposedComponent
          {...this.props}
          data={this.state.data.toJSON()}
          events={this.events}
        />;
    }

    _dataChange() {
      this.setState({
        data: this.dataStore.getVisibleData(),
        hasNext: this.dataStore.hasNext(),
        hasPrevious: this.dataStore.hasPrevious()
      });
    }

  }
}

export default AddLocalDataStore
