import React, { PropTypes } from 'react';
import { storiesOf, action } from '@kadira/storybook';

import ColumnWrapper from '../columnWrapper';
import withState from './withState';

const WrapperWithContext = withState(ColumnWrapper);

storiesOf('ColumnWrapper', module)
  .add('basic', () => (
    <table>
      <tbody>
        <tr>
          <WrapperWithContext griddleKey={3} field="name" />
        </tr>
      </tbody>
    </table>
  ))
