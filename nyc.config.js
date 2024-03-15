export default {
  'check-coverage': true,
  'skip-full': true,
  all: true,
  extends: '@istanbuljs/nyc-config-typescript',
  include: 'src/**/*.ts',
};
