const PATTERN = '[a-z0-9]';
// The '?' is used to define the '&' sign at the beginning,
// which is added in createRule()
const ATTRIBUTE = '?\\[(.*)\\]';
const CLASS = '?\\.(.*)';
const MODIFIER = '--';
const ELEMENT = '__';
const REGEXP = {
  BEM: {
    BLOCK: `[a-z]${PATTERN}*(-${PATTERN}+)`,
    ELEMENT: `(${ELEMENT}${PATTERN}+(-${PATTERN}+)*)`,
    MODIFIER: `(${MODIFIER}${PATTERN}+(-${PATTERN}+)*)`,
  },
  NESTED: {
    ATTRIBUTE,
    CLASS,
    ELEMENT,
    MODIFIER,
  },
  CHILD: {
    ATTRIBUTE: `${ATTRIBUTE} &`,
    CLASS: `${CLASS} &`,
  },
};

export default REGEXP;
