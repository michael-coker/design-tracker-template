var gulp = require('gulp');
var del = require('del');

// Cleanup task
gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['src/docs/InVisionLinks.html']);
});

// Copy libraries from /node_modules to their respective locations
gulp.task('copyJS', function() {
    gulp.src(['node_modules/bootstrap-sass/assets/javascripts/*.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/jquery/dist/jquery.min.map', 'node_modules/patternfly/dist/js/**'])
        .pipe(gulp.dest('js/vendor/'))
});

gulp.task('copySASS', function() {
    gulp.src(['node_modules/patternfly/dist/sass/**'])
        .pipe(gulp.dest('_sass/vendor/'))
    gulp.src(['node_modules/bootstrap-sass/assets/stylesheets/bootstrap/**'])
        .pipe(gulp.dest('_sass/vendor/bootstrap/'))
    gulp.src(['node_modules/font-awesome/scss/**'])
        .pipe(gulp.dest('_sass/vendor/'))
});

gulp.task('copyFonts', function() {
    gulp.src(['node_modules/bootstrap-sass/assets/fonts/**'])
        .pipe(gulp.dest('assets/fonts/'))
    gulp.src(['node_modules/patternfly/dist/fonts/**'])
        .pipe(gulp.dest('assets/fonts/'))
    gulp.src(['node_modules/font-awesome/fonts/**'])
        .pipe(gulp.dest('assets/fonts/'))
});

gulp.task('cleanVendors', function() {
    return del([
        '_sass/vendor',
        'js/vendor',
        'assets/fonts/**'
    ]);
});

gulp.task('cleanModules', function() {
    return del([
        'node_modules'
    ]);
});

// Run everything
gulp.task('default', ['copyJS', 'copySASS', 'copyFonts']);
