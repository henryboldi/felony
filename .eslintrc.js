module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    // "jsx-curly-spacing": [2, "always", {"alternative": true}], // https://github.com/yannickcr/eslint-plugin-react/issues/388
    'react/jsx-curly-spacing': [1, 'always'],
    'react/prop-types': [0],
    'react/sort-comp': [1, {
      order: [
        'state',
        'classes',
        'static-methods',
        'lifecycle',
        'everything-else',
        'render'
      ]
    }],
    'template-curly-spacing': ['error', 'always'],
    'strict': [0, 'safe'],
    'no-unused-expressions': 0,
    'no-unused-vars': ['error', { 'vars': 'local' }],
    'arrow-body-style': [0, 'always'],
    'camelcase': [2, { 'properties': 'always' }],
    'constructor-super': 2,
    'quote-props': [2, 'consistent'],
    'no-underscore-dangle': [1],
    'semi': [2, 'never'],
    'no-console': [0],
    'new-cap': [1, { newIsCap: true, capIsNew: false }],
    'no-use-before-define': ['error', { 'functions': false }],
  },
};
