'use strict';

app.controller('ItemEditCtrl', function($scope, $location, $log, $routeParams, ItemStorage) {

    $scope.title = 'Edit Item';
    $scope.btnText = 'Update';
    $scope.newTask = {};

    ItemStorage.getSingleItem($routeParams.itemId)
        .then( (response) => {
            console.log(response);
            $scope.editTask = response;
        });

    $scope.editItem = () => {
        ItemStorage.editItem($routeParams.itemId, $scope.newTask)
            .then( (response) => {
                $log.info("task updated", response);
                $location.url('/rides/list');
            });
    };
});
