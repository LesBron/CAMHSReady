'use strict';

angular.module('docready')
  .controller('PickerCtrl', function ($scope, symptomService, $routeParams) {
    $scope.activeTag = $routeParams.tag;
    $scope.symptoms = symptomService.symptoms;
    $scope.tags = symptomService.tags;

    $scope.hasActiveTag = function(symptom){
        return _.contains(symptom.tags, $scope.activeTag);
      };

    $scope.countForTag = function(tag){
      return _.size(_.filter($scope.symptoms, function(symptom){
        return _.contains(symptom.tags, tag) && symptom.selected;
      }));
    };
  });
