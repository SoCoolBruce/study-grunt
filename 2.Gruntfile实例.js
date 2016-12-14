/**
 * 使用顺序：
 * 创建任务
 * 加载模块
 * 注册任务
 * 
 */

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.files.readJSON('package.json'),

    // JavaScript代码检查
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },

    // 监控文件变动
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },

    // 合并多个文件
    concat: {
      options: {
        // 定义一个用于插入合并输出文件之间的字符
        separator: ';'
      },
      dist: {
        // 将要被合并的文件
        src: ['src/**/*.js'],
        // 合并后的JS文件的存放位置
        dest: 'dist/<%= pkg.name %>.js'
      }
    },

    // 压缩（minify）JavaScript文件
    uglify: {
      options: {
        // 此处定义的banner注释将插入到输出文件的顶部
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          // uglify会自动压缩concat任务中生成的文件
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    // 单元测试
    qunit: {
      files: ['test/**/*.html']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // 在命令行上输入"grunt test"，test task就会被执行。
  grunt.registerTask('test', ['jshint', 'qunit']);

  // 只需在命令行上输入"grunt"，就会执行default task
  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

};