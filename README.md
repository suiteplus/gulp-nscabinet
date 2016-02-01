# gulp-nscabinet [![NPM version][npm-image]][npm-url]

Upload/download files to a netsuite account, using the included restlet.

This is just re-export of [nscabinet](https://github.com/suiteplus/nscabinet). Check it for usage and for the restlet.

## Required
 * node.js 4+

## Install [![Dependency Status][david-image]][david-url] [![devDependency Status][david-image-dev]][david-url-dev]
```bash
    npm install gulp-nscabinet --save-dev
```

## Usage

First setup your credentials with [nsconfig](https://github.com/suiteplus/nsconfig#output-example).

If your project setup looks like this
```
├── src
│   ├── foo.js
│   ├── bar.js
│   └── qax.js
└── test.js
```

and you want to upload and download everything within __src__ to/from NetSuite under __/SuiteScripts/project-x__
but without to have the __src__ directory on NetSuite.

```js
var gulp = require('gulp');
var gulpNscabinet = require('gulp-nscabinet');

gulp.task('download', function (callback) {
    gulpNscabinet.download(remoteFiles, {
        rootPath : '/SuiteScripts/project-x'
    })
    .pipe(gulp.dest('src'))
})

gulp.task('upload', function (callback) {
    gulp.src('src/**/*.js', {cwd: 'src'})
    .pipe(gulpNscabinet({
        rootPath : '/SuiteScripts/project-x'
    }))
})
```

[npm-url]: https://npmjs.org/package/gulp-nscabinet
[npm-image]: http://img.shields.io/npm/v/gulp-nscabinet.svg

[david-url]: https://david-dm.org/suiteplus/gulp-nscabinet
[david-image]: https://david-dm.org/suiteplus/gulp-nscabinet.svg

[david-url-dev]: https://david-dm.org/suiteplus/gulp-nscabinet#info=devDependencies
[david-image-dev]: https://david-dm.org/suiteplus/gulp-nscabinet/dev-status.svg
