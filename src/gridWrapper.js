'use strict';

import React from 'react';

class GridWrapper extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
export default GridWrapper;