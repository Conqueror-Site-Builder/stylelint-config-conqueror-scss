const SYMBOLS_PATTERN = '[a-z0-9]';
// The '?' is used to define the '&' sign at the beginning,
// which is added in createRule()
const ATTRIBUTE_PATTERN = '?\\[(.*)\\]';
const CLASS_PATTERN = '?\\.(.*)';
const MODIFIER_PATTERN = '--';
const ELEMENT_PATTERN = '__';

export default {
  bem: {
    BLOCK_PATTERN: `[a-z]${SYMBOLS_PATTERN}*(-${SYMBOLS_PATTERN}+)`,
    ELEMENT_PATTERN: `(${ELEMENT_PATTERN}${SYMBOLS_PATTERN}+(-${SYMBOLS_PATTERN}+)*)`,
    MODIFIER_PATTERN: `(${MODIFIER_PATTERN}${SYMBOLS_PATTERN}+(-${SYMBOLS_PATTERN}+)*)`,
  },
  nested: {
    ATTRIBUTE_PATTERN,
    CLASS_PATTERN,
    ELEMENT_PATTERN,
    MODIFIER_PATTERN,
  },
  child: {
    ATTRIBUTE_PATTERN: `${ATTRIBUTE_PATTERN} &`,
    CLASS_PATTERN: `${CLASS_PATTERN} &`,
  },
};
