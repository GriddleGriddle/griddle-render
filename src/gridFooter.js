'use strict';

import React from 'react';

class GridFooter extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>This is a footer</div>
    );
  }
}
// Configure the default props.
GridFooter.defaultProps = {
  register: null
};


export default GridFooter;