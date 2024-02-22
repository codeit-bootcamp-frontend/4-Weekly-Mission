module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'import'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-nested-ternary': 0,
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        useTabs: false,
        trailingComma: 'es5',
        bracketSpacing: true,
        arrowParens: 'always',
        endOfLine: 'auto',
      },
    ],
    'linebreak-style': 0,
    'max-len': ['error', 120, 2, { ignoreComments: true, ignoreUrls: true }],
    'no-console': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'unknown'],
        pathGroups: [
          {
            pattern: 'react*,react*/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'src/**/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'assets/**/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'hooks/**/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'components/**/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'context/**/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'pages/**/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'services/**/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'utils/**/*',
            group: 'internal',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['src', './src'],
          ['assets', './src/assets'],
          ['components', './src/components'],
          ['context', './src/context'],
          ['hooks', './src/hooks'],
          ['pages', './src/pages'],
          ['services', './src/services'],
          ['utils', './src/utils'],
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
};
