"esversion: 6";

app.controller("ItemViewCtrl", function($scope, ItemStorage, $routeParams) {
  "use strict";
  $scope.workouts = [];

  ItemStorage.getItemList($scope.$parent.getUser())
  .then( (itemCollectionArr) => {
    $scope.workouts = itemCollectionArr;

    $scope.selectedItem = $scope.workouts.filter(function(item) {
      return item.id === $routeParams.itemId;
    })[0];
  });
});
