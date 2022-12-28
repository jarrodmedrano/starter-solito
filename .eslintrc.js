module.exports = {
  extends: ['plugin:react/recommended', 'plugin:@next/next/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': 'off',
    // defaultProps rule to be deprecated on function components
    // https://github.com/reactjs/rfcs/pull/107
    'react/require-default-props': [
      'error',
      {
        ignoreFunctionalComponents: true,
      },
    ],
  },
  settings: {
    next: {
      rootDir: 'apps/next/',
    },
  },
  root: true,
};
