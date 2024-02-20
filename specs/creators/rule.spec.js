import { expect } from 'chai';
import { describe, it } from 'mocha';

import createRule from '../../src/creators/rule.js';

describe('Create Rule', () => {
  it('create an object with args (selector: String, [::pseudo-element])', () => {
    const rule = createRule('::pseudo-element');

    expect(rule).to.have.property('selector', '&::pseudo-element');
  });

  it('create an object with args (selector: String, [:pseudo-class])', () => {
    const rule = createRule(':pseudo-class');

    expect(rule).to.have.property('selector', '&:pseudo-class');
  });

  it('create an object with args (selector: RegExp, [\\[[^\\[\\]]+\\]])', () => {
    const rule = createRule('\\[[^\\[\\]]+\\]');

    expect(rule).to.have.property('selector', '&\\[[^\\[\\]]+\\]');
  });

  it('create an object with args (selector: RegExp, [\\..+])', () => {
    const rule = createRule('\\..+');

    expect(rule).to.have.property('selector', '&\\..+');
  });

  it('create an object with args (selector: RegExp, [--.+])', () => {
    const rule = createRule('--.+');

    expect(rule).to.have.property('selector', '&--.+');
  });

  it('create an object with args (selector: RegExp, [?.* &])', () => {
    const rule = createRule('?.* &');

    expect(rule).to.have.property('selector', '&?.* &');
  });
});
