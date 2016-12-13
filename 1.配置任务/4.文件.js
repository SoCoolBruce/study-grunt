// 文件

module.exports = (grunt) => {
    // Grunt任务配置
    grunt.initConfig({
        jshint: {
            foo: {
                // 文件：简洁格式
                src: ['src/aa.js', 'src/aaa.js'],
                dest: 'dest/a.js'
            },
            bar: {
                // 文件：对象格式
                files: {
                    'dest/a.js': ['src/aa.js', 'src/aaa.js'],
                    'dest/b.js': ['src/bb.js', 'src/bbb.js']
                }
            },
            nav: {
                // 文件：数组格式
                files: [
                    { src: ['src/aa.js', 'src/aaa.js'], dest: 'dest/a.js', fiiter: 'isFile' },
                    { src: ['src/aa.js', 'src/aaa.js'], dest: 'dest/a.js', nonull: true }
                ]
            }
        }
    })
}