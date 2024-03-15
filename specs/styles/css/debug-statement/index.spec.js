import { expect } from 'chai';
import { describe, it } from 'mocha';
import fs from 'node:fs';

import stylelint from 'stylelint';

import config from '../../../../src/index.js';

const invalidScss = fs.readFileSync(
  './specs/styles/css/debug-statement/index.scss',
  'utf8',
);

describe('', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      config,
      code: invalidScss,
    });
  });

  it('did error', async () => {
    return result.then((data) => expect(data.errored).to.be.true);
  });

  // it('flags no warnings', () => {
  //   return result.then((data) => expect(data.results[0].warnings).to.have.length(0));
  // });
});
