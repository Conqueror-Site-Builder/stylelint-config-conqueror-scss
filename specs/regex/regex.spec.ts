import { describe, expect, test as spec } from 'vitest';

import { regex } from '#shared';

describe('Nested Selectors Regex', () => {
  const NESTED_ATTRIBUTE = regex.nested.ATTRIBUTE_REGEX;
  const NESTED_CLASS = regex.nested.CLASS_REGEX;
  const NESTED_MODIFIER = regex.nested.MODIFIER_REGEX;
  const CHILD_ATTRIBUTE = regex.child.ATTRIBUTE_REGEX;
  const CHILD_CLASS = regex.child.CLASS_REGEX;

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
