import React, { PropTypes } from 'react';
import { getStyleProperties }  from './utils/styleHelper';

import { compose, shouldUpdate, getContext, mapProps } from 'recompose';

const Filter = compose(
  //this should not update
  shouldUpdate(() => (false)),

  //we are using the utils object from context
  getContext({ utils: PropTypes.object }),

  //Get styleProperties for the next mapProps
  mapProps((props) => ({
    styleProperties: props.utils.getStyleProperties(props, 'filter'),

    ...props
  })),

  mapProps((props) => ({
    handleChange: ((e) => { props.events.setFilter(e.target.value) }),

    style: props.styleProperties.style,

    className: props.styleProperties.className,

    placeholder: props.settings.filterPlaceholderText || "Filter",
  }))
)(({className, style, handleChange, placeholder}) => (
  <input
    type="text"
    name="filter"
    className={className}
    style={style}
    placeholder={placeholder}
    onChange={handleChange}
  />
));

Filter.propTypes = {
  setFilter: React.PropTypes.func
}

export default Filter;
