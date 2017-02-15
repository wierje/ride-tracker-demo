"esversion: 6";


app.controller("ItemEditCtrl",function($location, $scope, $log, $routeParams, ItemStorage){

  "use strict";
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
