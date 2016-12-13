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
        },

        // 自定义过滤函数
        clean: {
            foo: {
                // 通配符模式
                src: ['tmp/*.js'],
                filer: 'isFile'
            },

            bar: {
                src: ['tmp/**'],
                filer: (filepath) => {
                    return (grunt.file.isDir(filepath) && require(fs).readdirSync(filepath).length === 0);
                }
            }
        },

        // 动态构建文件对象
        static_mappings: {
            // Because these src-dest file mappings are manually specified, every
            // time a new file is added or removed, the Gruntfile has to be updated.
            files: [
                { src: 'lib/a.js', dest: 'build/a.min.js' },
                { src: 'lib/b.js', dest: 'build/b.min.js' },
                { src: 'lib/subdir/c.js', dest: 'build/subdir/c.min.js' },
                { src: 'lib/subdir/d.js', dest: 'build/subdir/d.min.js' },
            ],
        },
        dynamic_mappings: {
            // Grunt will search for "**/*.js" under "lib/" when the "uglify" task
            // runs and build the appropriate src-dest file mappings then, so you
            // don't need to update the Gruntfile when files are added or removed.
            files: [{
                expand: true, // Enable dynamic expansion.
                cwd: 'lib/', // Src matches are relative to this path.
                src: ['**/*.js'], // Actual pattern(s) to match.
                dest: 'build/', // Destination path prefix.
                ext: '.min.js', // Dest filepaths will have this extension.
                extDot: 'first' // Extensions in filenames begin after the first dot
            }, ],
        },

        // 模板
        concat: {
            sample: {
                options: {
                    banner: '/* <%= baz %> */\n', // '/* abcde */\n'
                },
                src: ['<%= qux %>', 'baz/*.js'], // [['foo/*.js', 'bar/*.js'], 'baz/*.js']
                dest: 'build/<%= baz %>.js', // 'build/abcde.js'
            },
        },
        //用于任务配置模板的任意属性
        foo: 'c',
        bar: 'b<%= foo %>d', // 'bcd'
        baz: 'a<%= bar %>e', // 'abcde'
        qux: ['foo/*.js', 'bar/*.js'],
    })
}