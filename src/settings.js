import React, { PropTypes } from 'react';
import { getStyleProperties } from './utils/styleHelper';

import { compose, getContext, mapProps, shouldUpdate } from 'recompose';

function getColumnDisplayName(props, column) {
  const { renderProperties } = props;

  if(renderProperties.columnProperties.hasOwnProperty(column)) {
    return renderProperties.columnProperties[column].hasOwnProperty('displayName') ?
      renderProperties.columnProperties[column].displayName :
      column
  } else if (renderProperties.hiddenColumnProperties.hasOwnProperty(column)) {
    return renderProperties.hiddenColumnProperties[column].hasOwnProperty('displayName') ?
      renderProperties.hiddenColumnProperties[column].displayName :
      column
  }

  return column;
}

const CheckItem = mapProps(props => ({
  shouldUpdate: (() => false),

  handleClick: () => props.toggleColumn(props.name),
  ...props
}))(({ name, checked, value, text, handleClick}) => (
  <label onClick={handleClick}>
    <input type="checkbox" checked={checked} name={name} />
    {text}
  </label>
))

const PageSize = compose(
  mapProps(props => ({
    defaultSizes: [5, 10, 20, 30, 50, 100],
    handleChange: (e) => { props.setPageSize(parseInt(e.target.value)) },
    ...props
  })),
  mapProps(props => ({
    options: props.defaultSizes.map(size => <option value={size}>{size}</option>),
    ...props
  }))
)(({ handleChange, options }) => (
  <select name="pageSize" onChange={handleChange}>
    {options}
  </select>
));

const Settings = compose(
  getContext({ utils: PropTypes.object }),

  mapProps(props => ({
    styleProperties: props.utils.getStyleProperties(props, 'settings'),
    keys: Object.keys(props.renderProperties.columnProperties),
    ...props
  })),

  mapProps(props => ({
    style: props.styleProperties.style,
    className: props.styleProperties.className,
    columns: props.renderableColumns.map(column =>
      <CheckItem
        toggleColumn={props.events.toggleColumn}
        name={column}
        text={getColumnDisplayName(props, column)}
        checked={props.keys.indexOf(column) > -1} />
    ),
    setPageSize: props.events.setPageSize
  }))
)(({ style, className, columns, setPageSize}) => (
  <div style={style} className={className}>
    {columns}
    <PageSize setPageSize={setPageSize}/>
  </div>
));

export default Settings;
