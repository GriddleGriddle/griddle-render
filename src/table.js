import React from 'react';
import RowDefinition from './row-definition';
import { getStyleProperties } from './utils/styleHelper';

class Table extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    const { settings, styles } = this.props;
    const style = styles.getStyle({
      styles: styles.inlineStyles,
      styleName: 'table',
      mergeStyles: settings.useFixedTable && styles.getStyle({
        styles: styles.inlineStyles,
        styleName: 'fixedTable',
      })
    });

    const { className } = getStyleProperties(this.props, 'table');
    //translate the definition object to props for Heading / Body
    return this.props.data.length > 0 ?
      (
        <table
          className={className}
          style={style}
        >
          <this.props.components.TableHeading columns={Object.keys(this.props.data[0])} {...this.props} />
          <this.props.components.TableBody {...this.props} />
        </table>
      ) : null;
  }
}

//TODO: enabled the propTypes again
/*
Table.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.instanceOf(RowDefinition)
    // React.PropTypes.arrayOf(React.PropTypes.instanceOf(ColumnDefinition))
  ])
}; */

export default Table;
