import { createPropertiesGroup } from '#utils/create-properties-group/create-properties-group.ts';

import { experimental } from './experimental.ts';

const experimentalProperty = experimental.property;
const common = [
  await createPropertiesGroup({
    groupName: 'Common',
    properties: ['all', 'page'],
  }),
  await createPropertiesGroup({
    groupName: 'Print',
    properties: ['break-before', 'break-inside', 'break-after', 'orphans', 'widows'],
  }),
  await createPropertiesGroup({
    groupName: 'Math',
    properties: ['math-depth', experimentalProperty.mathShift, 'math-style'],
  }),
];

export { common };
