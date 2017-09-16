/*

 this : current object refernce

*/
function arthmetic(a, b) {

    //console.log('inside ',this)
    var counter = 5;

    this.param1 = a;
    this.param2 = b;

    this.add = function() {
        return (this.param1 + this.param2 + counter)
    }

    this.addcustom = function(x, y) {
        return (x + y + counter)
    }

    this.sub = function() {
        return (this.param1 - this.param2)
    }
}

//console.log('outside :: window object refernce  ',this);

var myInstance = new arthmetic(10, 20);
console.log(myInstance);
//console.log(myInstance.multiply())
//console.log(myInstance.add())
//console.log(myInstance.addcustom(15,30))


var myInstance1 = new arthmetic(40, 20);
console.log(myInstance1)
//console.log(myInstance1.multiply())
//console.log(myInstance1.add())

//console.log(myInstance.sub());
//console.log(myInstance1.sub());

// ---------------------
//  classname.prototype.yourproperty or fun name 

arthmetic.prototype.city = "Ravindra";
arthmetic.prototype.multiply = function() {
    return (this.param1 * this.param2)
}
arthmetic.prototype.multiplyparam = function(x, y) {
    return (x * y)
}
var myInstance2 = new arthmetic(25, 15);
console.log(myInstance2)
console.log(myInstance2.multiply())
console.log(myInstance2.multiplyparam(12, 12))
console.log(myInstance.multiply())