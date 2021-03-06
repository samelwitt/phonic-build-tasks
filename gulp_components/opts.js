module.exports = {
	//argv: require('yargs')().argv,
	fs: require('fs-extra'),
	path: require('path'),
	Promise: require("bluebird"),
	paths: {
		src: './src',
		tmp: './tmp',
		dist: './dist',
		cssDir: '/css',
		imgDir: '/i',
		jsDir: '/js',
		jsonDir: '/json',
		lessDir : '/less',
		modulesDir : '/modules',
		homepage: '/index.html',
		categoryPages: '/*/**/index.html',
		ngTemplates: '/modules/**/*.html',
		staticAssetsDir : '/static-assets'
	},
	config: require(process.cwd() + '/config')
};
