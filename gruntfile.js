module.exports = function(grunt) {
  // If we are not passing any grunt option default option would be dev
  var target = grunt.option('target') ? grunt.option('target') : 'dev';
  grunt.log.writeln("You have Selected "+target + " Environment");
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    replace: {
      dist: {
        options: {
          usePrefix: false,
          patterns: [
            {
              match: '__ENV__',
              replacement: target
            }
          ]
        },
        files: [
          {expand: true, flatten: true, src: ['application/environment.js'], dest: 'application/dist/'}
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-replace');

  grunt.registerTask('build', ['replace']);
};
