import type { Parameters } from './parameters.ts';

/**
 * The asynchronous function `createRule` in TypeScript creates
 * a CSS rule with a specified selector.
 *
 * @param {string} selector - The `selector` parameter in the `createRule`
 * function is a string that
 * represents the CSS selector for which a rule is being created.
 */

const createRule = async (parameters: Parameters) => {
  const { selector, type = 'rule' } = parameters;

  return {
    type,
    selector: `&${selector}`,
  };
};

export { createRule };
