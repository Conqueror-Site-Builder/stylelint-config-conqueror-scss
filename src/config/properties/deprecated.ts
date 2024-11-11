const deprecated = {
  property: {
    float: 'float',
    clear: 'clear',
    r: 'r',
    cx: 'cx',
    cy: 'cy',
    rx: 'rx',
    ry: 'ry',
    top: 'top',
    right: 'right',
    bottom: 'bottom',
    left: 'left',
    borderTop: 'border-top',
    borderRight: 'border-right',
    borderBottom: 'border-bottom',
    borderLeft: 'border-left',
    height: 'height',
    width: 'width',
    wordWrap: 'word-wrap',
    margin: {
      top: 'margin-top',
      right: 'margin-right',
      bottom: 'margin-bottom',
      left: 'margin-left',
    },
    border: {
      top: {
        leftRadius: 'border-top-left-radius',
        rightRadius: 'border-top-right-radius',
        width: 'border-top-width',
        style: 'border-top-style',
        color: 'border-top-color',
      },
      right: {
        width: 'border-right-width',
        style: 'border-right-style',
        color: 'border-right-color',
      },
      bottom: {
        leftRadius: 'border-bottom-left-radius',
        rightRadius: 'border-bottom-right-radius',
        width: 'border-bottom-width',
        style: 'border-bottom-style',
        color: 'border-bottom-color',
      },
      left: {
        width: 'border-left-width',
        style: 'border-left-style',
        color: 'border-left-color',
      },
    },
    contain: {
      intrinsic: {
        height: 'contain-intrinsic-height',
        width: 'contain-intrinsic-width',
      },
    },
    min: { height: 'min-height', width: 'min-width' },
    max: { height: 'max-height', width: 'max-width' },
    padding: {
      top: 'padding-top',
      right: 'padding-right',
      bottom: 'padding-bottom',
      left: 'padding-left',
    },
    overflow: {
      y: 'overflow-y',
      x: 'overflow-x',
    },
    overscroll: {
      behavior: {
        y: 'overscroll-behavior-y',
        x: 'overscroll-behavior-x',
      },
    },
    scroll: {
      margin: {
        top: 'scroll-margin-top',
        right: 'scroll-margin-right',
        bottom: 'scroll-margin-bottom',
        left: 'scroll-margin-left',
      },
      padding: {
        top: 'scroll-padding-top',
        right: 'scroll-padding-right',
        bottom: 'scroll-padding-bottom',
        left: 'scroll-padding-left',
      },
    },
  },
};

export { deprecated };
