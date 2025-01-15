const limitedAvailability = {
  pseudo: {
    element: {
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
    },
  },
  property: {
    alignment: { baseline: 'alignment-baseline' },
    initial: {
      letter: 'initial-letter',
    },
    view: {
      transitionName: 'view-transition-name',
    },
  },
};

export { limitedAvailability };
