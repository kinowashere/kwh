module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'react-app',
    'airbnb'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
    'react/static-property-placement': [
      'error',
      'static public field',
    ],
    'import/no-named-as-default': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',
    'comma-dangle': 'off',
    'import/no-named-as-default-member': 'off',
    'react/jsx-curly-spacing': [
      2,
      {
        when: 'always',
        allowMultiline: false,
        children: true
      }
    ],
  }
};
