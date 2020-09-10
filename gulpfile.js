const gulp = require('gulp')
const clean = require('gulp-clean')
const sass = require('gulp-sass')
sass.compiler = require('node-sass')

gulp.task('clean', () => gulp.src('./dist/*').pipe(clean()))

gulp.task('sass', () =>
  gulp.src('./src/sass/**/*.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('./dist/css')),
)

gulp.task('html', () => gulp.src('./src/index.html').pipe(gulp.dest('./dist')))

gulp.task('build', gulp.parallel('html', 'sass'))

exports.default = gulp.series('clean', 'build')
