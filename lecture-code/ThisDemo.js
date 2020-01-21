/*jshint esversion: 6 */
/*jshint strict:false */
/*globals $:false */
/* jshint -W097 */


//$((function() {
window.onload = function() {
"use strict";	
  const btntest=$("#test");

  btntest.click(()=>{
     console.log(this);
    console.log("arrow:"+this)
  })

function fnStart() {
  alert("normal this.id:"+this.id+ " this:"+this);
}

};

/*
arrow functions, they close over this instead of having their own that's set by how they're called. For the use case in the question, if you want this set by jQuery when calling the handler, 
the handler would need to be a function.   But if you have a reason for using an arrow (perhaps you want to use this for what it means outside the arrow), you can 
use e.currentTarget instead of this if you like

In classic function expressions, the this keyword is bound to different values based on the context in which it is called.
With arrow functions however, this is lexically bound. It means that it usesthis from the code that contains the arrow function.
https://medium.freecodecamp.org/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26

 */
/* https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/apA.md 
The key contrast: lexical scope is write-time, whereas dynamic scope (and this!) are runtime. Lexical scope cares where a function was declared, but dynamic scope cares where a function was called from.
Finally: this cares how a function was called, which shows how closely related the this mechanism is to the idea of dynamic scoping.
*/