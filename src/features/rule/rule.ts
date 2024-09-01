import type { Parameters } from './parameters.ts';

/**
 * Creates a rule.
 *
 * @param {string} selector - The css selector for the rule.
 *
 * @return {Object} - The created rule object with type 'rule'
 * and modified selector.
 */
const createRule = async (parameters: Parameters) => {
  const { selector } = parameters;

  return {
    type: 'rule',
    selector: `&${selector}`,
  };
};

export { createRule };
