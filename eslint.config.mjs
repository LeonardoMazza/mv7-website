import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),

    ...compat.extends('plugin:prettier/recommended'),
    {
        rules: {
            'prettier/prettier': [
                'error',
                {
                    endOfLine: 'auto',
                    eslintIntegration: true,
                    semi: false,
                    singleQuote: true,
                    printWidth: 100,
                    tabWidth: 4,
                    trailingComma: 'es5',
                },
            ],
        },
    },
]
export default eslintConfig
