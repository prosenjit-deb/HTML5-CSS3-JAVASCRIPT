var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
 



gulp.task('sass', function () {
    return gulp.src('sass/*.scss')
      .pipe(sourcemaps.init())
      .pipe(plumber())
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(autoprefixer())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist/css'));  
});

gulp.task('browserSync', function() {
    browserSync.init({
       server: {
          baseDir: './'
       },
    })
 })


gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', gulp.series('sass'));
    gulp.watch('./*.html').on('change', browserSync.reload);
});

// Default Task
gulp.task('default', gulp.parallel('sass', 'browserSync', 'watch'));
