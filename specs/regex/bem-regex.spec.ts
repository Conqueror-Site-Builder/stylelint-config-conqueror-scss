import { describe, expect, test as spec } from 'bun:test';

import { CSSRules } from '#rules/css.ts';

describe('BEM Class Regex', async () => {
  const BEMClassRegex = new RegExp(`${CSSRules['selector-class-pattern'][0]}`);

  spec('should block', async () => {
    expect('block').toMatch(BEMClassRegex);
  });

  spec('should block-name', async () => {
    expect('block-name').toMatch(BEMClassRegex);
  });

  spec('should block-name-123', async () => {
    expect('block-name-123').toMatch(BEMClassRegex);
  });

  spec('should block--modifier', async () => {
    expect('block--modifier').toMatch(BEMClassRegex);
  });

  spec('should block-name--modifier-name', async () => {
    expect('block-name--modifier-name').toMatch(BEMClassRegex);
  });

  spec('should block-name--modifier', async () => {
    expect('block-name--modifier').toMatch(BEMClassRegex);
  });

  spec('should block--modifier-name', async () => {
    expect('block--modifier-name').toMatch(BEMClassRegex);
  });

  spec('should block__element', async () => {
    expect('block__element').toMatch(BEMClassRegex);
  });

  spec('should block-name__element-name', async () => {
    expect('block-name__element-name').toMatch(BEMClassRegex);
  });

  spec('should block-name__element', async () => {
    expect('block-name__element').toMatch(BEMClassRegex);
  });

  spec('should block__element-name', async () => {
    expect('block__element-name').toMatch(BEMClassRegex);
  });

  spec('should block__element--modifier', async () => {
    expect('block__element--modifier').toMatch(BEMClassRegex);
  });

  spec('should block-name__element-name--modifier-name', async () => {
    expect('block-name__element-name--modifier-name').toMatch(BEMClassRegex);
  });

  spec('should block-name__element-name--modifier', async () => {
    expect('block-name__element-name--modifier').toMatch(BEMClassRegex);
  });

  spec('should block-name__element--modifier-name', async () => {
    expect('block-name__element--modifier-name').toMatch(BEMClassRegex);
  });

  spec('should block__element-name--modifier-name', async () => {
    expect('block__element-name--modifier-name').toMatch(BEMClassRegex);
  });

  spec('should block__element_modifier', async () => {
    expect('block__element_modifier').not.toMatch(BEMClassRegex);
  });

  spec('should Block', async () => {
    expect('Block').not.toMatch(BEMClassRegex);
  });

  spec('should BlockElement', async () => {
    expect('BlockElement').not.toMatch(BEMClassRegex);
  });

  spec('should 123', async () => {
    expect('123').not.toMatch(BEMClassRegex);
  });
});
