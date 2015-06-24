'use strict';

angular.module('scheduler')
.config(function ($stateProvider) {
  $stateProvider
  .state('login', {
    url: '/login',
    views: {
      '': { // main template
        templateUrl: 'views/login/login.html',
        controller: 'LoginCtrl'
      },
    }
  });
});
