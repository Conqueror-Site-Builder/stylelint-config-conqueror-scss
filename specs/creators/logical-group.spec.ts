import { describe, expect, test } from 'vitest';

import createLogicalGroup from '../../src/creators/logical-group.ts';

describe('Create Logical Group', () => {
  test('create an object with args (groupName: String, properties: [])', async () => {
    const properties = ['display', 'z-index'];

    return createLogicalGroup('Test Group Name', properties).then((argument) => {
      expect(argument.groupName).equal('Test Group Name');
      expect(argument.properties).equal(properties);
      expect(argument.emptyLineBefore).equal('always');
      expect(argument.noEmptyLineBetween).equal(true);
      expect(argument.order).equal('flexible');
    });
  });
});
