// Copyright (c) 2024 Conqueror Site Builder

const nonStandard = {
  pseudoElement: {
    webkit: {
      innerSPinButton: '&::-webkit-inner-spin-button',
      meterBar: '&::-webkit-meter-bar',
      meterEvenLessGoodValue: '&::-webkit-meter-even-less-good-value',
      meterInnerElement: '&::-webkit-meter-inner-element',
      meterOptimumValue: '&::-webkit-meter-optimum-value',
      meterSubOptimumValue: '&::-webkit-meter-suboptimum-value',
      progressBar: '&::-webkit-progress-bar',
      progressInnerElement: '&::-webkit-progress-inner-element',
      progressValue: '&::-webkit-progress-value',
      scrollbar: '&::-webkit-scrollbar',
      searchCancelButton: '&::-webkit-search-cancel-button',
      searchResultsButton: '&::-webkit-search-results-button',
    },
    moz: {
      colorSwatch: '::-moz-color-swatch',
      listBullet: '::-moz-list-bullet',
      listNumber: '::-moz-list-number',
      page: '::-moz-page',
      pageSequence: '::-moz-page-sequence',
      progressBar: '::-moz-progress-bar',
      rangeProgress: '::-moz-range-progress',
      rangeThumb: '::-moz-range-thumb',
      rangeTrack: '::-moz-range-track',
      scrolledPageSequence: '::-moz-scrolled-page-sequence',
    },
  },
  pseudoClass: {
    moz: {
      broken: '&:-moz-broken',
      dragOver: '&:-moz-drag-over',
      firstNode: '&:-moz-first-node',
      handlerBlocked: '&:-moz-handler-blocked',
      handlerCrashed: '&:-moz-handler-crashed',
      handlerDisabled: '&:-moz-handler-disabled',
      lastNode: '&:-moz-last-node',
      loading: '&:-moz-loading',
      localeDir: '&:-moz-locale-dir',
      onlyWhitespace: '&:-moz-only-whitespace',
      submitInvalid: '&:-moz-submit-invalid',
      suppressed: '&:-moz-suppressed',
      userDisabled: '&:-moz-user-disabled',
      windowInactive: '&:-moz-window-inactive',
    },
  },
  property: {
    fontSmooth: 'font-smooth',
    zoom: 'zoom',
  },
};

export default nonStandard;
