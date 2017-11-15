'use strict';

angular
	.module('lunaIonic')
	.factory('AuthResource', [
		'$resource',
		function ($resource) {
			return $resource('http://localhost:3000' + '/api/v1' + '/auth' + '/:type',
			{},
			{
				postSignup: {
					method: 'POST',
					params: {
						type: 'signup'},
					headers: {},
				},
				postLogin: {
                    method: 'POST',
                    params: {
                        type: 'token'},
                    headers: {},
				},
			});
		}]);
