module.exports = {
  extends: ['airbnb'],
  parser: 'babel-eslint',
  plugins: [
    'module-resolver',
    {
      root: '.',
      alias: {
        _types: './types/index.ts',

        _slices: './reducers/',
        _selectors: './selectors/',

        _components: './screens/components/',

        _typography: './theme/theme.ts',

        _store: './store.ts',
      },
    },
  ],
};
