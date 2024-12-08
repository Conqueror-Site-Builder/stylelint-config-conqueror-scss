import type { Parameters } from './parameters.ts';

const createRule = async (parameters: Parameters) => {
  const { selector } = parameters;

  return {
    type: 'rule',
    selector: `&${selector}`,
  };
};

export { createRule };
