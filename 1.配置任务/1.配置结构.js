// 配置结构

module.exports = (grunt) => {

    grunt.initConfig({

        concat: {
            // 这里是concat任务的配置信息，是一个任务(Task)
        },

        uglify: {
            // 这里是uglify任务的配置信息
        },

        // 自定义信息
        my_property: 'whatever',
        my_src_files: []
    });
}