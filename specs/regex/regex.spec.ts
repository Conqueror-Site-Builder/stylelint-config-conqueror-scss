import { expect } from 'chai';
import { describe, it } from 'mocha';

import REGEXP from '../../src/utils/regexps.ts';

describe('Nested Selectors Pattern', () => {
  it('nested (String, [&[attribute]])', () => {
    expect('&[attribute]').to.match(new RegExp(`&${REGEXP.NESTED.ATTRIBUTE}`));
  });

  it('nested (String, [&.class])', () => {
    expect('&.class').to.match(new RegExp(`&${REGEXP.NESTED.CLASS}`));
  });

  it('nested (String, [&--modifier])', () => {
    expect('&--modifier').to.match(new RegExp(`&${REGEXP.NESTED.MODIFIER}`));
  });

  it('nested (String, [.class &])', () => {
    expect('.class &').to.match(new RegExp(`&${REGEXP.NESTED.PARENT}`));
  });
});
