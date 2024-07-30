import { describe, expect, test as spec } from 'vitest';

import { patterns } from '#shared';

describe('Nested Selectors Pattern', () => {
  const NESTED_ATTRIBUTE = patterns.nested.ATTRIBUTE_PATTERN;
  const NESTED_CLASS = patterns.nested.CLASS_PATTERN;
  const NESTED_MODIFIER = patterns.nested.MODIFIER_PATTERN;
  const CHILD_ATTRIBUTE = patterns.child.ATTRIBUTE_PATTERN;
  const CHILD_CLASS = patterns.child.CLASS_PATTERN;

  spec('nested (&[attribute)', async () => {
    expect('&[attribute]').match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec('nested (&[attribute] {})', async () => {
    expect('&[attribute] {}').match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec('nested (&[attribute=value])', async () => {
    expect('&[attribute=value]').match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec('nested (&[attribute*=value])', async () => {
    expect('&[attribute*=value]').match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec('nested (&[attribute=value] {})', async () => {
    expect('&[attribute=value] {}').match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec('nested (&[attribute*=value] {})', async () => {
    expect('&[attribute*=value] {}').match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec('nested (&[attribute="value"])', async () => {
    expect("&[attribute='value']").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec('nested (&[attribute*="value"])', async () => {
    expect("&[attribute*='value']").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec('nested (&[attribute="value"] {})', async () => {
    expect("&[attribute='value'] {}").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec('nested (&[attribute*="value"] {})', async () => {
    expect("&[attribute*='value'] {}").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec("nested (&[attribute='value'])", async () => {
    expect("&[attribute='value']").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec("nested (&[attribute*='value'])", async () => {
    expect("&[attribute*='value']").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec("nested (&[attribute='value'] {})", async () => {
    expect("&[attribute='value'] {}").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec("nested (&[attribute*='value'] {})", async () => {
    expect("&[attribute*='value'] {}").match(new RegExp(`&${NESTED_ATTRIBUTE}`));
  });

  spec('nested (&.class)', async () => {
    expect('&.class').match(new RegExp(`&${NESTED_CLASS}`));
  });

  spec('nested (&.class {})', async () => {
    expect('&.class {}').match(new RegExp(`&${NESTED_CLASS}`));
  });

  spec('nested (&--modifier)', async () => {
    expect('&--modifier').match(new RegExp(`&${NESTED_MODIFIER}`));
  });

  spec('nested (&--modifier {})', async () => {
    expect('&--modifier {}').match(new RegExp(`&${NESTED_MODIFIER}`));
  });

  spec('child ([attribute] &)', async () => {
    expect('[attribute] &').match(new RegExp(`&${CHILD_ATTRIBUTE}`));
  });

  spec('child ([attribute] & {})', async () => {
    expect('[attribute] & {}').match(new RegExp(`&${CHILD_ATTRIBUTE}`));
  });

  spec('child (.class &)', async () => {
    expect('.class &').match(new RegExp(`&${CHILD_CLASS}`));
  });

  spec('child (.class & {})', async () => {
    expect('.class & {}').match(new RegExp(`&${CHILD_CLASS}`));
  });
});
