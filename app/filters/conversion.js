"use strict";


    app.filter('distance', function () {
return function (input) {
    if (input >= 1000) {
        return (input/1000).toFixed(2);
    } else {
        return input;
    }
}
});


    app.filter('miles', function () {
return function (input) {
    if (input >= 100) {
        return (input*0.000621371).toFixed(2);
    } else {
        return input;
    }
}
});


    app.filter('calories', function () {
return function (input) {
    if (input >= 1) {
        return (input*.0002389).toFixed(0);
    } else {
        return input;
    }
}
});


    app.filter('minutes', function () {
return function (input) {
    if (input >= 1) {
        return (input/60).toFixed(2);
    } else {
        return input;
    }
}
});

