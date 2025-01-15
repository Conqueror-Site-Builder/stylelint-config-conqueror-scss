import { createPropertiesGroup } from '#utils/create-properties-group/create-properties-group.ts';

import { experimental } from '../experimental.ts';
import { limitedAvailability } from '../limited-availability.ts';

const experimentalProperty = experimental.property;
const limitedAvailabilityProperty = limitedAvailability.property;
const positioning = [
  await createPropertiesGroup({
    groupName: 'Position',
    properties: [
      'position',
      experimentalProperty.position.anchor,
      experimentalProperty.position.area,
      experimentalProperty.position.visibility,
      experimentalProperty.position.try,
      experimentalProperty.position.tryOrder,
      experimentalProperty.position.tryFallbacks,
      'offset',
      'offset-position',
      'offset-path',
      'offset-distance',
      'offset-rotate',
      'offset-anchor',
      'inset',
      'inset-block',
      'inset-block-start',
      'inset-block-end',
      'inset-inline',
      'inset-inline-start',
      'inset-inline-end',
      'z-index',
    ],
  }),
  await createPropertiesGroup({
    groupName: 'Transform',
    properties: [
      'transform',
      'transform-origin',
      'transform-box',
      'transform-style',
      'translate',
      'scale',
      'rotate',
      'will-change',
      'perspective',
      'perspective-origin',
    ],
  }),
  await createPropertiesGroup({
    groupName: 'View Timeline',
    properties: [
      experimentalProperty.view.timeline,
      experimentalProperty.view.timelineName,
      experimentalProperty.view.timelineAxis,
      experimentalProperty.view.timelineInset,
      limitedAvailabilityProperty.view.transitionName,
    ],
  }),
];

export { positioning };
