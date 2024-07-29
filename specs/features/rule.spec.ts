import { beforeEach, describe, expect, test as spec } from 'vitest';

import { createRule } from '#features/index.ts';
import type { Props } from '#features/rule/props.d.ts';

describe('Create Rule', () => {
  let rule: Function;

  beforeEach(() => {
    const addRule = async (props: Props) => {
      const { selector } = props;

      return createRule({ selector }).then((argument) => {
        expect(argument.selector).equal(`&${selector}`);
        expect(argument.type).equal('rule');
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
