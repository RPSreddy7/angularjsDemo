// var personDetails = {
//     "title": "Person",
//     "type": "object",
//     "properties": {
//         "firstName": { "type": "string" },
//         "lastName": { "type": "string" },
//         "age": {
//             "description": "Age in years",
//             "type": "integer",
//             "minimum": 0
//         }
//     },
//     "required": ["fname", "lname"]
// }


// for (details in personDetails) {
//     console.log("keys=", details);
//     console.log("values=", personDetails[details]);
//     console.log("data type=", typeof personDetails[details]);
//     var propdetail = personDetails[details];

//     if (typeof propdetail === 'object') {

//         for (property in propdetail) {

//             console.log("keys=", property);
//             console.log("values=", propdetail[property]);
//             console.log("data type=", typeof propdetail[property]);
//             //console.log(propdetail[property]);

//             var insproperty = propdetail[property]
//             if (typeof insproperty === 'object') {
//                 for (insprop in insproperty) {
//                     console.log("keys=", insprop);
//                     console.log("values=", insproperty[insprop]);
//                     console.log("datatype=", typeof insproperty[insprop]);

//                 }

//             }

//         }

//         for (var i = 0; i < propdetail.length; i++) {
//             console.log(propdetail[i]);

//         }
//     }

// }

// ----------------------Another way--------------------

// for (details in personDetails) {
//     console.log("keys=", details, "values=", personDetails[details], "data type=", typeof personDetails[details]);

//     var propdetail = personDetails[details];

//     if (typeof propdetail === 'object') {

//         for (property in propdetail) {

//             console.log("keys=", property, "values=", propdetail[property], "data type=", typeof propdetail[property]);


//             var insproperty = propdetail[property]
//             if (typeof insproperty === 'object') {
//                 for (insprop in insproperty) {
//                     console.log("keys=", insprop, "values=", insproperty[insprop], "datatype=", typeof insproperty[insprop]);
//                 }

//             }

//         }

//         for (var i = 0; i < propdetail.length; i++) {
//             console.log(propdetail[i]);

//         }
//     }

// }

//---------Another Example-------------------------------------------------------------

var obj = { "menu": { "id": 123456,
                      "value": "Prasad Reddy",
                      "popup": { "menuitem": [{ "key1": "New",
                                                "key2": "CreateNewDoc()",
                                                "key3": { "name": "Ravindra",
                                                          "states": ["ap", "ka"]
                                                        }
                                              },
                                              { "value": "Open",
                                                "onclick": "OpenDoc()",
                                                "states": ["bangalore", "AP"]
                                              },
                                              { "value": "Close",
                                                "onclick": "CloseDoc()"
                                              }
                                             ]
                                }
                    }
          }


function recursion(obj) {
    if (Array.isArray(obj)) {
        for (var i = 0; i < obj.length; i++) {
            console.log('Array >>>>>>>>>> ', obj[i]);
            if (typeof obj[i] === 'object') {
                recursion(obj[i]);
            }
        }
    } else {
        for (key in obj) {
            console.log('Object >>>>>>>>>> ', obj[key]);
            if (typeof obj[key] === 'object') {
                recursion(obj[key]);
            }

        }
    }

}


recursion(obj);

    //-----------------------------------------------------------------

// for (obj1 in obj) {
//     console.log(obj1, obj[obj1], typeof obj[obj1], Array.isArray(obj[obj1]));
//     var obj1info = obj[obj1];
//     if (typeof obj1info === 'object')
//         for (mobj in obj1info) {
//             console.log(mobj, obj1info[mobj], typeof obj1info[mobj]);
//             var mobjdata = obj1info[mobj];
//             if (typeof mobjdata === 'object') {
//                 for (popobj in mobjdata) {
//                     console.log(popobj, mobjdata[popobj], typeof mobjdata[popobj]);
//                     var popobjdata = mobjdata[popobj];
//                     if (typeof popobjdata === 'object') {
//                         for (var i = 0; i < popobjdata.length; i++) {
//                             var menuitemdata = popobjdata[i];
//                             console.log(menuitemdata);
//                             for (menuiteminsideobj in menuitemdata) {
//                                 console.log(menuiteminsideobj, menuitemdata[menuiteminsideobj]);
//                             }
//                         }
//                     }

//                 }
//             }

//         }


// }


//----------------------recursion function or loop in JS-------------------------------

function func(n) {

    if (n == 0 || n == 1) {
        return 1;
    }
    var result = n;

    while (n > 1) {

        result = result * (n - 1);
        n = n - 1;

    }
    return result;

    // recursion process

    // return n*func(n-1);


}

//document.write(func(6));
// console.log(func(5));

//-----------------------------------------------


function func1(n) {

    if (n > 5) {

        return n;
    } else {

        return n + func1(n - 1);
    }

}
//document.write("--------------------",func1(4));

//------------------------------------------------------

function func(n) {

    if (n == 0 || n == 1) {
        return 1;
    }
    //var result = n;

    // while (n > 1) {

    //     result = result * (n - 1);
    //     n = n - 1;

    // }


    // recursion process

    return n * func(n - 1);


}

//document.write(func(4));