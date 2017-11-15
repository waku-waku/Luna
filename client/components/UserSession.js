'use strict';

angular
    .module('lunaIonic')
    .service('UserSession', [
        '$http', '$q', 'localStorageService',
        function ($http, $q, localStorageService) {
        	var vm = this;

        	vm.saveToken = function (data) {
        		console.log(data);
        		localStorageService.set('access_token', data.access_token);
        		localStorageService.set('access_token_expires', Date.now() + data.expire_in * 1000);
        		localStorageService.set('refresh_token', data.refresh_token);
        	};

        	vm.clearAll = function () {
        		localStorageService.clearAll();
        	};

        	vm.isLoggedIn = function () {
        		return Boolean(localStorageService.get('access_token'));
        	};

        	vm.getToken = function () {
        		console.log(localStorageService.get('access_token'));
        		return localStorageService.get('access_token');
        	};

        }]);
