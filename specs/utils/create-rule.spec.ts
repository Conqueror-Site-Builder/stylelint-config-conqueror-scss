import { beforeEach, describe, expect, test as spec } from 'bun:test';

import { createRule } from '#utils/create-rule/create-rule.ts';
import type { Parameters } from '#create-rule-parameters';

describe('Create Rule', async () => {
  let rule: Function;

  beforeEach(async () => {
    rule = async (parameters: Parameters) => {
      const { selector } = parameters;

      const result = await createRule({ selector });

      expect(result.selector).toEqual(`&${selector.replace(/^&+/g, '')}`);
      expect(result.type).toEqual('rule');

      return result;
    };
  });

  spec('should create an object with selector', async () => {
    await rule({ selector: ':any-nested-css-selector' });
  });
});
