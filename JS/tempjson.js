var empList = {
    "EMPLOYEES": [{
            "id": 1234,
            "Name": "Ravindra",
            "DOB": new Date(),
            "salary": 12000.01,
            "isIndian": true,
            "prevEmp": null,
            "friends": ['ravi', 'prasad']
        },
        {
            "id": 2222,
            "Name": "yyyyy",
            "DOB": new Date(),
            "salary": 14000.6,
            "isIndian": true,
            "prevEmp": undefined
        },
        {
            "id": 323232,
            "Name": "xxxxxxx",
            "DOB": new Date(),
            "salary": 34343.51,
            "isIndian": true,
            "prevEmp": null
        }

    ],
    "CITY": "baangalore",
    "State": "karnarataka"

}


var test = {
    "inida": ['AP', "TL", "MP"],
    "us": ['xx', "tt", "dd"],
    "inida": ['AP1', "TL", "MP"],
    "inida": ['AP2', "TL", "MP"],
    "inida": ['AP3', "TL", "MP"],
    "inida": ['AP4', "TL", "MP"],
    "inida": ['AP5', "TL", "MP"],
    "inida": ['AP6', "TL", "MP"],
    "inida": ['AP7', "TL", "MP"],
    "inida": ['AP8', "TL", "MP"],
    "inida": ['APt', "TL", "MP"]
};

//console.log(test['inida']);
//console.log(test['us']);

//console.log(empList['EMPLOYEES'][2]['Name'])
//console.log(empList['State']);



for (myvar in empList) {
    console.log("Keys= ", myvar, "Values :", empList[myvar], "data type: ", typeof empList[myvar])

    console.log(myvar)

    if (typeof empList[myvar] === 'object') {
        
        for (var i = 0; i < empList[myvar].length; i++) {
            var record = empList[myvar][i];
            for (prasad in record) {
                console.log(record[prasad])
            }
        }
       
    }

}


// for(obj in empList){
//     console.log("Keys=", obj, "Value:", empList[obj], "data type:", typeof empList[obj]);
//     console.log(obj, empList[obj], typeof empList[obj]);
//     console.log(obj);
// }



// ---------------below "objStr" is a string -----------------


var objStr = '{"id": 323232,"Name": "xxxxxxx","DOB": "new Date()","salary": 34343.51,"isIndian": true,"prevEmp": "null"}';
console.log(" string ",objStr);

// ------------convert from string to object----------------

var convertObj = JSON.parse(objStr);
console.log(" object= ",convertObj, " id =",convertObj['id']);


//-------------- name changed-----------------
console.log("Name=", convertObj['Name'] = "ravindra");

//------------- convert from object to string

var convertStr= JSON.stringify(convertObj);

console.log(" convert to String ",convertStr);