# Provide Serverless Chrome

Provide [serverless chrome](https://github.com/adieuadieu/serverless-chrome/tree/master/packages/lambda) singleton for AWS Lambda handler.

## Usage

Install package:

`npm i --save provide-serverless-chrome`

Provide serverless-chrome with default params:

```
const provideChrome = require('provide-serverless-chrome')

module.exports.handler = function (event, context, callback) {
  provideChrome((err, chrome) => {
    if (err) return callback(err)
    ...
  })
}
```

Provide serverless-chrome with custom params:

```
const provideChrome = require('provide-serverless-chrome')({
  flags: ['--window-size=720,480']
})

module.exports.handler = function (event, context, callback) {
  provideChrome((err, chrome) => {
    if (err) return callback(err)
    ...
  })
}
```

## License

MIT