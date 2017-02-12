"use strict";

app.controller("NavCtrl", function($scope, $location) {
  // $scope.searchText = SearchTermData;
  $scope.navItems = [
  {url: "#/login", name: "Login", showState: "!$parent.isLoggedIn"},
  {url: "#/rides/all", name: "All Rides", showState: "$parent.isLoggedIn"},
  // {url: "#/items/new", name: "New Items", showState: "$parent.isLoggedIn"},
  {url: "#/logout", name: "Logout", showState: "$parent.isLoggedIn"}
  ];

  $scope.isActive = (viewLocation) => viewLocation === $location.path();
});
