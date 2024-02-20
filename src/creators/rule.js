const createRule = (selector) => ({
  selector: `&${selector}`,
  type: 'rule',
});

export default createRule;
