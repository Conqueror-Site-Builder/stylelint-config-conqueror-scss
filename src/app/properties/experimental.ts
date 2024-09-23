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
          old: '::view-transition-old',
          new: '::view-transition-new',
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
      state: ':state',
    },
  },
  property: {
    anchorName: 'anchor-name',
    contentVisibility: 'content-visibility',
    fieldSizing: 'field-sizing',
    masonryAutoFlow: 'masonry-auto-flow',
    marginTrim: 'margin-trim',
    imageResolution: 'image-resolution',
    lineHeightStep: 'line-height-step',
    rubyAlign: 'ruby-align',
    whiteSpaceCollapse: 'white-space-collapse',
    overlay: 'overlay',
    mathShift: 'math-shift',
    timelineScope: 'timeline-scope',
    inset: {
      area: 'inset-area',
    },
    position: {
      anchor: 'position-anchor',
      try: 'position-try',
      tryOrder: 'position-try-order',
      tryFallbacks: 'position-try-fallbacks',
      visibility: 'position-visibility',
    },
    scroll: {
      timeline: 'scroll-timeline',
      timelineAxis: 'scroll-timeline-axis',
      timelineName: 'scroll-timeline-name',
    },
    tracks: {
      align: 'align-tracks',
      justify: 'justify-tracks',
    },
    text: {
      sizeAdjust: 'text-size-adjust',
      decorationSkip: 'text-decoration-skip',
      spacingTrim: 'text-spacing-trim',
      wrapMode: 'text-wrap-mode',
      wrapStyle: 'text-wrap-style',
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
