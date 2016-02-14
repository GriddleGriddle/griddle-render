import React, { PropTypes } from 'react'
import { getStyleProperties } from './utils/styleHelper';

import { compose, getContext, mapProps } from 'recompose';

function getPageNumberDropdown(props) {
  if(!props.pageProperties || !props.pageProperties.maxPage ) { return; }

  //Make this nicer
  var options = [];

  for(var i = 1; i <= props.pageProperties.maxPage; i++) {
    options.push(<option value={i} key={i}>{i}</option>)
  }

  return (
    <select onChange={props.handleChange}
      value={props.pageProperties.currentPage}>
      {options}
    </select>
  );
}

const Pagination = compose(
  getContext({ utils: PropTypes.object }),

  mapProps(props => ({
    styleProperties: props.utils.getStyleProperties(props, 'pagination'),
    handleChange: (e) => props.events.getPage(parseInt(e.target.value)),
    ...props
  })),

  mapProps(props => ({
    pageNumberDropdown: getPageNumberDropdown(props),
    style: props.styleProperties.style,
    className: props.styleProperties.className,
    ...props
  }))
)(({ style, className, pageNumberDropdown, handleChange, hasNext, hasPrevious, events }) => (
  <div className={className} style={style}>
    { hasPrevious ? <button onClick={events.getPreviousPage}>Previous</button> : null }
    {pageNumberDropdown}
    { hasNext ? <button onClick={events.getNextPage}>Next</button> : null }
  </div>
))

export default Pagination;
