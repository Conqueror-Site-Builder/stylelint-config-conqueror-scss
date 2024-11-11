import type { Parameters } from './parameters.ts';

const createAtRule = async (parameters: Parameters) => {
  const { name, hasBlock = false } = parameters;

  return {
    name,
    hasBlock,
    type: 'at-rule',
  };
};

export { createAtRule };
