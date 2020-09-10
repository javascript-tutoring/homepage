const gulp = require('gulp')
const sass = require('gulp-sass')
sass.compiler = require('node-sass')

gulp.task('sass', () =>
  gulp
    .src('../src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../dist/css')),
)

gulp.task('html', () =>
  gulp.src('../src/index.html').pipe(gulp.dest('../dist')),
)

exports.build = gulp.task('build', () => gulp.parallel('html', 'sass')