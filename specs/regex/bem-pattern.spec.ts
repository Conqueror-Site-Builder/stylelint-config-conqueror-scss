import { describe, expect, test } from 'vitest';

import { CSSRules } from '../../src/rules/css.ts';

describe('BEM Class Pattern', () => {
  const BEMClassPattern = new RegExp(
    CSSRules['selector-class-pattern'][0] as string,
  );

  test('block (block)', () => {
    expect('block').match(BEMClassPattern);
  });

  test('block (block-name)', () => {
    expect('block-name').match(BEMClassPattern);
  });

  test('block (block-name-123)', () => {
    expect('block-name-123').match(BEMClassPattern);
  });

  test('block, modifier (block--modifier)', () => {
    expect('block--modifier').match(BEMClassPattern);
  });

  test('block, modifier (block-name--modifier-name)', () => {
    expect('block-name--modifier-name').match(BEMClassPattern);
  });

  test('block, modifier (block-name--modifier)', () => {
    expect('block-name--modifier').match(BEMClassPattern);
  });

  test('block, modifier (block--modifier-name)', () => {
    expect('block--modifier-name').match(BEMClassPattern);
  });

  test('block, element (block__element)', () => {
    expect('block__element').match(BEMClassPattern);
  });

  test('block, element (block-name__element-name)', () => {
    expect('block-name__element-name').match(BEMClassPattern);
  });

  test('block, element (block-name__element)', () => {
    expect('block-name__element').match(BEMClassPattern);
  });

  test('block, element (block__element-name)', () => {
    expect('block__element-name').match(BEMClassPattern);
  });

  test('block, element, modifier (block__element--modifier)', () => {
    expect('block__element--modifier').match(BEMClassPattern);
  });

  test('block, element, modifier (block-name__element-name--modifier-name)', () => {
    expect('block-name__element-name--modifier-name').match(BEMClassPattern);
  });

  test('block, element, modifier (block-name__element-name--modifier)', () => {
    expect('block-name__element-name--modifier').match(BEMClassPattern);
  });

  test('block, element, modifier (block-name__element--modifier-name)', () => {
    expect('block-name__element--modifier-name').match(BEMClassPattern);
  });

  test('block, element, modifier (block__element-name--modifier-name)', () => {
    expect('block__element-name--modifier-name').match(BEMClassPattern);
  });

  test('block, element, modifier (block__element_modifier)', () => {
    expect('block__element_modifier').not.match(BEMClassPattern);
  });

  test('block (Block)', () => {
    expect('Block').not.match(BEMClassPattern);
  });

  test('block (BlockElement)', () => {
    expect('BlockElement').not.match(BEMClassPattern);
  });

  test('block (123)', () => {
    expect('123').not.match(BEMClassPattern);
  });
});
