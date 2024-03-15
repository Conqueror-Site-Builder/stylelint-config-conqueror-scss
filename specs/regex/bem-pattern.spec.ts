import { expect } from 'chai';
import { describe, it } from 'mocha';

import CSSRules from '../../src/rules/css.ts';

describe('BEM Class Pattern', () => {
  const BEMClassPattern = new RegExp(
    CSSRules['selector-class-pattern'][0] as string,
  );

  it('block (block)', () => {
    expect('block').match(BEMClassPattern);
  });

  it('block (block-name)', () => {
    expect('block-name').match(BEMClassPattern);
  });

  it('block, modifier (block--modifier)', () => {
    expect('block--modifier').match(BEMClassPattern);
  });

  it('block, modifier (block-name--modifier-name)', () => {
    expect('block-name--modifier-name').match(BEMClassPattern);
  });

  it('block, modifier (block-name--modifier)', () => {
    expect('block-name--modifier').match(BEMClassPattern);
  });

  it('block, modifier (block--modifier-name)', () => {
    expect('block--modifier-name').match(BEMClassPattern);
  });

  it('block, element (block__element)', () => {
    expect('block__element').match(BEMClassPattern);
  });

  it('block, element (block-name__element-name)', () => {
    expect('block-name__element-name').match(BEMClassPattern);
  });

  it('block, element (block-name__element)', () => {
    expect('block-name__element').match(BEMClassPattern);
  });

  it('block, element (block__element-name)', () => {
    expect('block__element-name').match(BEMClassPattern);
  });

  it('block, element, modifier (block__element--modifier)', () => {
    expect('block__element--modifier').match(BEMClassPattern);
  });

  it('block, element, modifier (block-name__element-name--modifier-name)', () => {
    expect('block-name__element-name--modifier-name').match(BEMClassPattern);
  });

  it('block, element, modifier (block-name__element-name--modifier)', () => {
    expect('block-name__element-name--modifier').match(BEMClassPattern);
  });

  it('block, element, modifier (block-name__element--modifier-name)', () => {
    expect('block-name__element--modifier-name').match(BEMClassPattern);
  });

  it('block, element, modifier (block__element-name--modifier-name)', () => {
    expect('block__element-name--modifier-name').match(BEMClassPattern);
  });
});
