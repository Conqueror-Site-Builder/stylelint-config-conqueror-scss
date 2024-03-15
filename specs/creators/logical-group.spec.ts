import { expect } from 'chai';
import { describe, it } from 'mocha';

import createLogicalGroup from '../../src/creators/logical-group.ts';

describe('Create Logical Group', () => {
  it('create an object with args (groupName: String, properties: [])', async () => {
    const properties = ['display', 'z-index'];

    return createLogicalGroup('Test Group Name', properties).then((argument) => {
      expect(argument.groupName).equal('Test Group Name');
      expect(argument.properties).equal(properties);
    });
  });
});
