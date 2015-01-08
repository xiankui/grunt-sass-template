<<<<<<< HEAD

package.json is the first step:
	write package.json file.
	it will like this:
	
		{
		  "name": "app",
		  "version": "1.0.0"
		}
		
	then, get grunt and nessary grunt contribute plugs.
	the common use like this:
	
		>npm install grunt --save-dev
		>npm install grunt-contrib-watch --save-dev
		>npm install grunt-contrib-sass --save-dev
		>npm install grunt-contrib-jshint --save-dev
		>npm install grunt-contrib-concat --save-dev
		>npm install grunt-contrib-cssmin --save-dev
		>npm install grunt-contrib-uglify --save-dev
		>npm install grunt-contrib-htmlmin --save-dev
		>npm install grunt-contrib-imagemin --save-dev

Gruntfile.js is the config that you define to run grunt task for what you want!

		>grunt compile (when you are working, run this command) 
			this command will run watch task that you had config,
			complie .scss file to .css file,
			check if the script syntax is correct,
			awalys do it when you save your file.

		>grunt (default)
			this command will deal with the css and script well done,
			from src disk to dist disk with compressed.

		>grunt html 
			all html file will copy to dist disk with compressed.

		>grunt image
			all images file will copy to dist disk with compressed.

and then, well done! use the code in dist disk.
=======
# grunt-sass-template
the template example for how to use grunt and sass.
>>>>>>> c2a4abda68337e53d0dc64d2fd5591bae6e62f10
