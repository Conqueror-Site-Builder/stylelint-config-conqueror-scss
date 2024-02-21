const createRule = (selector: string) => ({
  selector: `&${selector}`,
  type: 'rule',
});

export default createRule;
