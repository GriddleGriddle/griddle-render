import React from 'react'
import { getStyleProperties } from './utils/styleHelper';

class Pagination extends React.Component {
  constructor(props, context) {
    super(props, context);

    this._handleChange = this._handleChange.bind(this);
  }

  render() {
    const { style, className } = getStyleProperties(this.props, 'pagination');
    const { hasPrevious, hasNext, events } = this.props;
    const { getPreviousPage, getNextPage } = events;

    return (<div className={className} style={style}>
      {hasPrevious ? <button onClick={getPreviousPage}>Previous</button> : null }
      {this._getSelect()}
      {hasNext ? <button onClick={getNextPage}>Next</button> : null }
    </div>);
  }

  _handleChange(e) {
    this.props.events.getPage(parseInt(e.target.value));
  }

  _getSelect() {
    if( !this.props.pageProperties || !this.props.pageProperties.maxPage ) { return; }
    //Make this nicer
    var options = [];

    for(var i = 1; i <= this.props.pageProperties.maxPage; i++) {
      options.push(<option value={i} key={i}>{i}</option>)
    }

    return <select onChange={this._handleChange} value={this.props.pageProperties.currentPage}>{options}</select>
  }
}

export default Pagination;
