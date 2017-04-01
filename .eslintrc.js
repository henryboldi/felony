var IGNORE = 0
var WARN = 1
var ERROR = 2

var ALWAYS = 'always'
var NEVER = 'never'
var OFF = 'off'

module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  rules: {
    'react/jsx-curly-spacing': [ERROR, ALWAYS, { spacing: { objectLiterals: NEVER }}],
    'react/jsx-filename-extension': [IGNORE],
    'react/prop-types': [IGNORE],
    'template-curly-spacing': [ERROR, ALWAYS],
    'strict': [IGNORE],
    'no-unused-expressions': IGNORE,
    'no-unused-vars': [ERROR, { 'vars': 'local' }],
    'arrow-body-style': [IGNORE, ALWAYS],
    'camelcase': [ERROR],
    'constructor-super': ERROR,
    'quote-props': [ERROR, 'consistent'],
    'no-underscore-dangle': [WARN],
    'semi': [ERROR, NEVER],
    'import/no-unresolved': [ERROR, { ignore: ['electron'] }],
    'new-cap': [IGNORE],
    'import/no-named-as-default': [IGNORE],
    'import/no-extraneous-dependencies': [IGNORE],
    'jsx-a11y/no-static-element-interactions': IGNORE
  }
}
