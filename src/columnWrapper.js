import React, { PropTypes } from 'react';

import { compose, shouldUpdate, getContext, mapProps } from 'recompose';

import { getStyleFromObject, getClassNameFromObject, getDataForColumn } from './utils/contextUtil';

const ColumnWrapper = compose(
  getContext({
    styles: PropTypes.object.isRequired,
    classNames: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    components: PropTypes.object.isRequired,
    events: PropTypes.object.isRequired
  }),

  mapProps(props => ({
    style: getStyleFromObject('column', props.styles),
    className: getClassNameFromObject('column', props.classNames),
    columnValue: getDataForColumn(props.field, props.griddleKey, props.data),
    onClick: () => { events.onColumnClick(props.griddleKey, props.field) },
    onHover: () => { events.onColumnHover(props.griddleKey, props.field) },
    ...props
  }))
)(({ style, className, columnValue, onClick, onHover, components }) => (
  <components.Column
    style={style}
    className={className}
    value={columnValue}
    onClick={onClick}
    onHover={onHover}
  />
))

export default ColumnWrapper;
