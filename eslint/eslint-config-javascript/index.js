module.exports = {
  plugins: ['prettier', 'sort-imports-es6-autofix'],
  rules: {
    'react/prop-types': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
    'sort-imports-es6-autofix/sort-imports-es6': [
      'error',
      {
        ignoreCase: true,
        memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
      },
    ],
    'prettier/prettier': 'error',
  },
};
