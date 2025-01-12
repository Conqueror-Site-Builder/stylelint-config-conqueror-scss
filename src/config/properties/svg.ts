import { createPropertiesGroup } from '#utils/create-properties-group/create-properties-group.ts';

const svg = [
  await createPropertiesGroup({
    groupName: 'SVG',
    properties: ['fill', 'stroke', 'paint-order'],
  }),
  await createPropertiesGroup({
    groupName: 'Marker',
    properties: ['marker', 'marker-start', 'marker-mid', 'marker-end'],
  }),
  await createPropertiesGroup({
    groupName: 'Shape',
    properties: ['shape-outside', 'shape-margin', 'shape-image-threshold'],
  }),
];

export { svg };
