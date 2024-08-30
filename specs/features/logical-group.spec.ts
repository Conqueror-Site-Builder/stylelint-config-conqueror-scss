import { describe, expect, test as spec } from 'vitest';

import { createLogicalGroup } from '#features/logical-group/logical-group.ts';

describe('Create Logical Group', () => {
  spec('create an object with (groupName: String, properties: [])', async () => {
    const properties = ['display', 'z-index'];

    return await createLogicalGroup({
      groupName: 'Test Group Name',
      properties,
    }).then((parameters) => {
      expect(parameters.groupName).equal('Test Group Name');
      expect(parameters.properties).equal(properties);
    });
  });
});
