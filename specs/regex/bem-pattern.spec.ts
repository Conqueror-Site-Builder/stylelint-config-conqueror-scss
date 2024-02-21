import { expect } from 'chai';
import { describe, it } from 'mocha';

import CSSRules from '../../src/rules/css.ts';

describe('BEM Class Pattern', () => {
  const BEMClassPattern = new RegExp(
    CSSRules['selector-class-pattern'][0] as string,
  );

  it('block (String, [block])', () => {
    expect('block').to.match(BEMClassPattern);
  });

  it('block (String, [block-name])', () => {
    expect('block-name').to.match(BEMClassPattern);
  });

  it('block with modifier (String, [block--modifier])', () => {
    expect('block--modifier').to.match(BEMClassPattern);
  });

  it('block with modifier (String, [block-name--modifier-name])', () => {
    expect('block-name--modifier-name').to.match(BEMClassPattern);
  });

  it('block with modifier (String, [block-name--modifier])', () => {
    expect('block-name--modifier').to.match(BEMClassPattern);
  });

  it('block with modifier (String, [block--modifier-name])', () => {
    expect('block--modifier-name').to.match(BEMClassPattern);
  });

  it('block and element (String, [block__element])', () => {
    expect('block__element').to.match(BEMClassPattern);
  });

  it('block and element (String, [block-name__element-name])', () => {
    expect('block-name__element-name').to.match(BEMClassPattern);
  });

  it('block and element (String, [block-name__element])', () => {
    expect('block-name__element').to.match(BEMClassPattern);
  });

  it('block and element (String, [block__element-name])', () => {
    expect('block__element-name').to.match(BEMClassPattern);
  });

  it('block and element with modifier (String, [block__element--modifier])', () => {
    expect('block__element--modifier').to.match(BEMClassPattern);
  });

  it('block and element with modifier (String, [block-name__element-name--modifier-name])', () => {
    expect('block-name__element-name--modifier-name').to.match(BEMClassPattern);
  });

  it('block and element with modifier (String, [block-name__element-name--modifier])', () => {
    expect('block-name__element-name--modifier').to.match(BEMClassPattern);
  });

  it('block and element with modifier (String, [block-name__element--modifier-name])', () => {
    expect('block-name__element--modifier-name').to.match(BEMClassPattern);
  });

  it('block and element with modifier (String, [block__element-name--modifier-name])', () => {
    expect('block__element-name--modifier-name').to.match(BEMClassPattern);
  });
});
