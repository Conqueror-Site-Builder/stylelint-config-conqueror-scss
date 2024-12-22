import { describe, expect, test as spec } from 'bun:test';

import { createPropertiesGroup } from '#utils/create-properties-group/create-properties-group.ts';

describe('Create Properties Group', async () => {
  spec(
    'should create an object with (groupName: String, properties: [])',
    async () => {
      const properties = ['display', 'z-index'];

      await createPropertiesGroup({
        groupName: 'Test Group Name',
        properties,
      }).then((parameters) => {
        expect(parameters.groupName).toEqual('Test Group Name');
        expect(parameters.properties).toEqual(properties);
      });
    },
  );
});
