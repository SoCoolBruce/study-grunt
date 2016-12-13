// 通配符模式

module.exports = (grunt) => {
    // Grunt任务配置
    grunt.initConfig({
        clean: {
            foo: {
                src: ['tmp/**'],
                filer: 'isFile'
            },

            bar: {
                src: ['tmp/**'],
                filer: (filepath) => {
                    return (grunt.file.isDir(filepath) && require(fs).readdirSync(filepath).length === 0);
                }
            }
        }
    })
}