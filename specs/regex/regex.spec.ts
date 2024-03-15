import { expect } from 'chai';
import { describe, it } from 'mocha';

import regex from '../../src/utils/regexps.ts';

describe('Nested Selectors Pattern', () => {
  const NESTED_ATTRIBUTE = regex.nested.ATTRIBUTE_PATTERN;
  const NESTED_CLASS = regex.nested.CLASS_PATTERN;
  const NESTED_MODIFIER = regex.nested.MODIFIER_PATTERN;
  const CHILD_ATTRIBUTE = regex.child.ATTRIBUTE_PATTERN;
  const CHILD_CLASS = regex.child.CLASS_PATTERN;

  it('nested (&[attribute)', () => {
    expect('&[attribute]').match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  it('nested (&[attribute] {})', () => {
    expect('&[attribute] {}').match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  it('nested (&[attribute=value])', () => {
    expect('&[attribute=value]').match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  it('nested (&[attribute*=value])', () => {
    expect('&[attribute*=value]').match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  it('nested (&[attribute=value] {})', () => {
    expect('&[attribute=value] {}').match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  it('nested (&[attribute*=value] {})', () => {
    expect('&[attribute*=value] {}').match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  it('nested (&[attribute="value"])', () => {
    expect("&[attribute='value']").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  it('nested (&[attribute*="value"])', () => {
    expect("&[attribute*='value']").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  it('nested (&[attribute="value"] {})', () => {
    expect("&[attribute='value'] {}").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  it('nested (&[attribute*="value"] {})', () => {
    expect("&[attribute*='value'] {}").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  it("nested (&[attribute='value'])", () => {
    expect("&[attribute='value']").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  it("nested (&[attribute*='value'])", () => {
    expect("&[attribute*='value']").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  it("nested (&[attribute='value'] {})", () => {
    expect("&[attribute='value'] {}").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  it("nested (&[attribute*='value'] {})", () => {
    expect("&[attribute*='value'] {}").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  it('nested (&.class)', () => {
    expect('&.class').match(new RegExp(`&${NESTED_CLASS}`));
  });

  it('nested (&.class {})', () => {
    expect('&.class {}').match(new RegExp(`&${NESTED_CLASS}`));
  });

  it('nested (&--modifier)', () => {
    expect('&--modifier').match(new RegExp(`&${NESTED_MODIFIER}`));
  });

  it('nested (&--modifier {})', () => {
    expect('&--modifier {}').match(new RegExp(`&${NESTED_MODIFIER}`));
  });

  it('child ([attribute] &)', () => {
    expect('[attribute] &').match(new RegExp(`&${CHILD_ATTRIBUTE}`));
  });

  it('child ([attribute] & {})', () => {
    expect('[attribute] & {}').match(new RegExp(`&${CHILD_ATTRIBUTE}`));
  });

  it('child (.class &)', () => {
    expect('.class &').match(new RegExp(`&${CHILD_CLASS}`));
  });

  it('child (.class & {})', () => {
    expect('.class & {}').match(new RegExp(`&${CHILD_CLASS}`));
  });
});
