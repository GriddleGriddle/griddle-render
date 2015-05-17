'use strict';

const LocalEvents = (actions => {
  return {
    loadData: actions.loadData.bind(actions),
    getNextPage: actions.loadNext.bind(actions),
    getPreviousPage: actions.loadPrevious.bind(actions),
    getPage: actions.loadPage.bind(actions),
    setFilter: actions.filterData.bind(actions)
  }
});

export default LocalEvents;
