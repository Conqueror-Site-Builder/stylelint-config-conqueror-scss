export default {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          {
            type: 'build',
            release: false,
          },
          {
            type: 'chore',
            release: false,
          },
          {
            type: 'ci',
            release: false,
          },
          {
            type: 'docs',
            release: false,
          },
          {
            type: 'feat',
            release: 'minor',
          },
          {
            type: 'fix',
            release: 'patch',
          },
          {
            type: 'perf',
            release: 'patch',
          },
          {
            type: 'refactor',
            release: 'patch',
          },
          {
            type: 'revert',
            release: 'patch',
          },
          {
            type: 'style',
            release: 'patch',
          },
          {
            type: 'test',
            release: false,
          },
        ],
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
        },
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        presetConfig: {
          types: [
            { type: 'refactor', section: 'Code Refactoring' },
            { type: 'docs', section: 'Documentation' },
            { type: 'style', section: 'Styles' },
            { type: 'test', section: 'Tests' },
          ],
        },
        writerOpts: {
          commitsSort: ['scope', 'subject'],
        },
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogTitle: '# Changelog',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json'],
      },
    ],
    '@semantic-release/npm',
    '@semantic-release/github',
  ],
  preset: 'conventionalcommits',
};
