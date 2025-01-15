import { createPropertiesGroup } from '#utils/create-properties-group/create-properties-group.ts';

import { limitedAvailability } from '../limited-availability.ts';

const limitedAvailabilityProperty = limitedAvailability.property;
const layout = [
  await createPropertiesGroup({
    groupName: 'Display',
    properties: [
      'display',
      'opacity',
      'isolation',
      'visibility',
      'content-visibility',
      'backface-visibility',
      'appearance',
    ],
  }),
  await createPropertiesGroup({
    groupName: 'container',
    properties: ['container', 'container-name', 'container-type'],
  }),
  await createPropertiesGroup({
    groupName: 'Contain',
    properties: [
      'contain',
      'contain-intrinsic-size',
      'contain-intrinsic-block-size',
      'contain-intrinsic-inline-size',
    ],
  }),
  await createPropertiesGroup({
    groupName: 'Flex',
    properties: [
      'flex',
      'flex-grow',
      'flex-shrink',
      'flex-basis',
      'flex-flow',
      'flex-direction',
      'flex-wrap',
      'order',
    ],
  }),
  await createPropertiesGroup({
    groupName: 'Grid',
    properties: [
      'grid',
      'grid-area',
      'grid-template',
      'grid-template-areas',
      'grid-template-columns',
      'grid-template-rows',
      'grid-auto-flow',
      'grid-auto-columns',
      'grid-column',
      'grid-column-start',
      'grid-column-end',
      'grid-auto-rows',
      'grid-row',
      'grid-row-start',
      'grid-row-end',
      'gap',
      'column-gap',
      'row-gap',
    ],
  }),
  await createPropertiesGroup({
    groupName: 'Columns',
    properties: [
      'columns',
      'column-width',
      'column-fill',
      'column-count',
      'column-span',
      'column-rule',
      'column-rule-width',
      'column-rule-style',
      'column-rule-color',
    ],
  }),
  await createPropertiesGroup({
    groupName: 'Table',
    properties: [
      'table-layout',
      'border-spacing',
      'border-collapse',
      'empty-cells',
      'vertical-align',
      'caption-side',
    ],
  }),
  await createPropertiesGroup({
    groupName: 'Alignment',
    properties: [
      'dominant-baseline',
      limitedAvailabilityProperty.alignment.baseline,
      'place-content',
      'place-items',
      'place-self',
      'align-content',
      'align-items',
      'align-self',
      'justify-content',
      'justify-items',
      'justify-self',
    ],
  }),
];

export { layout };
