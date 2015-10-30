var gulp = require('gulp'),
      // uglify = require('gulp-uglify'),
      // jshint = require('gulp-jshint'),
	// concat = require('gulp-concat');
      gulpLoadPlugins = require('gulp-load-plugins'),
      plugins = gulpLoadPlugins();

// gulp.task('default', function () {
//    return gulp.src('js/*.+(js|css)')
//       .pipe(jshint())
//       .pipe(jshint.reporter('default'))
//       .pipe(uglify())
//       .pipe(concat('app.js'))
//       .pipe(gulp.dest('build'));
// });

gulp.task('default', function () {
   return gulp.src('js/*.+(js|css)')
      .pipe(plugins.jshint())
      .pipe(plugins.jshint.reporter('default'))
      .pipe(plugins.uglify())
      .pipe(plugins.concat('app.js'))
      .pipe(gulp.dest('build'));
});