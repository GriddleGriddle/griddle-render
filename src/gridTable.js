'use strict';

import React from 'react';

class GridTable extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <table>
        <this.props.register.gridContentHeader />
        <tbody>
          {this.props.data.map(item => (
            <this.props.register.gridItem item={item} register={this.props.register}/>
            )
          )}
        </tbody>
      </table>
    );
  }
}
// Configure the default props.
GridTable.defaultProps = {
  data: null,
  register: null
};

export default GridTable;