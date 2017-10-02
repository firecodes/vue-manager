var path = require('path');
var gulp = require('gulp'),
    // uglify = require('gulp-uglify'), //压缩js
    // rename = require("gulp-rename"), //文件重命名
    // changed = require('gulp-changed'), //监听文件是否修改
    // imagemin = require('gulp-imagemin'), // 图片压缩
    // pngquant = require('imagemin-pngquant'), // 深度压缩
     runSequence = require('run-sequence'),     // 同步运行任务插件
    // del = require('del'), //删除文件
    // spritesmith = require('gulp.spritesmith'), //合成雪碧图
    // find = require("gulp-find-glob"), //得到glob对象
    cleanCSS = require('gulp-clean-css'), //压缩css
    cssWrap = require('gulp-css-wrap');  //打包css 外层加 class名称

    // 测试环境:
    // src/assets/theme/red/
    // src/assets/theme/yellow/
    // src/assets/theme/blue/
    // 开发环境:
    // dist/red/
    // dist/yellow/
    // dist/blue/
gulp.task('css-wrap-red', function() {
    return gulp.src( path.resolve('./static/theme/red/index.css')) 
        .pipe(cssWrap({selector:'.theme-red'}))
        //.pipe(cleanCSS())
        .pipe(gulp.dest('dist/css/red/'));
});
gulp.task('css-wrap-yellow', function() {
    return gulp.src( path.resolve('./static/theme/yellow/index.css')) 
        .pipe(cssWrap({selector:'.theme-yellow'}))
        //.pipe(cleanCSS())
        .pipe(gulp.dest('dist/css/yellow/'));
});
gulp.task('css-wrap-blue', function() {
    return gulp.src( path.resolve('./static/theme/blue/index.css')) 
        .pipe(cssWrap({selector:'.theme-blue'}))
        //.pipe(cleanCSS())
        .pipe(gulp.dest('dist/css/blue/'));
});
gulp.task('default', function (cb) {
    runSequence(['css-wrap-red','css-wrap-yellow','css-wrap-blue'], cb);
});


