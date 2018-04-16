'use strict';

module.exports = function(grunt) {

	function getFiles(srcdir, destdir, wildcard) {
		var path = require('path');
		var files = {};

		grunt.file.expand({cwd: srcdir}, wildcard).forEach(function(relpath) {
			// eliminamos el _tpl. y .pug
			files[path.join(destdir, relpath.replace(/(_tpl.)/i,"").replace(/.pug/i,"")) + ""] = path.join(srcdir, relpath);
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
						env: (process.env =='produccion') ? 'produccion' :'desarrollo'
					}
				},
				files: getFiles('assets/html', 'build', '*.pug' )
			}
		},
		sass: {
			dist: {
			  files: {
				'build/css/main.css': 'assets/css/main.scss'
			  }
			}
		},
		clean: {
			build: 'build'
	  	}
	});

	grunt.loadNpmTasks('grunt-contrib-pug');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-clean');

};
