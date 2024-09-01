import type { Parameters } from './parameters.ts';

/**
 * Creates a logical group.
 *
 * @param {string} groupName - The name of the logical group.
 *
 * @param {Array} properties - The properties within the logical group.
 *
 * @return {Object} - The created logical group object with
 * groupName, properties, emptyLineBefore, noEmptyLineBetween, and order.
 */
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
