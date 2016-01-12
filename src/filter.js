import React from 'react';
import { getStyleProperties }  from './utils/styleHelper';

class Filter extends React.Component {
  constructor(props, context) {
    super(props, context);

    this._handleChange = this._handleChange.bind(this);
  }

  render() {
    const {style, className } = getStyleProperties(this.props, 'filter');

    return (
      <input
        type="text"
        name="filter"
        className={className}
        style={style}
        placeholder="filter"
        onChange={this._handleChange} />
    );
  }

  _handleChange = (e) => {
    //TODO: debounce this
    this.props.events.setFilter(e.target.value);
  }
}

Filter.propTypes = {
  setFilter: React.PropTypes.func
}

export default Filter;
