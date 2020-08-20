const { dest, src, watch, series } = require('gulp');
let sass = require('gulp-sass');
var paths = {
  srcSCSS: 'scss/**/*.scss',
  srcMainSCSS: 'scss/main.scss',
  distCSS: 'css',
};
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded',
};
function compile(cb) {
  src(paths.srcMainSCSS)
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(dest(paths.distCSS));
  cb();
}
function watchFiles(cb) {
  watch(paths.srcSCSS, compile);
  cb();
}
exports.compile = compile;
exports.default = series(watchFiles);