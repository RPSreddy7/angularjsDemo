// closure function is a inner function,
//It is accessed variables and parameters from outside function.
function closureFunc1(first,second){
	
	var sum=0;

	function addNum(){
		return sum+(first+second);
	}
	return addNum();
}

var result = closureFunc1(10,20);
document.write(result);


//------Closure function Another Example ------------------

var add = (function() {
    var counter = 0;
    return function() { return counter += 1; }
})();

function closureFunc2() {
    document.getElementById("demo").innerHTML = add();
}

//------------ Call & Apply process ----------


var obj1 = {

    a: 10,
    b: 20,

    add1: function() {
        return (this.a + this.b);
    }
}

var obj2 = {
    a: 30,
    b: 40
}

console.log(obj1.add1.call(obj2));
console.log(obj1.add1.apply(obj2));

// -----------Another way-----------

console.log(Math.max.call(1, 2, 3));
console.log(Math.max.apply(null, [1, 2, 3]));


//--------------Another example-------------------


var firstobject =  {name:"prasad",city:"nellore"}
var secondobject = {name:"RPS",city:"Kavali"}


function merge(details){

    return this.name +" "+details+" "+this.city;
}


console.log(merge.call(firstobject,"staying in"));
console.log(merge.call(secondobject,["staying","in"]));