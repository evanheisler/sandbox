/* jshint devel:true */
var app = angular.module('flapperNews',['ui.router']);

app.config(['$stateProvider','$urlRouterProvider','$locationProvider',function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
    .state('posts',{
      url: '/posts/{id}',
      templateUrl: '/posts.html',
      controller: 'PostsCtrl'
    });

  $urlRouterProvider.otherwise('home');
  $locationProvider.html5Mode(true);
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
      upvotes: 0,
      comments: [
        {author: 'Joe', body: 'Cool post!', upvotes: 0},
        {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
      ]
    });
    $scope.title = '';
    $scope.link = '';
  }

  // Increment upvotes
  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  }
}]);

app.controller('PostsCtrl',['$scope','$stateParams','posts',function($scope,$stateParams,posts) {
  $scope.post = posts.posts[$stateParams.id]; // grabs the post variable for use in template

  $scope.addComment = function() {
    if($scope.body === ''){return;}
    $scope.post.comments.push({
      body: $scope.body,
      author: 'user',
      upvotes: 0
    });
    $scope.body = '';
  }

  // Increment upvotes
  $scope.incrementUpvotes = function(comment) {
    comment.upvotes += 1;
  }
}]);
