const gulp = require('gulp');
const sass = require('gulp-sass')
const babel = require('gulp-babel');
sass.compiler = require('node-sass');

gulp.task('compile-sass', () => {
    return gulp
        .src(['./src/sass/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest('./build/css'));
});
gulp.task('compile-js', () => {
    return gulp
        .src(['./src/js/*.js'])
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./build/js'))
})
gulp.task('listener', () => {
    //SCSS
    gulp.watch('./src/sass/*.scss', gulp.series('compile-sass'));
    //JS
    gulp.watch('./src/js/*.js', gulp.series('compile-js'));
})

gulp.task('default', gulp.series('listener'));