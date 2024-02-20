import { expect } from 'chai';
import { describe, it } from 'mocha';

import CSSRules from '../../src/rules/css.js';

describe('BEM Class Pattern', () => {
  const BEMClassPattern = new RegExp(CSSRules['selector-class-pattern'][0]);

  it('block (String, [block])', () => {
    expect('block').to.match(BEMClassPattern);
  });

  it('block with modifier (String, [block--modifier])', () => {
    expect('block--modifier').to.match(BEMClassPattern);
  });

  it('block and element (String, [block__element])', () => {
    expect('block__element').to.match(BEMClassPattern);
  });

  it('block and element with modifier (String, [block__element--modifier])', () => {
    expect('block__element--modifier').to.match(BEMClassPattern);
  });
});
