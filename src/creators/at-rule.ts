const createAtRule = (name: string, hasBlock: boolean) => ({
  name,
  hasBlock,
  type: 'at-rule',
});

export default createAtRule;
