'use strict';

module.exports = function(grunt) {

	function getFiles(srcdir, destdir, wildcard) {
		var path = require('path');
		var files = {};

		grunt.file.expand({cwd: srcdir}, wildcard).forEach(function(relpath) {
			files[path.join(destdir, relpath)] = path.join(srcdir, relpath);
		});

		return files;
	};

	grunt.initConfig({
		pug: {
			compile: {
				options: {
					pretty: true,
					data: {
						debug: false,
						env: 'desarrollo'
					}
				},
				files: getFiles('assets/templates', 'build/html', '**/*.pug' )
			}
		  }
	});

	grunt.loadNpmTasks('grunt-contrib-pug');

};
