const PATTERN = '[a-z0-9]';
const REGEXP = {
  BEM_BLOCK: `[a-z]${PATTERN}*(-${PATTERN}+)`,
  BEM_ELEMENT: `(__${PATTERN}+(-${PATTERN}+)*)`,
  BEM_MODIFIER: `(--${PATTERN}+(-${PATTERN}+)*)`,
};

export default REGEXP;
