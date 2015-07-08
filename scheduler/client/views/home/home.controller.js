'use strict';

angular.module('scheduler')
.controller('HomeCtrl', function ($scope) {
  $scope.name = 'Scheduling App';

  $scope.barWidth = function(children, occupancy, threshold) {
    $scope.fullSections = Math.floor(children/threshold);
    $scope.partialSection = children%threshold;

    $scope.bars = [{
      cssClass: 'progress-bar-success',
      width: (threshold/occupancy) * 100,
      name: 'Jane Doe'
    }]
    console.log('fired');
    // return {
    //   fullSections: fullSections,
    //   partialSection: partialSection
    // }
  }

  $scope.classrooms = [
    {
      'title': 'Classroom 1',
      'threshold': 8,
      'children': 25,
      'maxOccupancy': 30
    },
    {
      'title': 'Classroom 2',
      'threshold': 12,
      'children': 11,
      'maxOccupancy': 28
    }
  ];

});
