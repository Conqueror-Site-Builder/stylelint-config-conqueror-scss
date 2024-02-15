const createAtRule = (name, hasBlock) => {
  return {
    name,
    hasBlock,
    type: 'at-rule',
  };
};

export default createAtRule;
