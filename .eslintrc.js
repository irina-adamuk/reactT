module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:react-hooks/recommended',
  ],
  overrides: [
    {
      files: ['webpack.config.js'],
      rules: {
        '@typescript-eslint/no-var-requires': ['off'],
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks', 'jest'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
    quotes: ['warn', 'single'],
    'react/display-name': 'off',
    'react/prop-types': 0,
    semi: ['warn', 'always'],
    'sort-imports': [
      'error',
      {
        allowSeparatedGroups: true,
        memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'],
      },
    ],
    'sort-keys': ['error'],
  },
};
