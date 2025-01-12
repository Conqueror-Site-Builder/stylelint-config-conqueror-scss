import { createPropertiesGroup } from '#utils/create-properties-group/create-properties-group.ts';

import { experimental } from './experimental.ts';
import { nonStandard } from './non-standard.ts';

const experimentalProperty = experimental.property;
const nonStandardProperty = nonStandard.property;
const interaction = [
  await createPropertiesGroup({
    groupName: 'Actions',
    properties: [
      'cursor',
      'pointer-events',
      'touch-action',
      'resize',
      nonStandardProperty.zoom,
    ],
  }),
  await createPropertiesGroup({
    groupName: 'User Actions',
    properties: ['user-select', 'user-zoom'],
  }),
  await createPropertiesGroup({
    groupName: 'Overscroll',
    properties: [
      'overscroll-behavior',
      'overscroll-behavior-block',
      'overscroll-behavior-inline',
    ],
  }),
  await createPropertiesGroup({
    groupName: 'Scroll',
    properties: [
      'scroll-margin',
      'scroll-margin-block',
      'scroll-margin-block-start',
      'scroll-margin-block-end',
      'scroll-margin-inline',
      'scroll-margin-inline-start',
      'scroll-margin-inline-end',
      'scroll-padding',
      'scroll-padding-block',
      'scroll-padding-block-start',
      'scroll-padding-block-end',
      'scroll-padding-inline',
      'scroll-padding-inline-start',
      'scroll-padding-inline-end',
      'scroll-snap-type',
      'scroll-snap-align',
      'scroll-snap-stop',
      'scroll-behavior',
      experimentalProperty.scroll.timeline,
      experimentalProperty.scroll.timelineName,
      experimentalProperty.scroll.timelineAxis,
    ],
  }),
];

export { interaction };
