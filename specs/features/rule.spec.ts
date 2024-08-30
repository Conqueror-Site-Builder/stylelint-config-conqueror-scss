import { beforeEach, describe, expect, test as spec } from 'vitest';

import { createRule } from '#features/rule/rule.ts';
import type { Parameters } from '#rule-parameters';

describe('Create Rule', () => {
  let rule: Function;

  beforeEach(() => {
    const addRule = async (parameters: Parameters) => {
      const { selector, type } = parameters;

      return await createRule({ selector, type }).then((parameters) => {
        expect(parameters.selector).equal(`&${selector}`);
        expect(parameters.type).equal('rule');
      });
    };

    rule = addRule;
  });

  spec('create an object with (::pseudo-element)', async () => {
    return await rule({ selector: '::pseudo-element' });
  });

  spec('create an object with (:pseudo-class)', async () => {
    return await rule({ selector: ':pseudo-class' });
  });

  spec('create an object with (?\\[(.*)\\])', async () => {
    return await rule({ selector: '?\\[(.*)\\]' });
  });

  spec('create an object with (?\\.(.*))', async () => {
    return await rule({ selector: '?\\.(.*)' });
  });

  spec('create an object with (--)', async () => {
    return await rule({ selector: '--' });
  });

  spec('create an object with (__)', async () => {
    return await rule({ selector: '__' });
  });
});
