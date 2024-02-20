import { expect } from 'chai';
import { describe, it } from 'mocha';

import createAtRule from '../../src/creators/at-rule.js';

describe('Create At Rule', () => {
  it('create an object with args (name: String, hasBlock: true)', () => {
    const rule = createAtRule('test-rule', true);

    expect(rule).to.have.property('name', 'test-rule');
    expect(rule).to.have.property('hasBlock', true);
  });

  it('create an object with args (name: String, hasBlock: false)', () => {
    const rule = createAtRule('test-rule', false);

    expect(rule).to.have.property('name', 'test-rule');
    expect(rule).to.have.property('hasBlock', false);
  });
});
