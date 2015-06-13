/* jshint devel:true */
var app = angular.module('flapperNews',['ui.router']);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });

  $urlRouterProvider.otherwise('home');
}]);

app.factory('posts',[function() {
  var o = {
    posts: []
  };
  return o;
}]);

app.controller('MainCtrl', ['$scope','posts',function($scope,posts){
  $scope.posts = posts.posts; // binds variable in our controller to the posts array in our service

  // Add object to posts array
  $scope.addPost = function() {
    if(!$scope.title || $scope.title === ''){return;} // Prevent blank post
    $scope.posts.push({
      title: $scope.title,
      link: $scope.link,
      upvotes: 0
    });
    $scope.title = '';
    $scope.link = '';
  }

  // Increment upvotes
  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  }
}]);
