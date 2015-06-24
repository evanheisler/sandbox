'use strict';

angular.module('scheduler')
.config(function ($stateProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    views: {
      '': { // main template
        templateUrl: 'views/home/home.html',
        controller: 'HomeCtrl'
      },
    }
  });
});
