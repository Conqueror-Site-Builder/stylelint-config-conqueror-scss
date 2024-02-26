export default {
  pseudo: {
    element: {
      webkit: {
        innerSpinButton: '::-webkit-inner-spin-button',
        scrollbar: '::-webkit-scrollbar',
        meter: {
          bar: '::-webkit-meter-bar',
          innerElement: '::-webkit-meter-inner-element',
          value: {
            evenLessGood: '::-webkit-meter-even-less-good-value',
            optimum: '::-webkit-meter-optimum-value',
            subOptimum: '::-webkit-meter-suboptimum-value',
          },
        },
        progress: {
          bar: '::-webkit-progress-bar',
          innerElement: '::-webkit-progress-inner-element',
          value: '::-webkit-progress-value',
        },
        search: {
          button: {
            cancel: '::-webkit-search-cancel-button',
            results: '::-webkit-search-results-button',
          },
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
        node: {
          first: ':-moz-first-node',
          last: ':-moz-last-node',
        },
      },
    },
  },
  property: {
    font: { smooth: 'font-smooth' },
    zoom: 'zoom',
  },
};
