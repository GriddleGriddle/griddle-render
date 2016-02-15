import React from 'react';
import { getStyleProperties } from './utils/styleHelper';

import { compose, getContext, mapProps, shouldUpdate } from 'recompose';

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

class Settings extends React.Component {
  render() {

    const keys = Object.keys(this.props.renderProperties.columnProperties);
    const { style, className } = getStyleProperties(this.props, 'settings');

    var columns = this.props.allColumns.map(column =>
      <CheckItem
        toggleColumn={this.props.events.toggleColumn}
        name={column}
        text={this._getDisplayName(column)}
        checked={keys.indexOf(column) > -1} />);

    return (
      <div style={style} className={className}>
        {columns}
        <PageSize setPageSize={this.props.events.setPageSize}/>
      </div>
    );
  }

  _getDisplayName = (column) => {
    const { renderProperties } = this.props;
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
}

Settings.propTypes = {
  allColumns: React.PropTypes.arrayOf(React.PropTypes.string),
  visibleColumns: React.PropTypes.arrayOf(React.PropTypes.node)
};

export default Settings;
