'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    pug: {
        compile: {
          options: {
            data: {
              debug: true
            }
          },
          files: {
            'build/html/articulo.html': 'assets/templates/*.pug'
          }
        }
      }
  });

grunt.loadNpmTasks('grunt-contrib-pug');

};
