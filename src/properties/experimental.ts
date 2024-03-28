const experimental = {
  pseudo: {
    element: {
      targetText: '::target-text',
      viewTransition: '::view-transition',
      error: {
        grammar: '::grammar-error',
        spelling: '::spelling-error',
      },
      view: {
        transition: {
          group: '::view-transition-group',
          imagePair: '::view-transition-image-pair',
          new: '::view-transition-new',
          old: '::view-transition-old',
        },
      },
      moz: {
        focusInner: '::-moz-focus-inner',
      },
      webkit: {
        slider: {
          runnableTrack: '::-webkit-slider-runnable-track',
          thumb: '::-webkit-slider-thumb',
        },
      },
    },
    class: {
      blank: ':blank',
      targetWithin: ':target-within',
    },
  },
  property: {
    contentVisibility: 'content-visibility',
    masonryAutoFlow: 'masonry-auto-flow',
    marginTrim: 'margin-trim',
    imageResolution: 'image-resolution',
    lineHeightStep: 'line-height-step',
    rubyAlign: 'ruby-align',
    whiteSpaceCollapse: 'white-space-collapse',
    transitionBehavior: 'transition-behavior',
    overlay: 'overlay',
    mathShift: 'math-shift',
    timelineScope: 'timeline-scope',
    scroll: {
      timeline: 'scroll-timeline',
      timelineAxis: 'scroll-timeline-axis',
      timelineName: 'scroll-timeline-name',
    },
    text: {
      sizeAdjust: 'text-size-adjust',
      decorationSkip: 'text-decoration-skip',
    },
    tracks: {
      align: 'align-tracks',
      justify: 'justify-tracks',
    },
    initial: {
      letter: 'initial-letter',
      letterAlign: 'initial-letter-align',
    },
    animation: {
      timeline: 'animation-timeline',
      range: 'animation-range',
      rangeStart: 'animation-range-start',
      rangeEnd: 'animation-range-end',
    },
    view: {
      timeline: 'view-timeline',
      timelineName: 'view-timeline-name',
      timelineAxis: 'view-timeline-axis',
      timelineInset: 'view-timeline-inset',
      transitionName: 'view-transition-name',
    },
  },
};

export { experimental };
