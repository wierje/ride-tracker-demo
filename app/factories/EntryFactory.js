"use strict";

app.factory("EntryFactory", ($q, $http) => {

  let getRide = function() {
    return $q((resolve, reject) => {
      $http.get('../../data/entryForm.json')
        .success((ridesObject) => {
          resolve(ridesObject);
        })
        .error((error) => {
          reject(error);
          console.log("something went wrong");
        });
    });
  };

  return {
    getRide
  };

});
