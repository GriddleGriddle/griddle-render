import React, { PropTypes } from 'react';
import {getStyleProperties}  from './utils/styleHelper';

import { compose, getContext, mapProps } from 'recompose';

const Loading = compose(
  getContext({ utils: PropTypes.object }),

  mapProps(props => ({
    styleProperties: props.utils.getStyleProperties(props, 'loading'),
    ...props
  })),

  mapProps(props => ({
    style: props.styleProperties.style,
    className: props.styleProperties.className
  }))
)(({ style, className }) => (
  <tr>
    <td>
      <div style={style} className={className}>
        <h4>Loading...</h4>
      </div>
    </td>
  </tr>
))

export default Loading;
