const gulp   = require('gulp'),
      babel  = require('gulp-babel'),
      concat = require('gulp-concat');

gulp.task('build', () => {
    return gulp.src('src/**/*.js')
           .pipe(concat('all.js'))
           .pipe(babel({
               presets: ['es2015']
           }))
           .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);