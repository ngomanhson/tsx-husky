// import { dirname } from 'path';
// import { fileURLToPath } from 'url';
// import { FlatCompat } from '@eslint/eslintrc';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//     baseDirectory: __dirname,
// });

// const eslintConfig = [
//     ...compat.config({
//         extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
//         plugins: ['eslint'],
//         rules: {
//             '@next/next/no-img-element': 'off',
//             '@typescript-eslint/no-unused-expressions': 'off',
//             'react-hooks/exhaustive-deps': 'off',
//             'react/no-unescaped-entities': 'off',
//             '@typescript-eslint/no-empty-object-type': 'off',
//             'react/no-unescaped-entities': 'off',
//             'jsx-a11y/alt-text': 'off',
//         }
//     })
// ];

// export default eslintConfig;

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    rules: {
      "@next/next/no-img-element": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "react-hooks/exhaustive-deps": "off",
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "jsx-a11y/alt-text": "off",
    },
  }),
];

export default eslintConfig;
