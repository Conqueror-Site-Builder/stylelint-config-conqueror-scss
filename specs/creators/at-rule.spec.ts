import { beforeEach, describe, expect, test as spec } from 'vitest';

import { createAtRule } from '../../src/creators/at-rule.ts';

describe('Create At Rule', () => {
  let atRule: Function;

  beforeEach(() => {
    const addAtRule = async (name: string, hasBlock: boolean) => {
      return createAtRule(name, hasBlock).then((argument) => {
        expect(argument.name).equal(name);
        expect(argument.hasBlock).equal(hasBlock);
        expect(argument.type).equal('at-rule');
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
