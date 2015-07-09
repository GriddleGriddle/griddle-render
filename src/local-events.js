'use strict';

const LocalEvents = actions => {
  return {
    loadData: actions.loadData.bind(actions),
    getNextPage: actions.loadNext.bind(actions),
    getPreviousPage: actions.loadPrevious.bind(actions),
    getPage: actions.loadPage.bind(actions),
    setFilter: actions.filterData.bind(actions),
    setPageSize: actions.setPageSize.bind(actions),
    sort: actions.sort.bind(actions),
    toggleColumn: actions.toggleColumn.bind(actions)
  };
};

export default LocalEvents;
