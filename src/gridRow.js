'use strict';

import React from 'react';

class GridRow extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    debugger;
    let columns = Object.keys(this.props.item.toJSON());
    let nonChildrenValues = this.getNonChildrenValues(columns);
    let childrenContent = this.getItemChildrenContent(nonChildrenValues);
    return (
      <tr>
        {nonChildrenValues.map(value => (
            <this.context.register.gridProperty value={value} />
          )
        )}
        {childrenContent}
      </tr>
    );
  }

  getNonChildrenValues(columns) {
    return columns.map(column => this.props.item.get(column)).filter(value => typeof (value) !== 'object');
  }

  getItemChildrenContent(nonChildrenValues) {
    let childProperty = 'children'; // TODO: Load this from somewhere reasonable.

    return (this.props.item.get(childProperty)) ? (
          <tr>
            <td colSpan={nonChildrenValues.length}>
              <this.context.register.gridContent data={this.props.item.get(childProperty)} register={this.props.register} />
            </td>
          </tr>
        ) : null;
  }
}
// Configure the context types.
GridRow.contextTypes = {
  register: React.PropTypes.object
};
// Configure the default props.
GridRow.defaultProps = {
  item: null,
  register: null
};

export default GridRow;
