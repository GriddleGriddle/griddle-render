'use strict';

import React, { Component, PropTypes } from 'react';

export default PositionTable => class extends Component {
  static PropTypes = {
    events: PropTypes.object.isRequired
  }

  scroll(e) {
    if (this.refs.scrollable) {
      let scrollableNode = this.refs.scrollable.getDOMNode();
      this.props.events.scroll(scrollableNode.scrollLeft, scrollableNode.scrollWidth, scrollableNode.scrollTop, scrollableNode.scrollHeight);
    }
  }

  render() {
    const { placement, currentPosition } = this.props;

    const wrapperStyle = {
      'height': currentPosition.tableHeight + 'px',
      'width': currentPosition.tableWidth + 'px',
      'overflow': 'scroll',
    };

    return (
      <div ref="scrollable" onScroll={this.scroll.bind(this)} style={wrapperStyle}>
        <PositionTable {...this.props} />
      </div>
    );
  }
}
