"use strict";

app.factory("EntryFactory", ($q, $http) => {

  let getRides = function() {
    return $q((resolve, reject) => {
      $http.get('../../data/entryForm.json')
      .success((ridesObject) => {
        resolve (ridesObject);
      })
      .error((error) => {
        reject(error);
      });
   });
  };

  return {getRides};

});
