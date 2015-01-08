module.exports = function (grunt) {

	// grunt config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			options: {
				style: 'expanded'
			},
			scss: {
				files: [{
					src: 'src/css/main.scss',
					dest: 'src/css/main.css'
				}]
			}
		},

		jshint: {			
			files: ['gruntfile.js', 'src/js/*.js']
		},

		concat: {
			options: {
				banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
				separator: '\n/*---------分割线---------*/\n'
			},
			js: {
				files: [{
					src: ['src/js/base.js', 'src/js/script.js'],
					dest: 'dist/js/<%= pkg.name %>.js'
				}]
			}
		},

		cssmin: {
			css: {
				files: [{
					src: 'src/css/main.css',
					dest: 'dist/css/<%= pkg.name %>.min.css'
				}]
			}
		},

		uglify: {
			js: {
				files: [{
					src: 'dist/js/<%= pkg.name %>.js',
					dest: 'dist/js/<%= pkg.name %>.min.js'
				}]
			}
		},

		htmlmin: {
			options: {
				removeComments:true,
				collapseWhitespace:true
			},
			dist: {
				files: [{
					expand: true,       // all html
					cwd: 'src/',
					src: ['**/*.html'],
					dest: 'dist/'
				}]
			}
		},

		imagemin: {
			img: {
				files: [{
					expand: true,		// all images
					cwd: 'src/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'dist/'
				}]
			}
		},

		watch: {
			css: {
				files: 'src/css/main.scss',
				tasks: ['sass']
			},
			js: {
				files: ['<%= jshint.files %>'],
				tasks: ['jshint']
			}
		}
	});

	// load task
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// regist task
	grunt.registerTask('compile', ['watch']);
	grunt.registerTask('default', ['sass', 'jshint', 'concat', 'cssmin', 'uglify']);
	grunt.registerTask('html', ['htmlmin']);
	grunt.registerTask('image', ['imagemin']);
};