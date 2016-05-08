export function getClassNameFromObject(componentName, classNames) {
  //TODO: do some checks and toss an error or something if it's not there
  return classNames && classNames[componentName];
}

export function getStyleFromObject(componentName, styles) {
  return styles && styles[componentName];
}

export function getDataForColumn(field, griddleKey, data) {
  const row = data.find(i => i.get('griddleKey') === griddleKey);
  if(!row) {
    console.error(`Couldn't find a row with matching GriddleKey.
      This is generally indicates the state for the grid is out of sync with the views somehow`);
  }

  const fieldValue = row.get(field);
  return fieldValue;
}
