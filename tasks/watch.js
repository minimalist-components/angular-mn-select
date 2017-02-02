import gulp from 'gulp'
import {
  templates,
  scripts,
  browserSync,
} from './config.js'

gulp.task('watch', watchTask)

function watchTask() {
  gulp.watch(templates.src, [
    'templates',
    browserSync.reload,
  ])

  gulp.watch(scripts.src, [
    'lint',
    'scripts',
    browserSync.reload,
  ])
}
