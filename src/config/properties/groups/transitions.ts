import { createPropertiesGroup } from '#utils/create-properties-group/create-properties-group.ts';

import { experimental } from '../experimental.ts';

const experimentalProperty = experimental.property;
const transitions = [
  await createPropertiesGroup({
    groupName: 'Transition',
    properties: [
      'transition',
      'transition-property',
      'transition-duration',
      'transition-timing-function',
      'transition-delay',
      'transition-behavior',
    ],
  }),
  await createPropertiesGroup({
    groupName: 'Animation',
    properties: [
      'animation',
      'animation-name',
      'animation-duration',
      'animation-timing-function',
      'animation-delay',
      'animation-iteration-count',
      'animation-direction',
      'animation-fill-mode',
      'animation-play-state',
      'animation-composition',
      experimentalProperty.timelineScope,
      experimentalProperty.animation.timeline,
      experimentalProperty.animation.range,
      experimentalProperty.animation.rangeStart,
      experimentalProperty.animation.rangeEnd,
    ],
  }),
];

export { transitions };
