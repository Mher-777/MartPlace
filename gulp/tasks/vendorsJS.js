const gulp = require('gulp');
const concat = require('gulp-concat');

const vendorsScripts = [
  'node_modules/svg4everybody/dist/svg4everybody.min.js',
  'node_modules/jquery/dist/jquery.min.js',
  'node_modules/jquery-form-styler/dist/jquery.formstyler.min.js',
  'node_modules/rateyo/min/jquery.rateyo.min.js',
  'node_modules/slick-carousel/slick/slick.js'
];

module.exports = function vendors(cb) {
  return vendorsScripts.length
    ? gulp.src(vendorsScripts)
      .pipe(concat('libs.js'))
      .pipe(gulp.dest('dist/static/js/'))
    : cb();
};
