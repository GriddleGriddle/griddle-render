import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Row from '../row';
import Column from '../column';
import TableBody from '../table-body';
import FakeData from './fakeData';

const components = {
  Column,
  Row,
  Loading: Row
}

const metadata = FakeData.map(f => ({ griddleKey: f.id }) );

storiesOf('TableBody', module)
  .add('basic', () => (
    <table>
      <TableBody
        data={FakeData}
        originalData={FakeData}
        components={components}
        metadata={metadata}
      />
    </table>
  ))
