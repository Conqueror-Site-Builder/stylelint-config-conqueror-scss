import { beforeEach, describe, expect, test as spec } from 'vitest';

import { createAtRule } from '#features/at-rule/at-rule.ts';
import type { Parameters } from '#at-rule-parameters';

describe('Create At Rule', () => {
  let atRule: Function;

  beforeEach(() => {
    const addAtRule = async (parameters: Parameters) => {
      const { name, hasBlock } = parameters;

      return await createAtRule({ name, hasBlock }).then((parameters) => {
        expect(parameters.name).equal(name);
        expect(parameters.hasBlock).equal(hasBlock);
        expect(parameters.type).equal('at-rule');
      });
    };

    atRule = addAtRule;
  });

  spec('create an object with (name: String, hasBlock: true)', async () => {
    return await atRule({ name: 'test-rule', hasBlock: true });
  });

  spec('create an object with (name: String, hasBlock: false)', async () => {
    return await atRule({ name: 'test-rule', hasBlock: false });
  });
});
