'use strict';

import React from 'react';
import Row from './row';

class TableBody extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.data !== nextProps.data;
  }

  render() {
    var rows = this.props.data.map(data => <Row rowData={data} />);

    return (
      <tbody>
        {rows}
      </tbody>
    )
  }
}

export default TableBody;
