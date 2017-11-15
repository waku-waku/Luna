'use strict';

angular
	.module('lunaIonic')
	.controller('LoginCtrl',
		['$scope', '$timeout',　'$window', '$state', '$location', 'AuthResource', 'UserSession',
			function ($scope, $timeout,　$window, $state, $location, AuthResource, UserSession) {

				var vm = this;

				vm.getAccessToken = function () {
					if (UserSession.isLoggedIn) {
						$scope.isLogged = UserSession.getToken();
					}
				};

				$scope.login = function () {
					console.log("sss");
					if ($scope.loginForm.$valid) {
						AuthResource
							.postLogin({
								client_id: 'luna-client',
								client_secret: 'test',
								username: $scope.user.username,
								password: $scope.user.password,
								grant_type: 'password'
							})
							.$promise
							.then(function (data) {
								UserSession.saveToken(data);
							})
							.then(function () {
								$location.path('/#/home/top');
							})
							.catch(function () {
                  $timeout(function () {
                  	$state.reload('/home/login');
                  }, 800);
              });
					}
				};

				$scope.user = {
	                username: '',
	                password: ''
	            };

			}]);
