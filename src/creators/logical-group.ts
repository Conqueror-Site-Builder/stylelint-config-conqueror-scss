const createLogicalGroup = (groupName: string, properties: any[]) => ({
  groupName,
  properties,
  emptyLineBefore: 'always',
  noEmptyLineBetween: true,
  order: 'flexible',
});

export default createLogicalGroup;
