// ---
// DEFAULT TASK (when calling gulp)
// ---

// plugins
var gulp = require('gulp');

// task
gulp.task('default', [
    'test',
    'scss',
    'js',
    'jekyll--build'
]);
