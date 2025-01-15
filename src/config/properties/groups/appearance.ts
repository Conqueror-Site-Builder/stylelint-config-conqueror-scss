import { createPropertiesGroup } from '#utils/create-properties-group/create-properties-group.ts';

import { experimental } from '../experimental.ts';

const experimentalProperty = experimental.property;
const appearance = [
  await createPropertiesGroup({
    groupName: 'Outline',
    properties: [
      'outline',
      'outline-width',
      'outline-style',
      'outline-color',
      'outline-offset',
    ],
  }),
  await createPropertiesGroup({
    groupName: 'Scrollbar',
    properties: ['scrollbar-gutter', 'scrollbar-width', 'scrollbar-color'],
  }),
  await createPropertiesGroup({
    groupName: 'Mask',
    properties: [
      'mask',
      'mask-border',
      'mask-border-source',
      'mask-border-slice',
      'mask-border-width',
      'mask-border-outset',
      'mask-border-repeat',
      'mask-border-mode',
      'mask-image',
      'mask-clip',
      'mask-origin',
      'mask-type',
      'mask-size',
      'mask-position',
      'mask-repeat',
      'mask-mode',
      'mask-composite',
    ],
  }),
  await createPropertiesGroup({
    groupName: 'Filter',
    properties: [
      experimentalProperty.overlay,
      'filter',
      'backdrop-filter',
      'mix-blend-mode',
      'clip-path',
      'clip-rule',
      'flood-color',
      'flood-opacity',
    ],
  }),
  await createPropertiesGroup({
    groupName: 'Background',
    properties: [
      'background',
      'background-image',
      'background-color',
      'background-origin',
      'background-size',
      'background-position',
      'background-position-y',
      'background-position-x',
      'background-repeat',
      'background-attachment',
      'background-clip',
      'background-blend-mode',
    ],
  }),
  await createPropertiesGroup({
    groupName: 'Color',
    properties: [
      'color-scheme',
      'accent-color',
      'lighting-color',
      'color',
      'color-interpolation',
      'color-interpolation-filters',
      'caret-color',
      'forced-color-adjust',
      'print-color-adjust',
    ],
  }),
];

export { appearance };
