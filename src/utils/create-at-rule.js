const createAtRule = (name, hasBlock) => ({
  name,
  hasBlock,
  type: 'at-rule',
});

export default createAtRule;
