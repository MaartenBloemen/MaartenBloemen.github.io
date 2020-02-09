module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'airbnb',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        'max-len': ['warn', { 'code': 140 }], // TODO We might look into reducing this in the future
        'react/jsx-filename-extension': ['off'], // We don't want to enforce this per se (small-project)
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'import/prefer-default-export': ['off'], // Project not big enough for this to make sense
        'react/prop-types': ['off'], // Not yet
        'react/jsx-one-expression-per-line': ['off'], // This breaks on icons and text on the same line, which we would rather keep...
        'jsx-a11y/interactive-supports-focus': ['off'], // a11y rules which are kind of overkill...
        'jsx-a11y/click-events-have-key-events': ['off'], // a11y rules which are kind of overkill...
        'jsx-a11y/no-noninteractive-element-interactions': ['off'],
        'jsx-a11y/label-has-associated-control': ['off'], // We're not interested in looking into this further
        'import/no-cycle': ['warn'], // TODO TEMP we will have to look into fixing all issues regarding this in the future
        'react/jsx-props-no-spreading': ['warn'], // TODO TEMP we will have to look into fixing all issues regarding this in the future
        'jsx-a11y/control-has-associated-label': ['warn'],
    },
};
