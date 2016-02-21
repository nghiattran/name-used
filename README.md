# name-used

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

## Usage

```js
var nameUsed = require('./');

var aName = 'npm';

nameUsed(aName)
  .then(function (res) {
    // return true if name has been used, false if not
  })
```

## License
MIT © [NghiaTTran]()

[npm-image]: https://badge.fury.io/js/name-used.svg
[npm-url]: https://npmjs.org/package/name-used
[travis-image]: https://travis-ci.org/nghiattran/name-used.svg?branch=master
[travis-url]: https://travis-ci.org/nghiattran/name-used
[daviddm-image]: https://david-dm.org/nghiattran/name-used.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/nghiattran/name-used
[coveralls-image]: https://coveralls.io/repos/nghiattran/name-used/badge.svg
[coveralls-url]: https://coveralls.io/github/nghiattran/name-used
