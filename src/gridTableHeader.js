'use strict';

import React from 'react';

class GridTableHeader extends React.Component {
  constructor(props){
    super(props);

    // We're going to have to pretend until we get this all hooked up.
    let pretendColumnHeadersFromStore = ['id', 'name'];

    this.state = {columns: pretendColumnHeadersFromStore};
  }

  render() {
    return (
        <thead>
          <tr>
            {this.state.columns.map(column => (
              <th>{column}</th>)
            )}
          </tr>
        </thead>
    );
  }
}

export default GridTableHeader;