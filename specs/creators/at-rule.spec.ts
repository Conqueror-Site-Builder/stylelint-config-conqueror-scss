import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';

import createAtRule from '../../src/creators/at-rule.ts';

describe('Create At Rule', () => {
  let atRule: any;

  beforeEach(() => {
    const addAtRule = async (name: string, hasBlock: boolean) => {
      return createAtRule(name, hasBlock).then((argument) => {
        expect(argument.name).to.equal(name);
        expect(argument.hasBlock).to.equal(hasBlock);
        expect(argument.type).to.equal('at-rule');
      });
    };

    atRule = addAtRule;
  });

  it('create an object with args (name: String, hasBlock: true)', async () => {
    return atRule('test-rule', true);
  });

  it('create an object with args (name: String, hasBlock: false)', async () => {
    return atRule('test-rule', false);
  });
});
