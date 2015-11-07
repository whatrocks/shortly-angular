angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function () {
    console.log($scope.link.url);
    Links.addLink($scope.link)
      .then(function () {
        $scope.link.url = '';
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

});
