import tseslint from 'typescript-eslint';
import unicorn from 'eslint-plugin-unicorn';
import stylistic from '@stylistic/eslint-plugin';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

// Common file patterns
export const INCLUDE_LIST = ['**/*.ts'];
export const GLOBAL_IGNORE_LIST = [
  'eslint.config.js',
  'eslint.config.ts',
  '*.min.*',
  '*.d.ts',
  'CHANGELOG.md',
  'node_modules/**',
  'dist/**',
  'LICENSE*',
  'output/**',
  'coverage/**',
  'temp/**',
  'build/**',
  'package-lock.json',
];

export const PLUGINS_LIST = {
  '@unicorn': unicorn,
  '@stylistic': stylistic,
  ...eslintPluginPrettierRecommended.plugins,
};

export const RULES_LIST = {
  'curly': ['error', 'all'],
  'eqeqeq': ['error', 'always'],
  'handle-callback-err': ['error', '^(err|error)$'],
  'no-array-constructor': ['error'],
  'no-caller': ['error'],
  'no-cond-assign': ['error', 'except-parens'],
  'no-constant-condition': ['error'],
  'no-control-regex': ['error'],
  'no-debugger': ['error'],
  'no-duplicate-case': ['error'],
  'no-eval': ['error'],
  'no-ex-assign': ['error'],
  'no-extra-boolean-cast': ['error'],
  'no-fallthrough': ['error'],
  'no-inner-declarations': ['error'],
  'no-invalid-regexp': ['error', { allowConstructorFlags: ['u', 'y'] }],
  'no-irregular-whitespace': ['error'],
  'no-new-wrappers': ['error'],
  'no-proto': ['error'],
  'no-regex-spaces': ['error'],
  'no-self-assign': ['error'],
  'no-self-compare': ['error'],
  'no-shadow': ['off'],
  'no-sparse-arrays': ['error'],
  'no-this-before-super': ['error'],
  'no-undef-init': ['error'],
  'no-unreachable': ['error'],
  'no-unsafe-finally': ['error'],
  'no-unsafe-negation': ['error'],
  'no-with': ['error'],
  'one-var': ['error', 'never'],
  'use-isnan': ['error'],
  'valid-typeof': ['error', { requireStringLiterals: true }],

  '@stylistic/brace-style': ['error', '1tbs'],
  '@stylistic/comma-dangle': ['error', 'always-multiline'],
  '@stylistic/eol-last': ['error', 'always'],
  '@stylistic/indent': 'off',
  '@stylistic/max-len': ['error', { code: 100, comments: 120, ignoreUrls: true, ignoreTemplateLiterals: true },],
  '@stylistic/new-parens': ['error', 'always'],
  '@stylistic/no-mixed-spaces-and-tabs': ['error'],
  '@stylistic/no-multi-spaces': ['error'],
  '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
  '@stylistic/no-trailing-spaces': ['error', { ignoreComments: true }],
  '@stylistic/padded-blocks': ['error', 'never'],
  '@stylistic/quotes': 'off',
  '@stylistic/rest-spread-spacing': ['error', 'never'],
  '@stylistic/space-before-function-paren': 'off',
  '@stylistic/space-in-parens': ['error', 'never'],

  '@typescript-eslint/consistent-type-imports': [
    'error',
    {
      fixStyle: 'inline-type-imports',
      disallowTypeAnnotations: false,
    },
  ],
  '@typescript-eslint/no-shadow': 'error',
  '@typescript-eslint/naming-convention': [
    'error',
    { selector: 'variable', format: ['camelCase', 'UPPER_CASE', 'PascalCase'] },
    { selector: 'typeLike', format: ['PascalCase'] },
    { selector: 'class', format: ['PascalCase'] },
    { selector: 'interface', format: ['PascalCase'], custom: { regex: '^I[A-Z]', match: false } },
  ],

  '@unicorn/prefer-module': 'error',
  '@unicorn/prefer-node-protocol': 'error',
  '@unicorn/filename-case': ['error', { case: 'snakeCase' }],
  '@unicorn/no-await-expression-member': 'error',
  '@unicorn/no-for-loop': 'error',
  '@unicorn/no-instanceof-builtins': 'error',
  '@unicorn/prefer-number-properties': 'error',
  '@stylistic/semi': ['error', 'always'],
  ...eslintPluginPrettierRecommended.rules,
  'prettier/prettier': ['error', { endOfLine: 'auto' }],
};

export function configPkg(...configBlocksToMerge) {
  return tseslint.config(
    { ignores: GLOBAL_IGNORE_LIST },
    tseslint.configs.base,
    { plugins: PLUGINS_LIST },
    {
      files: INCLUDE_LIST,
      rules: RULES_LIST,
    },
    ...configBlocksToMerge
  )
}
