import React from 'react';
import { getStyleProperties } from './utils/styleHelper';

class Column extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    //TODO: this is temporary -- we'll need to merge styles or something
    //  why not use the getStyle from defaultStyles?
    const styles = this._getStyles();

    const { className } = getStyleProperties(this.props, 'column');

    return (
      <td
        style={styles}
        key={this.props.dataKey}
        onClick={this._handleClick}
        onMouseOver={this._handleHover}
        className={className}>
          {this.props.hasOwnProperty('customComponent') ?
            <this.props.customComponent data={this.props.value} rowData={this.props.rowData} /> :
            this.props.value}
      </td>
    );
  }

  //TODO: Figure out a way to get this hooked up with the normal styles methods
  //maybe a merge styles property or something along those lines
  _getStyles = () => {
    if (this.props.settings.useGriddleStyles === false) { return null; }
    const style = this.props.styles.getStyle({
      useStyles: this.props.settings.useGriddleStyles,
      styles: this.props.styles.inlineStyles,
      styleName: 'column',
      //todo: make this nicer
      mergeStyles: this.props.width || this.props.alignment || this.props.styles ? Object.assign({
        width: this.props.width || null,
        textAlign: this.props.alignment
      }, this.props.styles.inlineStyles) :
      null
    });

    return style.column;
  }

  _handleClick = (e) => {
    const { onClick, events, dataKey, value, rowIndex, rowData } = this.props;

    if (onClick) onClick(e);

    events.columnClick(dataKey, value, rowIndex, rowData);
  }

  _handleHover = (e) => {
    const { events, dataKey, value, rowIndex, rowData } = this.props;

    events.columnHover(dataKey, value, rowIndex, rowData);
  }
}

Column.defaultProps = {
  columnProperties: {
    cssClassName: ''
  }
};

Column.propTypes = {
  alignment: React.PropTypes.oneOf(['left', 'right', 'center']),
  columnHover: React.PropTypes.func,
  columnClick: React.PropTypes.func
};

export default Column;
