import { expect } from 'chai';
import { describe, it } from 'mocha';

import createLogicalGroup from '../../src/creators/logical-group.js';

describe('Create Logical Group', () => {
  it('create an object with args (groupName: String, properties: Array)', () => {
    const properties = ['display', 'z-index'];
    const logicalGroup = createLogicalGroup('Test Group Name', properties);

    expect(logicalGroup).to.have.property('groupName', 'Test Group Name');
    expect(logicalGroup).to.have.property('properties', properties);
  });
});
