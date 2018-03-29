module.exports = {
    "plugins": [
        
    ],
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
    },
    "extends": ["eslint:recommended",  "@study/eslint-config-edu"],
    "globals": {
        "NEJ": true,
        "define": true,
        "Regular": true,
        "jQuery": true,
        "$": true
    }
};
