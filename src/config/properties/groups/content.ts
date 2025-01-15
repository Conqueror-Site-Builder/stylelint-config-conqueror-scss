import { createPropertiesGroup } from '#utils/create-properties-group/create-properties-group.ts';

const content = [
  await createPropertiesGroup({
    groupName: 'Content',
    properties: ['content', 'quotes'],
  }),
  await createPropertiesGroup({
    groupName: 'Counter',
    properties: ['counter-set', 'counter-increment', 'counter-reset'],
  }),
  await createPropertiesGroup({
    groupName: 'List',
    properties: [
      'list-style',
      'list-style-type',
      'list-style-position',
      'list-style-image',
    ],
  }),
];

export { content };
