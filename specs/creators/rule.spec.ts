import { beforeEach, describe, expect, test } from 'vitest';

import createRule from '../../src/creators/rule.ts';

describe('Create Rule', () => {
  let rule: Function;

  beforeEach(() => {
    const addRule = async (selector: string) => {
      return createRule(selector).then((argument) => {
        expect(argument.selector).equal(`&${selector}`);
        expect(argument.type).equal('rule');
      });
    };

    rule = addRule;
  });

  test('create an object with argument (::pseudo-element)', async () => {
    return rule('::pseudo-element');
  });

  test('create an object with argument (:pseudo-class)', async () => {
    return rule(':pseudo-class');
  });

  test('create an object with argument (?\\[(.*)\\])', async () => {
    return rule('?\\[(.*)\\]');
  });

  test('create an object with argument (?\\.(.*))', async () => {
    return rule('?\\.(.*)');
  });

  test('create an object with argument (--)', async () => {
    return rule('--');
  });

  test('create an object with argument (__)', async () => {
    return rule('__');
  });
});
