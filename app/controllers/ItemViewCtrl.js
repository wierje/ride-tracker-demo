'use strict';

app.controller('ItemViewCtrl', function($scope, ItemStorage, $routeParams) {
  $scope.workouts = [];

  ItemStorage.getItemList($scope.$parent.getUser())
  .then( (itemCollectionArr) => {
    $scope.workouts = itemCollectionArr;

    $scope.selectedItem = $scope.workouts.filter(function(item) {
      return item.id === $routeParams.itemId;
    })[0];
  });
});