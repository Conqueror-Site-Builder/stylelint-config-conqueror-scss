const experimental = {
  pseudo: {
    element: {
      detailsContent: '::details-content',
      webkit: {
        slider: {
          thumb: '::-webkit-slider-thumb',
        },
      },
    },
    class: {
      blank: ':blank',
      current: ':current',
      hasSlotted: ':has-slotted',
      localLink: ':local-link',
      targetWithin: ':target-within',
    },
  },
  property: {
    anchorName: 'anchor-name',
    fieldSizing: 'field-sizing',
    marginTrim: 'margin-trim',
    imageResolution: 'image-resolution',
    interpolateSize: 'interpolate-size',
    lineHeightStep: 'line-height-step',
    overlay: 'overlay',
    mathShift: 'math-shift',
    timelineScope: 'timeline-scope',
    position: {
      anchor: 'position-anchor',
      area: 'position-area',
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
    font: { synthesisPosition: 'font-synthesis-position' },
    text: {
      sizeAdjust: 'text-size-adjust',
      decorationSkip: 'text-decoration-skip',
      spacingTrim: 'text-spacing-trim',
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
    },
  },
};

export { experimental };
