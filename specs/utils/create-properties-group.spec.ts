import { describe, expect, test as spec } from 'vitest';

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
        expect(parameters.groupName).equal('Test Group Name');
        expect(parameters.properties).equal(properties);
      });
    },
  );
});
