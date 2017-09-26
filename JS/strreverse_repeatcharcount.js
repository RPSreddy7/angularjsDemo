  "use strict";
  let name = "Ravindra";
  var city = "Banaglore";
  let a = 7;
  let b = 10;

  function localVar() {      
      //b = 12;
      console.log(a, b);
      var test = "Prasad"; ///  sure ga var or let declare cheyyali.. otherwise syntax error vasthadhi --- use stirct
      let name = "pavan kalyan";
      var b;
  }

 localVar();
// ------------------------------------------------------



  let str = "Prasad Reddy YS JAGAN Reddy";

  function myTask(strParam) {
      this.str = strParam;

      this.charRepeat = function(serachChar) {
          var counter = 0;
          for (let i = 0; i < this.str.length; i++) {
              if (this.str[i].toUpperCase() === serachChar.toUpperCase()) {
                  counter++;
              }
          }

          return "Search Char is " + serachChar + " and no of times " + counter;
      }

      this.reverseStr = function() {
          let temp = "";
          for (var i = (this.str.length - 1); i >= 0; i--) {
              temp += this.str[i];
          }
          return "My String is >> " + this.str + " and reverStr is >>>" + temp;
      }

  }


  let obj = new myTask(str);
  console.log(obj.charRepeat('a'));
  // console.log(obj.charRepeat('d'));
  // console.log(obj.charRepeat('c'));
   console.log(obj.reverseStr());