import vue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import pluginSecurity from 'eslint-plugin-security'
import pluginPlaywright from 'eslint-plugin-playwright'
import globals from 'globals'
import autoImportGlobals from './.eslintrc-auto-import.json' with { type: 'json' }

export default [
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'coverage/**',
      'tests/e2e/**/*.ts',
      'auto-imports.d.ts',
      'components.d.ts',
    ],
  },
  ...vue.configs['flat/recommended'],
  ...vueTsEslintConfig(),
  pluginSecurity.configs.recommended,
  skipFormatting,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...autoImportGlobals.globals,
      },
    },
  },
  {
    files: ['**/*.cjs', '*.config.{js,cjs,mjs}'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.node,
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
  {
    files: ['tests/e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    ...pluginPlaywright.configs['flat/recommended'],
  },
  {
    rules: {
      'no-var': 'error',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'comma-dangle': ['error', 'only-multiline'],
      'id-length': [2, { exceptions: ['i', 'j', '_'] }],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '_' }],
      'vue/multi-word-component-names': [
        'error',
        {
          ignores: [
            'Action',
            'Contact',
            'Event',
            'Footer',
            'Formule',
            'Header',
            'Heroe',
            'Insta',
            'Partenaire',
            'Stats',
            'Vision',
          ],
        },
      ],
    },
  },
]
