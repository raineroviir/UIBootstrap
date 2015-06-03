'use strict';

module.exports = function(app) {
  app.controller('AccordionDemoCtrl', function ($scope) {
  $scope.oneAtATime = true;

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
});
}