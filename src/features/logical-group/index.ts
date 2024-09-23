import type { Parameters } from './parameters.ts';

const createLogicalGroup = async (parameters: Parameters) => {
  const { groupName, properties } = parameters;

  return {
    groupName,
    properties,
    emptyLineBefore: 'always',
    noEmptyLineBetween: true,
    order: 'flexible',
  };
};

export { createLogicalGroup };
