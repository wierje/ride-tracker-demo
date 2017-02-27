"esversion: 6";


app.controller("ItemEditCtrl",function($location, $scope,  $routeParams, $log, ItemStorage){
  'use strict';
  $scope.title = 'Edit Item';
  $scope.btnText = 'Save';
  $scope.newTask = {};

  ItemStorage.getSingleItem($routeParams.itemId)
  .then((response) => {
    console.log(response);
    $scope.editRide = response;
  });

  $scope.addNewItem = () => {
    console.log($routeParams.itemId);
    ItemStorage.updateItem($routeParams.itemId, $scope.newTask)
    .then((response) => {
      $log.info("Ride updated!", response);
      $location.url("/ride/all");
    });
  };
});
