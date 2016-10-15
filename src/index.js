const gulp = require.main.require('gulp')

import gulpWatch from 'gulp-watch'

export del from 'del'
export merge from 'merge-stream'

export const copy = (from, to) => gulp.src(from).pipe(gulp.dest(to))

export function task (...args) {
  if (global.groupName) {
    args[0] = `${global.groupName}:${args[0]}`
  }

  gulp.task(...args)
}

export function watch (globPattern, taskName, options = {}) {
  gulpWatch(globPattern, options, () => gulp.start(taskName))
}

export function taskGroup (groupName, fn) {
  global.groupName = groupName
  fn()
  global.groupName = undefined
}
