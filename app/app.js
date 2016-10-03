'use strict';

var app = angular.module('Rides', ["ngRoute"])
.constant("FirebaseURL", "https://my-ride-tracker.firebaseio.com");

let isAuth = (AuthFactory) => new Promise( (resolve, reject) => {
  if (AuthFactory.isAuthenticated()) {
    console.log("auth user");
    resolve();
  } else {
    console.log("not auth user");
    reject();
  }
});

app.config(function($routeProvider) {
  $routeProvider.
    when("/", {
    templateUrl: "partials/login.html",
    controller: "LoginCtrl"
  })

  .when("/ride/list", {
    templateUrl: "partials/ride-list.html",
    controller: "rideCtrl"
  })

  .when("/item/list", {
    templateUrl: "partials/item-list.html",
    controller: "listAllCtrl"
  })

  .when("/ride/edit:", {
    templateUrl: "partials/ride-edit.html",
    controller: "ItemEditCtrl",
    resolve: {isAuth}
  })

  .when("/ride/all", {
    templateUrl: "partials/ride-all.html",
    controller: "listAllCtrl",
    resolve: {isAuth}
  })
  .otherwise("/");

});



app.run(($location, FBCreds) => {
  let creds = FBCreds;
  let authConfig = {
    apiKey: creds.key,
    authDomain: creds.authDomain
  };
  firebase.initializeApp(authConfig);
});

