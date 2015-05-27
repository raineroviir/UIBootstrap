'use strict';

require('angular/angular');

var notesApp = angular.module('notesApp', []);

notesApp.controller('notesController',['$scope', function($scope) {
  $scope.greeting = 'hello world!';  
  $scope.displayGreeting = function() {
    alert($scope.greeting);
  };
}]);


notesApp.controller('anotherController', ['$scope', function($scope) {
 $scope.greeting = 'another greeting';
}]);

notesApp.controller('oneMoreController', ['$scope', function($scope) {

}]);
