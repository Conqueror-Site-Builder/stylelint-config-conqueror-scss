const createLogicalGroup = (groupName, properties) => ({
  groupName,
  properties,
  emptyLineBefore: 'always',
  noEmptyLineBetween: true,
  order: 'flexible',
});

export default createLogicalGroup;
