const SYMBOLS_REGEX = '[a-z0-9]';
const ATTRIBUTE_REGEX = String.raw`?\[(.*)\]`;
const CLASS_REGEX = String.raw`?\.(.*)`;
const MODIFIER_REGEX = '--';
const ELEMENT_REGEX = '__';

const regex = {
  bem: {
    BLOCK_REGEX: `[a-z]${SYMBOLS_REGEX}*(-${SYMBOLS_REGEX}+)`,
    ELEMENT_REGEX: `(${ELEMENT_REGEX}${SYMBOLS_REGEX}+(-${SYMBOLS_REGEX}+)*)`,
    MODIFIER_REGEX: `(${MODIFIER_REGEX}${SYMBOLS_REGEX}+(-${SYMBOLS_REGEX}+)*)`,
  },
  nested: {
    ATTRIBUTE_REGEX,
    CLASS_REGEX,
    ELEMENT_REGEX,
    MODIFIER_REGEX,
  },
  child: {
    ATTRIBUTE_REGEX: `${ATTRIBUTE_REGEX} &`,
    CLASS_REGEX: `${CLASS_REGEX} &`,
  },
};

export { regex };
