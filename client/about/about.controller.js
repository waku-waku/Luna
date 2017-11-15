'use strict';

angular
  .module('lunaIonic')
  .controller('AboutCtrl',
    ['$scope', '$timeout','RssResource','$http',
      function ($scope, $timeout, RssResource, $http, $ionicSideMenuDelegate) {

        var vm = this;

      	$scope.toggleLeftSideMenu = function() {
		  $ionicSideMenuDelegate.toggleLeft();
		};

      }]);
