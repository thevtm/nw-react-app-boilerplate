var gulp = require( 'gulp' );
var browserify = require( 'browserify' );
var babelify = require( 'babelify' );
var source = require( 'vinyl-source-stream' );

gulp.task( 'browserify', function () {
	var bundler = browserify( {
		entries: [ './component/app.jsx' ],
		extensions: [ '.jsx' ],
		debug: ( process.env.NODE_ENV === 'production' ) ? false : true
	} )
		.transform(babelify, {presets: ["es2015", "react"]});

	return bundler.bundle()
		.pipe( source( 'app.js' ) )
		.pipe( gulp.dest( './compile' ) );
} );
