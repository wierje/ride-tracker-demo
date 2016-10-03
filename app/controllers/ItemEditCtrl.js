
"use strict";

app.controller("ItemEditCtrl",function($location, $scope, $log, $routeParams, ItemStorage){

  ItemStorage.getSingleItem($routeParams.itemId)
  .then((response) =>{
    console.log(response);
    $scope.editRide = response;
  });

  $scope.editItem = (itemObj) => {
    ItemStorage.editItem(itemObj.id, itemObj)
    .then((response) =>{
      $log.info("Ride updated!", response);
      $location.url("/ride/all");
    });
  };

});
