import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { compose, shouldUpdate, getContext, mapProps } from 'recompose';

import { getStyleProperties } from './utils/styleHelper';


const Column = compose(
  //Only update if forceUpdate is true or the values don't match
  shouldUpdate(({ value }, nextProps) => (nextProps.value !== value || nextProps.forceUpdate)),

  //We are using the following contexts:
  getContext({ yo: PropTypes.string}),

  //Build new props in addition to the ones that are passed in
  mapProps( props => ({
    classNames: classnames(getStyleProperties(props, 'column'), props.cssClassName),

    //This is the inline styles object to use
    columnStyles: props.styles.getStyle({
      styles: props.styles.inlineStyles,
      styleName: 'column',
      mergeStyles: {
        ...((props.width || props.alignment || props.styles) ?
          Object.assign({ width: props.width || null,
            textAlign: props.alignment }) : {})
      }
    }),

    //Click callback
    handleClick: (e) => {
      if (props.onClick) { props.onClick(e) };

      props.events.columnClick(props.dataKey, props.value, props.rowIndex, props.rowData);
    },

    //hover callback
    handleHover: (e) => {
      props.events.columnHover(props.dataKey, props.value, props.rowIndex, props.rowData);
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
)(({ columnValue, handleHover, handleClick, classNames, columnStyles, dataKey, rowIndex }) => (
      <td
        style={columnStyles}
        key={dataKey}
        rowIndex={rowIndex}
        onClick={handleClick}
        onMouseOver={handleHover}
        className={classNames}>
      {columnValue}
      </td>

))

export default Column;
