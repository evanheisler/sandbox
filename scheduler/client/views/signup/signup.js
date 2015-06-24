'use strict';

angular.module('scheduler')
.config(function ($stateProvider) {
  $stateProvider
  .state('signup', {
    url: '/signup',
    views: {
      '': { // main template
        templateUrl: 'views/signup/signup.html',
        controller: 'SignupCtrl'
      },
    }
  });
});
