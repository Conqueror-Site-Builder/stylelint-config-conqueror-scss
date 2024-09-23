import { beforeEach, describe, expect, test as spec } from 'vitest';

import { createAtRule } from '#features';

import type { Parameters } from '#at-rule-parameters';

describe('Create At Rule', async () => {
  let atRule: Function;

  beforeEach(async () => {
    atRule = async (parameters: Parameters) => {
      const { name, hasBlock } = parameters;

      const result = await createAtRule({ name, hasBlock });

      expect(result.name).toBeTypeOf('string');
      expect(result.hasBlock).toBeTypeOf('boolean');
      expect(result.type).toEqual('at-rule');

      return result;
    };
  });

  spec('should create an object with a block', async () => {
    await atRule({ name: 'test-rule-1', hasBlock: true });
  });

  spec('should create an object without a block', async () => {
    await atRule({ name: 'test-rule-2', hasBlock: false });
  });
});
