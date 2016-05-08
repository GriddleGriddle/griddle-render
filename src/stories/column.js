import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Column from '../column';

storiesOf('Column', module)
  .add('basic', () => (
    <table>
      <tbody>
        <tr>
          <Column
            value="column text"
            onClick={() => { console.log('clicked')}}
            onMouseOver={() => { console.log('hovered')}}
            style={{backgroundColor: "#EDEDED"}}
            className="yes"
          />
        </tr>
      </tbody>
    </table>
  ))
