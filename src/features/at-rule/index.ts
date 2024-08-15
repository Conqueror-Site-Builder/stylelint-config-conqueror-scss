import type { Parameters } from './parameters.d.ts';

/**
 * The asynchronous `createAtRule` function in TypeScript creates an object
 * representing an at-rule with a specified name and block presence.
 *
 * @param {string} name - The `name` parameter is a string that represents
 * the name of the at-rule being created.
 *
 * @param {boolean} hasBlock - The `hasBlock` parameter in the `createAtRule`
 * function is a boolean value that indicates whether the at-rule being created
 * will have a block of nested rules or declarations inside it. If `hasBlock`
 * is `true`, it means that the at-rule will have a block.
 */

const createAtRule = async (parameters: Parameters) => {
  const { name, hasBlock = false, type = 'at-rule' } = parameters;

  return {
    name,
    hasBlock,
    type,
  };
};

export { createAtRule };
