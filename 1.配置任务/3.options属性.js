// options属性

module.exports = (grunt) => {

    grunt.initConfig({

        concat: {
            // 这里是concat任务的配置信息，是一个任务(Task)

            options: {
                // 这里是任务级的Options，会覆盖默认值，可选
            },

            foo: {
                // 目标(target)

                options: {
                    // 这里是目标级的Options，会覆盖任务级的Options，可选
                }
            },
            bar: {}
        }

    });
}