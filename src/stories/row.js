import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Row from '../row';
import Column from '../column';

storiesOf('Row', module)
  .add('basic', () => (
    <table>
      <tbody>
        <Row
          rowData={{
            "id": 0,
            "name": "Mayer Leonard",
            "city": "Kapowsin",
            "state": "Hawaii",
            "country": "United Kingdom",
            "company": "Ovolo",
            "favoriteNumber": 7
          }}
          onClick={() => console.log('click')}
          onHover={() => console.log('hover')}
          components={{Column}}
        />
      </tbody>
    </table>
  ))
