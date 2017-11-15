'use strict';

angular
  .module('lunaIonic')
  .controller('HomeCtrl',
    ['$scope', '$timeout','RssResource', 'UserSession','UserResource','$http',
      function ($scope, $timeout, RssResource, UserSession, UserResource, $http) {

        var vm = this;

        $scope.data = {
          showDelete: false
        };

        $scope.username = "ゲスト";

        // $http.get('http://localhost:3000/header').success(function(datas) {
        //   $scope.datas = datas;
        // });

        // http://www.drone.jp/feed

        if (UserSession.isLoggedIn()) {
			UserResource
				.me(UserSession.getToken())
				.getMydata()
				.$promise
				.then(function (data) {
					console.dir(data);
					$scope.username = data.username;
				})
				.catch(function () {
                    $timeout(function () {
                    	
                    }, 800);
                });
		} else {
			
		}

        RssResource
          .parseFeed('http://hamusoku.com/index.rdf')
          .then(function (data) {
            console.log(data);
            var entries = data.data.responseData.feed.entries;
            for (var i=0; i<entries.length; i++) {
              var imgsrc = entries[i].content.match(/src="(.*?)"/igm);

              entries[i].image = imgsrc[0].slice(5, -1);
            }
            $scope.items = entries;
          })
          .catch(function () {
              $timeout(function () {
                
              }, 800);
          });

      }]);
