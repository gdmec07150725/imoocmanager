module.exports = {
    parser: 'babel-eslint',
    plugins: ['react'],
    extends: ['airbnb'],
    env: {
      node: true
    },
    rules: {
      'linebreak-style': [0, 'error', 'windows'],
      'react/jsx-filename-extension': [0, { extensions: ['.js'] }]
    }
  };
  