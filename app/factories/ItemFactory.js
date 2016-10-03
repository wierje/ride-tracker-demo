"use strict";

app.factory("ItemStorage", ($q, $http, FirebaseURL) => {

    let getItemList = () => {
        console.log();
        let items = [];
        return $q((resolve, reject) => {
            $http.get(`${FirebaseURL}/workouts.json?`)
                .success((itemObject) => {
                    if (itemObject !== null) {
                        Object.keys(itemObject).forEach((key) => {
                            itemObject[key].id = key;
                            items.push(itemObject[key]);
                        });
                        resolve(items);
                    } else {
                        resolve(items);
                    }
                })
                .error((error) => {
                    reject(error);
                });
        });
    };

    let getSingleItem = (itemId) => {
        return $q((resolve, reject) => {
            $http.get(`${FirebaseURL}/workouts/${itemId}.json`)
                .success((itemObject) => {
                    resolve(itemObject);
                })
                .error((error) => {
                    reject(error);
                });
        });
    };


  let updateItem = (itemId, editedItem) => {
    return $q( (resolve, reject) => {
      $http.patch(`${FirebaseURL}/workouts/${itemId}.json`,
        JSON.stringify(editedItem))
      .success( (objFromFirebase) => {
        resolve(objFromFirebase);
      })
      .error( (error) => {
        reject(error);
      });
    });
  };



    let editItem = (itemId, newDataObj) => {
        return $q((resolve, reject) => {
            $http.patch(`${FirebaseURL}/workouts/${itemId}.json`, newDataObj)
                .success((result) => resolve(result))
                .error((error) => console.error(error.error));
        });
    };

    let deleteItem = (itemId) => {
        return $q((resolve, reject) => {
            $http.delete(`${FirebaseURL}/workouts/${itemId}.json`)
                .success((objFromFirebase) => {
                    resolve(objFromFirebase);
                });
        });
    };

    return {
        getItemList,
        // postNewItem,
        deleteItem,
        getSingleItem,
        editItem,
        updateItem
    };

});



    // let postNewItem = (newItem) => {
    //     return $q((resolve, reject) => {
    //         $http.post(`${FirebaseURL}/workouts.json`,
    //                 JSON.stringify(newItem))
    //             .success((ObjFromFirebase) => {
    //                 resolve(ObjFromFirebase);
    //             })
    //             .error((error) => {
    //                 reject(error);
    //             });
    //     });
    // };

