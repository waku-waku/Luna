'use strict';

var path = require('path');


/**
 * Config.
 */

var DB_NAME = process.env.DB_NAME;

if (!DB_NAME) {
	console.error('DB_NAME is not found.');
	process.exit(-1);
}

var config = {
	env: process.env.NODE_ENV,

	root: path.normalize(__dirname + '/../../..'),

	port: process.env.PORT || 8080,

	ip: process.env.IP || 'localhost',

	db: {
		url: 'mongodb://localhost:27017/luna_dev'
	},

	seedDB: false,

	secret: {
		session: 'luna-secret'
	}

};

console.log(config.root);

module.exports = config;
