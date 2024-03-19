import { describe, expect, test } from 'vitest';

import regex from '../../src/utils/regexps.ts';

describe('Nested Selectors Pattern', () => {
  const NESTED_ATTRIBUTE = regex.nested.ATTRIBUTE_PATTERN;
  const NESTED_CLASS = regex.nested.CLASS_PATTERN;
  const NESTED_MODIFIER = regex.nested.MODIFIER_PATTERN;
  const CHILD_ATTRIBUTE = regex.child.ATTRIBUTE_PATTERN;
  const CHILD_CLASS = regex.child.CLASS_PATTERN;

  test('nested (&[attribute)', () => {
    expect('&[attribute]').match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  test('nested (&[attribute] {})', () => {
    expect('&[attribute] {}').match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  test('nested (&[attribute=value])', () => {
    expect('&[attribute=value]').match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  test('nested (&[attribute*=value])', () => {
    expect('&[attribute*=value]').match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  test('nested (&[attribute=value] {})', () => {
    expect('&[attribute=value] {}').match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  test('nested (&[attribute*=value] {})', () => {
    expect('&[attribute*=value] {}').match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  test('nested (&[attribute="value"])', () => {
    expect("&[attribute='value']").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  test('nested (&[attribute*="value"])', () => {
    expect("&[attribute*='value']").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  test('nested (&[attribute="value"] {})', () => {
    expect("&[attribute='value'] {}").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  test('nested (&[attribute*="value"] {})', () => {
    expect("&[attribute*='value'] {}").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  test("nested (&[attribute='value'])", () => {
    expect("&[attribute='value']").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  test("nested (&[attribute*='value'])", () => {
    expect("&[attribute*='value']").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  test("nested (&[attribute='value'] {})", () => {
    expect("&[attribute='value'] {}").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  test("nested (&[attribute*='value'] {})", () => {
    expect("&[attribute*='value'] {}").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  test('nested (&.class)', () => {
    expect('&.class').match(new RegExp(`&${NESTED_CLASS}`));
  });

  test('nested (&.class {})', () => {
    expect('&.class {}').match(new RegExp(`&${NESTED_CLASS}`));
  });

  test('nested (&--modifier)', () => {
    expect('&--modifier').match(new RegExp(`&${NESTED_MODIFIER}`));
  });

  test('nested (&--modifier {})', () => {
    expect('&--modifier {}').match(new RegExp(`&${NESTED_MODIFIER}`));
  });

  test('child ([attribute] &)', () => {
    expect('[attribute] &').match(new RegExp(`&${CHILD_ATTRIBUTE}`));
  });

  test('child ([attribute] & {})', () => {
    expect('[attribute] & {}').match(new RegExp(`&${CHILD_ATTRIBUTE}`));
  });

  test('child (.class &)', () => {
    expect('.class &').match(new RegExp(`&${CHILD_CLASS}`));
  });

  test('child (.class & {})', () => {
    expect('.class & {}').match(new RegExp(`&${CHILD_CLASS}`));
  });
});
