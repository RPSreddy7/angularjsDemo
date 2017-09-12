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

//console.log(empList['EMPLOYEES'][1]['Name'])

for (myvar in empList) {
    console.log("Key >>>>>", myvar, " : Value :", empList[myvar], " :data type: ", typeof empList[myvar])
    //console.log(myvar)

    if (typeof empList[myvar] === 'object') {
        //console.log(" --------------  ")
        for (var i = 0; i < empList[myvar].length; i++) {
            var record = empList[myvar][i];
            for (prasad in record) {
                //console.log(record[prasad])
            }
        }
       // console.log(" --------------  ")
    }

}


''
var objStr = '{"id": 323232,"Name": "xxxxxxx","DOB": "new Date()","salary": 34343.51,"isIndian": true,"prevEmp": "null"}';
console.log(" string ",objStr);

var convertObj = JSON.parse(objStr);
console.log(" obj ",convertObj,' --id - ',convertObj['id']);


convertObj['Name'] = "ravindra";

var convertStr= JSON.stringify(convertObj);

console.log(" convertStr ",convertStr);