var gulp = require('gulp'),
    rename = require("gulp-rename"),
    uglify = require('gulp-uglify');

gulp.task('js', function () {
    return gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(rename({extname: ".min.js"}))
        .pipe(gulp.dest('dist/'));
});


gulp.task('default', ['js']);
