import type { Parameters } from './parameters.ts';

/**
 * Creates an at-rule.
 *
 * @param {string} name - The name of the at-rule.
 *
 * @param {boolean} [hasBlock=false] - Indicates if the at-rule has a nested block.
 *
 * @return {Object} - The created at-rule object with the specified name,
 * hasBlock flag, and type 'at-rule'.
 */
const createAtRule = async (parameters: Parameters) => {
  const { name, hasBlock = false } = parameters;

  return {
    name,
    hasBlock,
    type: 'at-rule',
  };
};

export { createAtRule };
