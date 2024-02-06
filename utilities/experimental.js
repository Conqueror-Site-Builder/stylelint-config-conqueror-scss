// Copyright (c) 2024 Archoleat

const experimental = {
  pseudoElement: {
    grammarError: '&::grammar-error',
    spellingError: '&::spelling-error',
    targetText: '&::target-text',
    viewTransition: '&::view-transition',
    viewTransitionGroup: '&::view-transition-group',
    viewTransitionImagePair: '&::view-transition-image-pair',
    viewTransitionNew: '&::view-transition-new',
    viewTransitionOld: '&::view-transition-old',
    moz: {
      focusInner: '&::-moz-focus-inner',
    },
    webkit: {
      sliderRunnableTrack: '&::-webkit-slider-runnable-track',
      sliderThumb: '&::-webkit-slider-thumb',
    },
  },
  pseudoClass: {
    blank: '&:blank',
    targetWithin: '&:target-within',
  },
  property: {
    contentVisibility: 'content-visibility',
    masonryAutoFlow: 'masonry-auto-flow',
    alignTracks: 'align-tracks',
    justifyTracks: 'justify-tracks',
    marginTrim: 'margin-trim',
    textSizeAdjust: 'text-size-adjust',
    textDecorationSkip: 'text-decoration-skip',
    initialLetter: 'initial-letter',
    initialLetterAlign: 'initial-letter-align',
    lineHeightStep: 'line-height-step',
    rubyAlign: 'ruby-align',
    whiteSpaceCollapse: 'white-space-collapse',
    imageResolution: 'image-resolution',
    transitionBehavior: 'transition-behavior',
    animationTimeline: 'animation-timeline',
    animationRange: 'animation-range',
    animationRangeStart: 'animation-range-start',
    animationRangeEnd: 'animation-range-end',
    overlay: 'overlay',
    mathShift: 'math-shift',
    timelineScope: 'timeline-scope',
    viewTimeline: 'view-timeline',
    viewTimelineName: 'view-timeline-name',
    viewTimelineAxis: 'view-timeline-axis',
    viewTimelineInset: 'view-timeline-inset',
    viewTransitionName: 'view-transition-name',
    scrollTimeline: 'scroll-timeline',
    scrollTimelineAxis: 'scroll-timeline-axis',
    scrollTimelineName: 'scroll-timeline-name',
  },
};

export default experimental;
