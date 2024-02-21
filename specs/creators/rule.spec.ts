import { expect } from 'chai';
import { describe, it } from 'mocha';

import createRule from '../../src/creators/rule.ts';

describe('Create Rule', () => {
  let rule: any;

  beforeEach(() => {
    rule = createRule;
  });

  it('create an object with args (selector: String, [::pseudo-element])', () => {
    expect(rule('::pseudo-element')).to.have.property(
      'selector',
      '&::pseudo-element',
    );
  });

  it('create an object with args (selector: String, [:pseudo-class])', () => {
    expect(rule(':pseudo-class')).to.have.property('selector', '&:pseudo-class');
  });

  it('create an object with args (selector: RegExp, [\\[[^\\[\\]]+\\]])', () => {
    expect(rule('\\[[^\\[\\]]+\\]')).to.have.property(
      'selector',
      '&\\[[^\\[\\]]+\\]',
    );
  });

  it('create an object with args (selector: RegExp, [\\..+])', () => {
    expect(rule('\\..+')).to.have.property('selector', '&\\..+');
  });

  it('create an object with args (selector: RegExp, [--.+])', () => {
    expect(rule('--.+')).to.have.property('selector', '&--.+');
  });

  it('create an object with args (selector: RegExp, [?.* &])', () => {
    expect(rule('?.* &')).to.have.property('selector', '&?.* &');
  });
});
