module.exports = (grunt) => {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      dev: {
        files: {
          "dist/main.css": "src/styles/main.less",
        },
      },
    },
    uglify: {
      my_target: {
        files: {
          "dist/index.min.js": "src/js/index.js",
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["less:dev", "uglify"]);
};
