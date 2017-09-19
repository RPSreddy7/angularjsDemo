function Clas() {
    var a = 10;
    var b = 20;

    this.add = function() {
        return (a + b);
    }
}
var instance = new Clas();
console.log(instance.add());

// ---- setTimeout & setInterval----------------------

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