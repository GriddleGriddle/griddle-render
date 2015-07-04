'use strict';

import React from 'react';
import Flux from 'flux';
import {LocalActions, LocalDataPlugin, DataStore} from 'griddle-core';
import LocalEvents from './local-events';
import PropertyHelper from './utils/property-helper';

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
        var properties = PropertyHelper.propertiesToJS(this.props.children, this.props.data.length > 0 ? Object.keys(this.props.data[0]) : []);
        this.events.loadData(this.props.data, properties);
      }
    }

    render() {
      return <ComposedComponent
          {...this.state}
          {...this.props}
          events={this.events}
        />;
    }

    _getStateFromStore() {
      return {
        data: this.dataStore.getVisibleData().toJSON(),
        hasNext: this.dataStore.hasNext(),
        hasPrevious: this.dataStore.hasPrevious(),
        pageProperties: this.dataStore.getPageProperties().toJSON(),
        columnTitles: this.dataStore.getColumnTitles(),
        columnProperties: this.dataStore.getColumnProperties(),
        //this gets all the columns that are possible to display
        allColumns: this.dataStore.getAllPossibleColumns().toJSON()
      };
    }

    _dataChange() {
      this.setState(this._getStateFromStore());
    }
  };
}

export default AddLocalDataStore;
