"use strict";

app.controller("listAllCtrl", function ($scope, $location, ItemStorage, FirebaseURL) {

  ItemStorage.getItemList()
  .then( (itemCollectionArray) => {
    $scope.workouts = itemCollectionArray;
  });



    $scope.itemDelete = (itemID) => {
      ItemStorage.deleteItem(itemID)
      .then( (response) => {
        ItemStorage.getItemList()
        .then( (itemCollectionArr) => {
          $scope.workouts = itemCollectionArr;
        });
      });
    };

      $scope.itemEditView = (itemId) => {
        console.log("app");
      $location.url(`/ride/edit/${itemId}`);

  };
});

