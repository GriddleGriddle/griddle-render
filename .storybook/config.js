import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/stories/column');
  require('../src/stories/columnWrapper');
  require('../src/stories/tableBody');
  require('../src/stories/row');


  // require as many stories as you need.
}

configure(loadStories, module);
