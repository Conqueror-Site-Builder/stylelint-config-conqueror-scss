import { createPropertiesGroup } from '#utils/create-properties-group/create-properties-group.ts';

import { experimental } from '../experimental.ts';

const experimentalProperty = experimental.property;
const image = [
  await createPropertiesGroup({
    groupName: 'Object',
    properties: ['object-fit', 'object-position'],
  }),
  await createPropertiesGroup({
    groupName: 'Image',
    properties: [
      'image-orientation',
      'image-rendering',
      experimentalProperty.imageResolution,
    ],
  }),
];

export { image };
