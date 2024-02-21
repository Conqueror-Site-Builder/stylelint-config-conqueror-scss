const PATTERN = '[a-z0-9]';
const REGEXP = {
  BEM: {
    BLOCK: `[a-z]${PATTERN}*(-${PATTERN}+)`,
    ELEMENT: `(__${PATTERN}+(-${PATTERN}+)*)`,
    MODIFIER: `(--${PATTERN}+(-${PATTERN}+)*)`,
  },
  NESTED: {
    ATTRIBUTE: '\\[[^\\[\\]]+\\]',
    CLASS: '\\..+',
    MODIFIER: '--.+',
    // The '?' is used to define the '&' sign at the beginning,
    // which is added in createRule()
    PARENT: '?.* &',
  },
};

export default REGEXP;
