import { describe, expect, test as spec } from 'vitest';

import { propertiesGroup } from '#utils';

describe('Create Properties Group', async () => {
  spec(
    'should create an object with (groupName: String, properties: [])',
    async () => {
      const properties = ['display', 'z-index'];

      await propertiesGroup({
        groupName: 'Test Group Name',
        properties,
      }).then((parameters) => {
        expect(parameters.groupName).equal('Test Group Name');
        expect(parameters.properties).equal(properties);
      });
    },
  );
});
