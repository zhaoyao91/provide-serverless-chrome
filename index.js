const launchChrome = require('@serverless-chrome/lambda')

// the default params should be convenient for most common use cases.
const defaultParams = {
  flags: ['--window-size=1440,900', '--hide-scrollbars'],
}

function provideChromeWithParams (params) {
  let chrome
  return function provideChrome (callback) {
    if (!chrome) {
      launchChrome(params)
        .then(_chrome => {
          chrome = _chrome
          callback(null, chrome)
        })
        .catch(callback)
    }
    else {
      callback(null, chrome)
    }
  }
}

const provideChromeWithDefaultParams = provideChromeWithParams(defaultParams)

function provideChrome (arg) {
  if (typeof arg === 'function') return provideChromeWithDefaultParams(arg)
  else return provideChromeWithParams(arg)
}

module.exports = provideChrome