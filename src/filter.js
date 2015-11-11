import React from 'react';

class Filter extends React.Component {
  constructor(props, context) {
    super(props, context);

    this._handleChange = this._handleChange.bind(this);
  }

  render() {
    const style = this.props.styles.getStyle({
      useStyles: this.props.settings.useGriddleStyles,
      styles: this.props.styles.inlineStyles,
      styleName: 'filter'
    });

    return (
      <input type="text" name="filter" style={style} placeholder="filter" onChange={this._handleChange} />
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
