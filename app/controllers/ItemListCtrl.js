 "use strict";

app.controller("ItemListCtrl", function($scope, $location, ItemStorage, SearchTermData) {
  $scope.searchText = SearchTermData;
  let user = $scope.$parent.getUser();
  console.log(user);

ItemStorage.getItemList(user)
    .then((itemCollectionArr) => {
        $scope.items = itemCollectionArr;
    });

    $scope.itemDelete = (itemID) => {
      ItemStorage.deleteItem(itemID)
      .then( (response) => {
        ItemStorage.getItemList(user)
        .then( (itemCollectionArr) => {
          $scope.items = itemCollectionArr;
        });
      });
    };
      $scope.itemEditView = (itemId) => {
        console.log("app");
      $location.url(`/ride/edit/${itemId}`);

  };

});

  // $scope.itemEditView = (itemId) => {

  //     $location.url(`/ride/edit/${itemId}`);

  // };


