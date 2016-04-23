import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { compose, shouldUpdate, getContext, mapProps } from 'recompose';

import { getStyleProperties } from './utils/styleHelper';
import { getStyle } from './defaultStyles';

const Column = compose(
  //Only update if forceUpdate is true or the values don't match
  shouldUpdate(({ value }, nextProps) => (nextProps.value !== value || nextProps.forceUpdate === true )),

  mapProps(props => ({
    className: props.cssClassName,

    style: props.style,

    //Click callback
    handleClick: (e) => {
      if (props.onClick) {
        props.onClick(props.dataKey, props.value, props.rowIndex, props.rowData)
      };
    },

    //hover callback
    handleHover: (e) => {
      if(props.onHover) {
        props.onHover(props.dataKey, props.value, props.rowIndex, props.rowData);
      }
    },

    columnValue: (props.hasOwnProperty('customComponent') ?
            <props.customComponent
              data={props.value}
              rowData={props.rowData}
              originalData={props.originalRowData}
              rowIndex={props.rowIndex}
              absoluteRowIndex={props.absoluteRowIndex}
              extraData={props.extraData} /> :
            props.value),

    //Return all the props
    ...props
  }))
)(({ columnValue, handleHover, handleClick, className, style, dataKey, rowIndex }) => (
      <td
        style={style}
        key={dataKey}
        rowIndex={rowIndex}
        onClick={handleClick}
        onMouseOver={handleHover}
        className={className}>
      {columnValue}
      </td>

))

export default Column;
