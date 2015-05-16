'use strict';

import React from 'react';

class GridTable extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  render() {
    return (
      <table>
        <this.context.register.gridContentHeader />
        <tbody>
          {this.props.data.map(item => (
            <this.context.register.gridItem item={item} register={this.props.register}/>
            )
          )}
        </tbody>
      </table>
    );
  }
}
// Configure the context types.
GridTable.contextTypes = {
  register: React.PropTypes.object
};
// Configure the default props.
GridTable.defaultProps = {
  data: null
};

export default GridTable;
