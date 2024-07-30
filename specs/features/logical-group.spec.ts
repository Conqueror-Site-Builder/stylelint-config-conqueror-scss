import { describe, expect, test as spec } from 'vitest';

import { createLogicalGroup } from '#features';

describe('Create Logical Group', () => {
  spec('create an object with (groupName: String, properties: [])', async () => {
    const properties = ['display', 'z-index'];

    return createLogicalGroup({ groupName: 'Test Group Name', properties }).then(
      (parameter) => {
        expect(parameter.groupName).equal('Test Group Name');
        expect(parameter.properties).equal(properties);
        expect(parameter.emptyLineBefore).equal('always');
        expect(parameter.noEmptyLineBetween).equal(true);
        expect(parameter.order).equal('flexible');
      },
    );
  });
});
