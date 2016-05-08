import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { compose, shouldUpdate, getContext, mapProps } from 'recompose';


const Column = compose(
  //Only update if forceUpdate is true or the values don't match
  shouldUpdate(({ value }, nextProps) => (nextProps.value !== value || nextProps.forceUpdate === true )),
)(({ value, onMouseOver, onClick, className, style }) => (
      <td
        style={style}
        onClick={onClick}
        onMouseOver={onMouseOver}
        className={className}>
      {value}
      </td>
))

export default Column;
