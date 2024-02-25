import { expect } from 'chai';
import { describe, it } from 'mocha';

import REGEXP from '../../src/utils/regexps.ts';

describe('Nested Selectors Pattern', () => {
  const NESTED_ATTRIBUTE = REGEXP.NESTED.ATTRIBUTE;
  const NESTED_CLASS = REGEXP.NESTED.CLASS;
  const NESTED_MODIFIER = REGEXP.NESTED.MODIFIER;
  const CHILD_ATTRIBUTE = REGEXP.CHILD.ATTRIBUTE;
  const CHILD_CLASS = REGEXP.CHILD.CLASS;

  it('nested (&[attribute)', () => {
    expect('&[attribute]').to.match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  it('nested (&[attribute] {})', () => {
    expect('&[attribute] {}').to.match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  it('nested (&[attribute=value])', () => {
    expect('&[attribute=value]').to.match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  it('nested (&[attribute*=value])', () => {
    expect('&[attribute*=value]').to.match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  it('nested (&[attribute=value] {})', () => {
    expect('&[attribute=value] {}').to.match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  it('nested (&[attribute*=value] {})', () => {
    expect('&[attribute*=value] {}').to.match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  it('nested (&[attribute="value"])', () => {
    expect("&[attribute='value']").to.match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  it('nested (&[attribute*="value"])', () => {
    expect("&[attribute*='value']").to.match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  it('nested (&[attribute="value"] {})', () => {
    expect("&[attribute='value'] {}").to.match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  it('nested (&[attribute*="value"] {})', () => {
    expect("&[attribute*='value'] {}").to.match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  it("nested (&[attribute='value'])", () => {
    expect("&[attribute='value']").to.match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  it("nested (&[attribute*='value'])", () => {
    expect("&[attribute*='value']").to.match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  it("nested (&[attribute='value'] {})", () => {
    expect("&[attribute='value'] {}").to.match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  it("nested (&[attribute*='value'] {})", () => {
    expect("&[attribute*='value'] {}").to.match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  it('nested (&.class)', () => {
    expect('&.class').to.match(new RegExp(`&${NESTED_CLASS}`));
  });

  it('nested (&.class {})', () => {
    expect('&.class {}').to.match(new RegExp(`&${NESTED_CLASS}`));
  });

  it('nested (&--modifier)', () => {
    expect('&--modifier').to.match(new RegExp(`&${NESTED_MODIFIER}`));
  });

  it('nested (&--modifier {})', () => {
    expect('&--modifier {}').to.match(new RegExp(`&${NESTED_MODIFIER}`));
  });

  it('child ([attribute] &)', () => {
    expect('[attribute] &').to.match(new RegExp(`&${CHILD_ATTRIBUTE}`));
  });

  it('child ([attribute] & {})', () => {
    expect('[attribute] & {}').to.match(new RegExp(`&${CHILD_ATTRIBUTE}`));
  });

  it('child (.class &)', () => {
    expect('.class &').to.match(new RegExp(`&${CHILD_CLASS}`));
  });

  it('child (.class & {})', () => {
    expect('.class & {}').to.match(new RegExp(`&${CHILD_CLASS}`));
  });
});
