const cleanup = require('rollup-plugin-cleanup');
const {plugin: analyze} = require('rollup-plugin-analyzer');
const buble = require('rollup-plugin-buble');
const {uglify} = require('rollup-plugin-uglify');
const rollup = require('rollup');
const source = require('vinyl-source-stream');
const browserify = require('browserify');

module.exports = function () {
    $.gulp.task('js.process', function () {
        return browserify('./source/js/main.js')
            .bundle()
            // Передаем имя файла, который получим на выходе, vinyl-source-stream
            .pipe(source('bundle.js'))
            .pipe($.gulp.dest('./app/assets/js/'));
    })
};


// module.exports = function () {
//     $.gulp.task('js.process', function () {
//         return rollup.rollup({
//             input: './source/js/main.js',
//             plugins: [
//                 buble(),
//                 uglify(),
//                 cleanup({
//                     comments: ['eslint']
//                 }),
//                 commonjs(),
//                 analyze()
//             ]
//         }).then(bundle => {
//             return bundle.write({
//                 file: './app/assets/js/bundle.js',
//                 format: 'iife', // cjs, es, iife, umd
//                 name: 'bundle',
//                 sourcemap: true
//             });
//         }).catch((err) => {
//             console.log(err);
//         });
//     })
// };
