import type { Parameters } from './parameters.ts';

const propertiesGroup = async (parameters: Parameters) => {
  const { groupName, properties } = parameters;

  return {
    groupName,
    properties,
    emptyLineBefore: 'threshold',
    noEmptyLineBetween: true,
    order: 'flexible',
  };
};

export { propertiesGroup };
