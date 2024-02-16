const createRule = (selector) => {
  return {
    selector: `&${selector}`,
    type: 'rule',
  };
};

export default createRule;
