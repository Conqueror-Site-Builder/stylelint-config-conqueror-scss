import { createPropertiesGroup } from '#utils/create-properties-group/create-properties-group.ts';

const svg = [
  await createPropertiesGroup({
    groupName: 'SVG',
    properties: [
      'fill',
      'fill-opacity',
      'fill-rule',
      'stroke',
      'stroke-dasharray',
      'stroke-dashoffset',
      'stroke-linecap',
      'stroke-linejoin',
      'stroke-miterlimit',
      'stroke-opacity',
      'stroke-width',
      'paint-order',
      'stop-color',
      'stop-opacity',
    ],
  }),
  await createPropertiesGroup({
    groupName: 'Marker',
    properties: ['marker', 'marker-start', 'marker-mid', 'marker-end'],
  }),
  await createPropertiesGroup({
    groupName: 'Shape',
    properties: [
      'shape-rendering',
      'shape-outside',
      'shape-margin',
      'shape-image-threshold',
    ],
  }),
];

export { svg };
