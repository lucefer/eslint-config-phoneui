const rules = require('./rules.js');
module.exports = {
    'root': true,

    'env': {
        'browser': true,
        'node': true,
        'amd': false
    },

    'parserOptions': {
        ecmaVersion: 6,
        sourceType: 'module',
        'ecmaFeatures': {
            'jsx': false
        }
    },

    'rules': rules
}
