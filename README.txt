app/
----- shared/   // acts as reusable components or partials of our site
---------- sidebar/
--------------- sidebarDirective.js
--------------- sidebarView.html
---------- article/
--------------- articleDirective.js
--------------- articleView.html
----- components/   // each component is treated as a mini Angular app
---------- home/
--------------- homeController.js
--------------- homeService.js
--------------- homeView.html
---------- blog/
--------------- blogController.js
--------------- blogService.js
--------------- blogView.html
----- app.module.js
----- app.routes.js
----- index.html // app main
assets/
----- img/      // Images and icons for your app
----- css/      // All styles and style related files (SCSS or LESS files)
----- js/       // JavaScript files written for your app that are not for angular
----- libs/     // Third-party libraries such as jQuery, Moment, Underscore, etc.
index.html // access to login


/*
	"PROJECT" MAIN FOLDER

	THIS IS THE FULL PROJECT SUPERGUEST/SUPERHOST BETWEEN OTHERS.

*/
project		// All the project
---- SGWebsite 		// Superguest website to public access
---- SGAppWebMobile 	// Aplication web/mobile
---- api 	// Server for api (nodejs/mongodb)
---- static		// Server for images upload per users
---- SHWebsite		// Superhost website to public access 
---- SHAdmin 	// Superhost website to admin
---- SHAppWebMobile 	// Superhost application web/mobile (no include yet)

/*
	"SGWebsite" folder
*/
index.html
js 		// javascript files
img 	// images
css 	// css

/* 
	"SGAppWebMobile" folder
*/

