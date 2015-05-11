'use strict';

import React from 'react';

class GridTableBody extends React.Component {
  constructor(props){
    super(props);

    // We're going to have to pretend until we get this all hooked up.
    let pretendColumnHeadersFromStore = ['id', 'name'];

    this.state = {columns: pretendColumnHeadersFromStore};
  }

  render() {
    return (
        <tbody>
          {this.props.data.map(item => (
            <this.props.register.gridItem item={item} register={this.props.register}/>
            )
          )}
        </tbody>
    );
  }
}
// Configure the default props.
GridTableBody.defaultProps = {
  data: null,
  register: null
};

export default GridTableBody;