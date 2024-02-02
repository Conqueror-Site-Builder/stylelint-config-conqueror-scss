// Copyright (c) 2024 Conqueror Site Builder

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
    // Grid
    masonryAutoFlow: 'masonry-auto-flow',
    // Alignment
    alignTracks: 'align-tracks',
    justifyTracks: 'justify-tracks',
    // Margin
    marginTrim: 'margin-trim',
    // Text
    textSizeAdjust: 'text-size-adjust',
    textDecorationSkip: 'text-decoration-skip',
    // Typography
    initialLetter: 'initial-letter',
    initialLetterAlign: 'initial-letter-align',
    lineHeightStep: 'line-height-step',
    whiteSpaceCollapse: 'white-space-collapse',
    rubyAlign: 'ruby-align',
    // Image
    imageResolution: 'image-resolution',
    // Transition
    transitionBehavior: 'transition-behavior',
    // Animation
    animationTimeline: 'animation-timeline',
    // Animation Range
    animationRange: 'animation-range',
    animationRangeStart: 'animation-range-start',
    animationRangeEnd: 'animation-range-end',
    // View Timeline
    timelineScope: 'timeline-scope',
    viewTimeline: 'view-timeline',
    viewTimelineName: 'view-timeline-name',
    viewTimelineAxis: 'view-timeline-axis',
    viewTimelineInset: 'view-timeline-inset',
    viewTransitionName: 'view-transition-name',
    // Math
    mathShift: 'math-shift',
    // Scroll Timeline
    scrollTimeline: 'scroll-timeline',
    scrollTimelineAxis: 'scroll-timeline-axis',
    scrollTimelineName: 'scroll-timeline-name',
    // Other
    overlay: 'overlay',
    contentVisibility: 'content-visibility',
  },
};

export default experimental;
