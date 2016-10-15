'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copy = exports.merge = exports.del = undefined;
exports.task = task;
exports.watch = watch;
exports.taskGroup = taskGroup;

var _gulpWatch = require('gulp-watch');

var _gulpWatch2 = _interopRequireDefault(_gulpWatch);

var _del2 = require('del');

var _del3 = _interopRequireDefault(_del2);

var _mergeStream = require('merge-stream');

var _mergeStream2 = _interopRequireDefault(_mergeStream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gulp = require.main.require('gulp');

exports.del = _del3.default;
exports.merge = _mergeStream2.default;
var copy = exports.copy = function copy(from, to) {
  return gulp.src(from).pipe(gulp.dest(to));
};

function task() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (global.groupName) {
    args[0] = global.groupName + ':' + args[0];
  }

  gulp.task.apply(gulp, args);
}

function watch(globPattern, taskName) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  (0, _gulpWatch2.default)(globPattern, options, function () {
    return gulp.start(taskName);
  });
}

function taskGroup(groupName, fn) {
  global.groupName = groupName;
  fn();
  global.groupName = undefined;
}
