import React from 'react';
import Flux from 'flux';
import {LocalActions, LocalDataPlugin, DataStore} from 'griddle-core';
import LocalEvents from './local-events';

//heavily influenced by https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775ter)
function AddLocalDataStore(ComposedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.dispatcher = new Flux.Dispatcher();
      this.dataStore = new DataStore(this.dispatcher, [LocalDataPlugin]);
      this.events = LocalEvents(new LocalActions(this.dispatcher));

      this.dataStore.addChangeListener(this._dataChange.bind(this));

      this.state = this._getStateFromStore();
    }

    componentDidMount() {
      if (this.props.data){
        this.events.loadData(this.props.data);
      }
    }

    render() {
      return <ComposedComponent
          {...this.props}
          {...this.state}
          events={this.events}
        />;
    }

    _getStateFromStore() {
      return {
        data: this.dataStore.getVisibleData().toJSON(),
        hasNext: this.dataStore.hasNext(),
        hasPrevious: this.dataStore.hasPrevious(),
        pageProperties: this.dataStore.getPageProperties().toJSON()
      };
    }

    _dataChange() {
      this.setState(this._getStateFromStore());
    }

  }
}

export default AddLocalDataStore
