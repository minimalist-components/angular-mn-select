import gulp from 'gulp'
import {imgs} from './config.js'

gulp.task('imgs', imgsTask)

function imgsTask() {
  return gulp
    .src(imgs.src)
    .pipe(gulp.dest(imgs.dest))
}
