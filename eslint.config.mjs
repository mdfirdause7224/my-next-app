// eslint.config.mjs
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import globals from 'globals';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Handle __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// FlatCompat helps reuse old-style "extends"
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // ✅ Recommended base JS config
  js.configs.recommended,

  // ✅ Next.js + TS support
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
];
