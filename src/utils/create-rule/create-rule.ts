import type { Parameters } from './parameters.ts';

const createRule = async (parameters: Parameters) => {
  const { selector, isAmpersand = true } = parameters;

  return {
    type: 'rule',
    selector: isAmpersand ? `&${selector}` : selector,
  };
};

export { createRule };
