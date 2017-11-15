'use strict';

angular
	.module('lunaIonic')
	.factory('UserResource', [
		'$resource',
		function ($resource) {
				// console.log(data);
					return  {
						me: function (data) {
							return $resource('http://localhost:3000' + '/api/v1' + '/users' + '/:type',
									{},
									{
										getMydata: {
											method: 'GET',
											params: {
												type: 'me' },
											headers: {
												'Content-Type': 'application/x-www-form-urlencoded',
					                    		'Authorization': 'Bearer ' + data },
										},
									});
						}
					};
		}]);
