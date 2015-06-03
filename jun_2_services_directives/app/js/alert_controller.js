'use strict';
module.exports = function(app) {
  app.controller('AlertDemoCtrl', function ($scope) {
  $scope.alerts = [];
  $scope.errorAlerts = [];

  $scope.addAlert = function(type) {
    $scope.alerts = [];
    $scope.alerts.push({type: type, msg: 'Note Added Successfully!'});
  };


  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
});
}