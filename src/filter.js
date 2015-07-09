"use strict";

import React from 'react';

class Filter extends React.Component {
  constructor(props, context) {
    super(props, context);

    this._handleChange = this._handleChange.bind(this);
  }

  render() {
    return (
      <div>
        <input type="text" name="filter" placeholder="filter" onChange={this._handleChange} />
      </div>
    );
  }

  _handleChange = (e) => {
    //TODO: debounce this
    this.props.events.setFilter(e.target.value);
  }
}

Filter.propTypes = {
  setFilter: React.PropTypes.func
}

export default Filter;
