import { beforeEach, describe, expect, test as spec } from 'vitest';

import { createAtRule } from '#features';
import type { Parameters } from '#at-rule-parameters';

describe('Create At Rule', () => {
  let atRule: Function;

  beforeEach(() => {
    const addAtRule = async (parameters: Parameters) => {
      const { name, hasBlock } = parameters;

      return createAtRule({ name, hasBlock }).then((parameter) => {
        expect(parameter.name).equal(name);
        expect(parameter.hasBlock).equal(hasBlock);
        expect(parameter.type).equal('at-rule');
      });
    };

    atRule = addAtRule;
  });

  spec('create an object with (name: String, hasBlock: true)', async () => {
    return atRule('test-rule', true);
  });

  spec('create an object with (name: String, hasBlock: false)', async () => {
    return atRule('test-rule', false);
  });
});
