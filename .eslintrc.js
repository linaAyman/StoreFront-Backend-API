/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
module.exports = {
    'env': {
        "node": true,
        "es2021": true
    },
    'extends': [
        'eslint:recommended',
        "plugin:@typescript-eslint/recommended",'prettier'
    ],
    'overrides': [
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    'plugins': [
        '@typescript-eslint','prettier'
    ],
    'rules': {
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        'prettier/prettier': 2, // Means error
        'no-console': 1, // Means warning
        'no-var': 'error',
        'prefer-const': 'error'
    }
};
