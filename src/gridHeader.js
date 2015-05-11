'use strict';

import React from 'react';

class GridHeader extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>This is a header</div>
    );
  }
}
// Configure the default props.
GridHeader.defaultProps = {
  register: null
};

export default GridHeader;