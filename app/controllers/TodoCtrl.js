"esversion: 6";

app.controller('TodoCtrl', function($scope, $location){

  $scope.newTask = {};

  // $scope.newItem = function(){
  //   $location.url('/items/new');
  // };

  $scope.allItems = function(){
    $location.url('/items/list');
  };

  $scope.addNewItem = function(){
    $scope.newTask.isCompleted = false;
    $scope.newTask.id = $scope.items.length;
    $scope.items.push($scope.newTask);

    $scope.newTask = {};
  };
});
