import gulp from 'gulp'
import gutil from 'gulp-util'
import babel from 'gulp-babel'
import sourcemaps from 'gulp-sourcemaps'
import plumber from 'gulp-plumber'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import {scripts} from './config.js'
import ngAnnotate from 'gulp-ng-annotate'

gulp.task('scripts', scriptsTask)

function scriptsTask() {
  return gulp
    .src(scripts.src)
    .pipe(plumber({errorHandler}))
    .pipe(sourcemaps.init())
    .pipe(ngAnnotate())
    .pipe(babel())
    .pipe(concat(scripts.output))
    .pipe(uglify({mangle: false}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(scripts.dest))
}

function errorHandler(err) {
  let message = new gutil.PluginError(err.plugin, err.message).toString()
  process.stderr.write(message + '\n')
  gutil.beep()
}
