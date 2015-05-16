'use strict';

import React from 'react';

class GridTableBody extends React.Component {
  constructor(props){
    super(props);
debugger;
    // We're going to have to pretend until we get this all hooked up.
    let pretendColumnHeadersFromStore = ['id', 'name'];

    this.state = {columns: pretendColumnHeadersFromStore};
  }

  render() {
    debugger;
    return (
        <tbody>
          {this.props.data.map(item => (
            <this.context.register.gridItem item={item} register={this.props.register}/>
            )
          )}
        </tbody>
    );
  }
}
// Configure the context types.
GridTableBody.contextTypes = {
  register: React.PropTypes.object
};

// Configure the default props.
GridTableBody.defaultProps = {
  data: null
};

export default GridTableBody;
