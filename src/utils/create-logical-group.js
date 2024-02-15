const createLogicalGroup = (groupName, properties) => {
  return {
    groupName,
    properties,
    emptyLineBefore: 'always',
    noEmptyLineBetween: true,
    order: 'flexible',
  };
};

export default createLogicalGroup;
