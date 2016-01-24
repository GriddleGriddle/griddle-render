import React from 'react';
import {getStyleProperties}  from './utils/styleHelper';

class Loading extends React.Component {
  render() {
    const { style, className } = getStyleProperties(this.props, 'loading');

    return (
      <tr>
        <td>
          <div style={style} className={className}>
            <h4>Loading...</h4>
          </div>
        </td>
      </tr>
    );
  }
}

export default Loading;
