function Clas() {
    var a = 10;
    var b = 20;

    this.add = function() {
        return (a + b);
    }
}
var instance = new Clas();
console.log(instance.add());


// ------------ Call & Apply process ----------


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

// ----------------------

console.log(Math.max.call(1, 2, 3));
console.log(Math.max.apply(null, [1, 2, 3]));

//------Closure function--------------------------------------

var add = (function() {
    var counter = 0;
    return function() { return counter += 1; }
})();

function closureFunc() {
    document.getElementById("demo").innerHTML = add();
}


// ---- setTimeout & setInterval--------

function setTimeout1() {
    setTimeout(function() { alert("Hello"); }, 2000);

}

function setInterval1() {
    setInterval(function() { alert("good morning"); }, 2000);

}

//------------clearTimeoutnprocess-------------------

function myFunction() {
    alert("Hello");
}

//-------------clearInterval process----------------

var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}