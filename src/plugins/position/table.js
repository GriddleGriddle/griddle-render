'use strict';

import React, { Component, PropTypes } from 'react';

export default PositionTable => class extends Component {
  static PropTypes = {
    events: PropTypes.object.isRequired
  }

  _scroll = () => {
    if (this.refs.scrollable) {
      let scrollableNode = this.refs.scrollable.getDOMNode();
      this.props.events.setScrollPosition(scrollableNode.scrollLeft, scrollableNode.scrollWidth, scrollableNode.scrollTop, scrollableNode.scrollHeight);
    }
  }

  render() {
    const { currentPosition } = this.props;

    const wrapperStyle = {
      'height': currentPosition.tableHeight + 'px',
      'width': currentPosition.tableWidth + 'px',
      'overflow': 'scroll'
    };

    return (
      <div ref="scrollable" onScroll={this._scroll} style={wrapperStyle}>
        <PositionTable {...this.props} />
      </div>
    );
  }
}
