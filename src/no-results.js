import React, { PropTypes } from 'react';
import {getStyleProperties}  from './utils/styleHelper';

import { compose, getContext, mapProps } from 'recompose';

const NoResults = compose(
  getContext({ utils: PropTypes.object }),

  mapProps(props => ({
    styleProperties: props.utils.getStyleProperties(props, 'noResults'),
    ...props
  })),

  mapProps(props => ({
    style: props.styleProperties.style,
    className: props.styleProperties.className
  }))
)(({ style, className }) => (
  <div style={style} className={className}>
    <h4>No results found.</h4>
  </div>
))

export default NoResults;
