import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Column from '../column';

storiesOf('Column', module)
  .add('basic', () => (
    <table>
      <tbody>
        <tr>
          <Column
            columnValue="column text"
            style={{ backgroundColor: "#EDEDED" }}
            className="hi"
            onClick={() => { console.log('clicked')}}
            onHover={() => { console.log('hovered')}}
          />
        </tr>
      </tbody>
    </table>
  ))
