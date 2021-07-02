module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'next',
        'next/core-web-vitals',
        'plugin:react/recommended',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        'object-curly-spacing': ['error', 'always'],
        indent: ['error', 4, {
            SwitchCase: 1,
        }],
    },
    overrides: [
        {
            files: [
                './{pages,components}/**/*.{ts,tsx}',
            ],
        },
    ],
};
