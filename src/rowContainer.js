import React, { PropTypes } from 'react';

import { getContext, compose, mapProps } from 'recompose';
import { getStyleFromObject, getClassNameFromObject } from './utils/contextUtil';

import Row from './row';

const RowContainer = compose(
  getContext({
    style: PropTypes.object.isRequired,
    className: PropTypes.object.isRequired
  }),

  mapProps(props => ({
    style: getStyleFromObject('row', props.style),

    className: getClassNameFromObject('row', props.className),

    ...props
  }))
)(props => <Row {...props});

export default RowContainer;
