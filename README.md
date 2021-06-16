###
1. Ensure babel-jest and vue-jest version is <27
2. load jest.config.js with format
```
module.exports = {
    moduleFileExtensions: [
        'js',
        'json',
        'vue'
    ],
    transform: {
        "^.+\\.js$": "babel-jest",
        '^.+\\.vue$': 'vue-jest'
    }
}
```
3. load babel.config.js with format
```
module.exports = {
    presets: [
        '@vue/app'
    ]
};
```
4. ensure `@vue/babel-preset-app": "^4.5.13` is installed
