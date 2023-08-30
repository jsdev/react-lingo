module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        jest: true,
    },
    "extends": [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:prettier/recommended'
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        project: './tsconfig.json',
    },
    "plugins": [
        "react"
    ],
    rules: {
        'linebreak-style': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        // TODO ADDRESS AND REMOVE
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',

        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        // '@typescript-eslint/ban-types': 'off',
        'react-hooks/exhaustive-deps': 'off',

        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
};
