import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';

function styles() {
    return gulp.src('src/index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
}

export { styles };