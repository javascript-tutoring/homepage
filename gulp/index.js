const path = require('path')

const gulp = require('gulp')
const clean = require('gulp-clean')
const concat = require('gulp-concat')
const sourcemaps = require('gulp-sourcemaps')
const rollup = require('gulp-better-rollup')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const babel = require('rollup-plugin-babel')
const sass = require('gulp-sass')
sass.compiler = require('node-sass')

const ROOT = path.resolve(process.cwd())

const globs = {
  sass: path.join(ROOT, './src/sass/**/*.scss'),
  js: path.join(ROOT, './src/js/**/*.js'),
  html: path.join(ROOT, './src/index.html'),
}

gulp.task('clean', () => gulp.src(path.join(ROOT, './dist/*')).pipe(clean()))

gulp.task('sass', () =>
  gulp
    .src(globs.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(path.join(ROOT, './dist/css'))),
)

gulp.task('js', () =>
  gulp
    .src(globs.js)
    .pipe(sourcemaps.init())
    .pipe(rollup({ plugins: [nodeResolve(), commonjs(), babel({ presets: ['@babel/env'] })] }, { format: 'cjs' }))
    .pipe(sourcemaps.write())
    .pipe(concat('main.js'))
    .pipe(gulp.dest(path.join(ROOT, './dist/js'))),
)

gulp.task('html', () => gulp.src(globs.html).pipe(gulp.dest(path.join(ROOT, './dist'))))

gulp.task('build', gulp.series(gulp.parallel('sass', 'js'), 'html'))

gulp.task(
  'watch',
  gulp.series('clean', 'build', () => gulp.watch(Object.values(globs), gulp.series('clean', 'build'))),
)

exports.default = gulp.series('clean', 'build')
