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
            $http.get(`${FirebaseURL}/items/${itemId}.json`)
                .success((itemObject) => {
                    resolve(itemObject);
                })
                .error((error) => {
                    reject(error);
                });
        });
    };


    let postNewItem = (newItem) => {
        return $q((resolve, reject) => {
            $http.post(`${FirebaseURL}/items.json`,
                    JSON.stringify(newItem))
                .success((ObjFromFirebase) => {
                    resolve(ObjFromFirebase);
                })
                .error((error) => {
                    reject(error);
                });
        });
    };


    let editItem = (itemId, newDataObj) => {
        return $q((resolve, reject) => {
            $http.patch(`${FirebaseURL}/items/${itemId}.json`, newDataObj)
                .success((result) => resolve(result))
                .error((error) => console.error(error.error));
        });
    };

    let deleteItem = (itemId) => {
        return $q((resolve, reject) => {
            $http.delete(`${FirebaseURL}/items/${itemId}.json`)
                .success((objFromFirebase) => {
                    resolve(objFromFirebase);
                });
        });
    };

    return {
        getItemList,
        postNewItem,
        deleteItem,
        getSingleItem,
        editItem
    };

});