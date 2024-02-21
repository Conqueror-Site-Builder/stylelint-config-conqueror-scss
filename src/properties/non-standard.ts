const nonStandard = {
  pseudo: {
    element: {
      webkit: {
        innerSpinButton: '::-webkit-inner-spin-button',
        scrollbar: '::-webkit-scrollbar',
        meter: {
          bar: '::-webkit-meter-bar',
          evenLessGoodValue: '::-webkit-meter-even-less-good-value',
          innerElement: '::-webkit-meter-inner-element',
          optimumValue: '::-webkit-meter-optimum-value',
          subOptimumValue: '::-webkit-meter-suboptimum-value',
        },
        progress: {
          bar: '::-webkit-progress-bar',
          innerElement: '::-webkit-progress-inner-element',
          value: '::-webkit-progress-value',
        },
        search: {
          cancelButton: '::-webkit-search-cancel-button',
          resultsButton: '::-webkit-search-results-button',
        },
      },
      moz: {
        colorSwatch: '::-moz-color-swatch',
        page: '::-moz-page',
        pageSequence: '::-moz-page-sequence',
        progressBar: '::-moz-progress-bar',
        scrolledPageSequence: '::-moz-scrolled-page-sequence',
        list: {
          bullet: '::-moz-list-bullet',
          number: '::-moz-list-number',
        },
        range: {
          progress: '::-moz-range-progress',
          thumb: '::-moz-range-thumb',
          track: '::-moz-range-track',
        },
      },
    },
    class: {
      moz: {
        broken: ':-moz-broken',
        dragOver: ':-moz-drag-over',
        firstNode: ':-moz-first-node',
        lastNode: ':-moz-last-node',
        loading: ':-moz-loading',
        localeDir: ':-moz-locale-dir',
        onlyWhitespace: ':-moz-only-whitespace',
        submitInvalid: ':-moz-submit-invalid',
        suppressed: ':-moz-suppressed',
        userDisabled: ':-moz-user-disabled',
        windowInactive: ':-moz-window-inactive',
        handler: {
          blocked: ':-moz-handler-blocked',
          crashed: ':-moz-handler-crashed',
          disabled: ':-moz-handler-disabled',
        },
      },
    },
  },
  property: {
    fontSmooth: 'font-smooth',
    zoom: 'zoom',
  },
};

export default nonStandard;
