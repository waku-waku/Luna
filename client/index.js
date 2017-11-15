'use strict';

angular.module('lunaIonic', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ngResource', 'LocalStorageModule', 'ionic'])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
       	url: '/home',
       	templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
      })
      .state('home.top', {
      	url: '/top',
      	views: {
         	'menuContent': {
        		templateUrl: 'top/top.html',
        		controller: 'TopCtrl'
        	}
        }
      })
      .state('home.login', {
        url: '/login',
        views: {
         	'menuContent': {
        		templateUrl: 'login/login.html',
        		controller: 'LoginCtrl'
        	}
        }
      })
      .state('home.signup', {
        url: '/signup', 
        views: {
         	'menuContent': {
        		templateUrl: 'signup/signup.html',
        		controller: 'SignupCtrl'
        	}
        } 
      });

    $urlRouterProvider.otherwise('/home/top');

    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false
    });
  })
;
