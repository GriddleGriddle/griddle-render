'use strict';

import React from 'react';

class GridRow extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let columns = Object.keys(this.props.item);
    let nonChildrenValues = this.getNonChildrenValues(columns);
    let childrenContent = this.getItemChildrenContent(nonChildrenValues);
    return (
      <tr>
        {nonChildrenValues.map(value => (
            <this.props.register.gridProperty value={value} />
          )
        )}
        {childrenContent}
      </tr>
    );
  }

  getNonChildrenValues(columns) {
    return columns.map(column => this.props.item[column]).filter(value => typeof (value) !== 'object');
  }

  getItemChildrenContent(nonChildrenValues) {
    let childProperty = 'children'; // TODO: Load this from somewhere reasonable.

    return (!!this.props.item[childProperty]) ? (
          <tr>
            <td colSpan={nonChildrenValues.length}>
              <this.props.register.gridContent data={this.props.item[childProperty]} register={this.props.register} />
            </td>
          </tr>
        ) : null;
  }
}
// Configure the default props.
GridRow.defaultProps = {
  item: null,
  register: null
};

export default GridRow;