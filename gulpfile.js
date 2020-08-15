var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('scss/main.scss')
    .pipe(sass().on('error', sass.logError)) // Using gulp-sass
    .pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
  gulp.watch('scss/**/*.scss'); 
  // Other watchers
})

gulp.task('default', gulp.series(['watch', 'sass']));