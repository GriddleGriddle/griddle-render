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
    //todo: Right now we're just setting this to the index. This won't work in the long run
    //      we need this to be a row id or something else -- index may be okay if nothing else is specified but seems bad
    var rows = this.props.data.map((data, index) => <Row rowData={data} rowIndex={index} />)

    return (
      <tbody>
        {rows}
      </tbody>
    )
  }
}

export default TableBody;
