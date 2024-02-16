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
  },
};

export default REGEXP;
