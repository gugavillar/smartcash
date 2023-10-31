module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    '@rocketseat/eslint-config/react',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/order': [
      'error',
      {
        'groups': [
          'external',
          'builtin',
          'internal',
          ['parent', 'sibling'],
          ['object', 'type'],
          'index',
        ],
        'pathGroups': [
          {
            pattern: '{react,react-dom/*}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '{@chakra-ui/*}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/*',
            group: 'internal',
            position: 'before',
          },
        ],
        'pathGroupsExcludedImportTypes': ['react'],
        'newlines-between': 'always',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
}
