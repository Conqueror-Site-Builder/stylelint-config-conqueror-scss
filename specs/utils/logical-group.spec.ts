import { describe, expect, test as spec } from 'vitest';

import { createLogicalGroup } from '#utils';

describe('Create Logical Group', async () => {
  spec(
    'should create an object with (groupName: String, properties: [])',
    async () => {
      const properties = ['display', 'z-index'];

      await createLogicalGroup({
        groupName: 'Test Group Name',
        properties,
      }).then((parameters) => {
        expect(parameters.groupName).equal('Test Group Name');
        expect(parameters.properties).equal(properties);
      });
    },
  );
});
