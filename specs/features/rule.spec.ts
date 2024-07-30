import { beforeEach, describe, expect, test as spec } from 'vitest';

import { createRule } from '#features';
import type { Parameters } from '#rule-parameters';

describe('Create Rule', () => {
  let rule: Function;

  beforeEach(() => {
    const addRule = async (parameters: Parameters) => {
      const { selector } = parameters;

      return createRule({ selector }).then((parameter) => {
        expect(parameter.selector).equal(`&${selector}`);
        expect(parameter.type).equal('rule');
      });
    };

    rule = addRule;
  });

  spec('create an object with (::pseudo-element)', async () => {
    return rule('::pseudo-element');
  });

  spec('create an object with (:pseudo-class)', async () => {
    return rule(':pseudo-class');
  });

  spec('create an object with (?\\[(.*)\\])', async () => {
    return rule('?\\[(.*)\\]');
  });

  spec('create an object with (?\\.(.*))', async () => {
    return rule('?\\.(.*)');
  });

  spec('create an object with (--)', async () => {
    return rule('--');
  });

  spec('create an object with (__)', async () => {
    return rule('__');
  });
});
