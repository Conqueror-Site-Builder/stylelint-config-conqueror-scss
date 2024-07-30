import { describe, expect, test as spec } from 'vitest';

import { CSSRules } from '#rules';

describe('BEM Class Regex', () => {
  const BEMClassRegex = new RegExp(CSSRules['selector-class-pattern'][0] as string);

  spec('block (block)', async () => {
    expect('block').match(BEMClassRegex);
  });

  spec('block (block-name)', async () => {
    expect('block-name').match(BEMClassRegex);
  });

  spec('block (block-name-123)', async () => {
    expect('block-name-123').match(BEMClassRegex);
  });

  spec('block, modifier (block--modifier)', async () => {
    expect('block--modifier').match(BEMClassRegex);
  });

  spec('block, modifier (block-name--modifier-name)', async () => {
    expect('block-name--modifier-name').match(BEMClassRegex);
  });

  spec('block, modifier (block-name--modifier)', async () => {
    expect('block-name--modifier').match(BEMClassRegex);
  });

  spec('block, modifier (block--modifier-name)', async () => {
    expect('block--modifier-name').match(BEMClassRegex);
  });

  spec('block, element (block__element)', async () => {
    expect('block__element').match(BEMClassRegex);
  });

  spec('block, element (block-name__element-name)', async () => {
    expect('block-name__element-name').match(BEMClassRegex);
  });

  spec('block, element (block-name__element)', async () => {
    expect('block-name__element').match(BEMClassRegex);
  });

  spec('block, element (block__element-name)', async () => {
    expect('block__element-name').match(BEMClassRegex);
  });

  spec('block, element, modifier (block__element--modifier)', async () => {
    expect('block__element--modifier').match(BEMClassRegex);
  });

  spec(
    'block, element, modifier (block-name__element-name--modifier-name)',
    async () => {
      expect('block-name__element-name--modifier-name').match(BEMClassRegex);
    },
  );

  spec('block, element, modifier (block-name__element-name--modifier)', async () => {
    expect('block-name__element-name--modifier').match(BEMClassRegex);
  });

  spec('block, element, modifier (block-name__element--modifier-name)', async () => {
    expect('block-name__element--modifier-name').match(BEMClassRegex);
  });

  spec('block, element, modifier (block__element-name--modifier-name)', async () => {
    expect('block__element-name--modifier-name').match(BEMClassRegex);
  });

  spec('block, element, modifier (block__element_modifier)', async () => {
    expect('block__element_modifier').not.match(BEMClassRegex);
  });

  spec('block (Block)', async () => {
    expect('Block').not.match(BEMClassRegex);
  });

  spec('block (BlockElement)', async () => {
    expect('BlockElement').not.match(BEMClassRegex);
  });

  spec('block (123)', async () => {
    expect('123').not.match(BEMClassRegex);
  });
});
