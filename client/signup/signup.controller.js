'use strict';

angular
	.module('lunaIonic')
	.controller('SignupCtrl',
		['$scope', '$timeout',　'$window', '$state', '$location', 'AuthResource',
			function ($scope, $timeout,　$window,  $state, $location, AuthResource) {

				var vm = this;

				vm.signup = function () {
					var fullName = $scope.signup.first + ' ' + $scope.signup.last;
					if ($scope.signupForm.$valid) {
						AuthResource
							.postSignup({
								client_id: 'luna-client',
								client_secret: 'test',
								email: $scope.signup.email,
								password: $scope.signup.password,
								username: $scope.signup.username,
								fullname: fullName,
								grant_type: 'password'
							})
							.$promise
							.then(function (data) {
								console.dir(data);
								$location.path('/home/login');
							})
							.catch(function () {
	             console.log("disconnected");
               $state.reload();
	            });
					}
				};

				$scope.signup = {};

			}]);
