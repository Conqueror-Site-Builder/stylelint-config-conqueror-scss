import { describe, expect, test as spec } from 'vitest';

import { CSSRules } from '#config';

describe('BEM Class Regex', async () => {
  const BEMClassRegex = new RegExp(`${CSSRules['selector-class-pattern'][0]}`);

  spec('should block', async () => {
    expect('block').match(BEMClassRegex);
  });

  spec('should block-name', async () => {
    expect('block-name').match(BEMClassRegex);
  });

  spec('should block-name-123', async () => {
    expect('block-name-123').match(BEMClassRegex);
  });

  spec('should block--modifier', async () => {
    expect('block--modifier').match(BEMClassRegex);
  });

  spec('should block-name--modifier-name', async () => {
    expect('block-name--modifier-name').match(BEMClassRegex);
  });

  spec('should block-name--modifier', async () => {
    expect('block-name--modifier').match(BEMClassRegex);
  });

  spec('should block--modifier-name', async () => {
    expect('block--modifier-name').match(BEMClassRegex);
  });

  spec('should block__element', async () => {
    expect('block__element').match(BEMClassRegex);
  });

  spec('should block-name__element-name', async () => {
    expect('block-name__element-name').match(BEMClassRegex);
  });

  spec('should block-name__element', async () => {
    expect('block-name__element').match(BEMClassRegex);
  });

  spec('should block__element-name', async () => {
    expect('block__element-name').match(BEMClassRegex);
  });

  spec('should block__element--modifier', async () => {
    expect('block__element--modifier').match(BEMClassRegex);
  });

  spec('should block-name__element-name--modifier-name', async () => {
    expect('block-name__element-name--modifier-name').match(BEMClassRegex);
  });

  spec('should block-name__element-name--modifier', async () => {
    expect('block-name__element-name--modifier').match(BEMClassRegex);
  });

  spec('should block-name__element--modifier-name', async () => {
    expect('block-name__element--modifier-name').match(BEMClassRegex);
  });

  spec('should block__element-name--modifier-name', async () => {
    expect('block__element-name--modifier-name').match(BEMClassRegex);
  });

  spec('should block__element_modifier', async () => {
    expect('block__element_modifier').not.match(BEMClassRegex);
  });

  spec('should Block', async () => {
    expect('Block').not.match(BEMClassRegex);
  });

  spec('should BlockElement', async () => {
    expect('BlockElement').not.match(BEMClassRegex);
  });

  spec('should 123', async () => {
    expect('123').not.match(BEMClassRegex);
  });
});
