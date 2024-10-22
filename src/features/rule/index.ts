import type { Parameters } from './parameters.ts';

const createRule = async (parameters: Parameters) => {
  const { selector } = parameters;

  const cleanSelector = selector.replaceAll(/^&+/g, '');

  return {
    type: 'rule',
    selector: `&${cleanSelector}`,
  };
};

export { createRule };
