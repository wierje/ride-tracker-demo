"esversion: 6";


app.controller("EntryCtrl",function($location, $scope, $log, $routeParams, ItemStorage){

  "use strict";
  ItemStorage.getSingleItem($routeParams.itemId)
  .then((response) =>{
    console.log(response);
    $scope.editRide = response;
  });

  $scope.editItem = (itemObj) => {
    console.log(itemObj.id);
    ItemStorage.editItem(itemObj.id, itemObj)
    .then((response) =>{
      $log.info("Ride updated!", response);
      $location.url("/ride/all");
    });
  };

});
