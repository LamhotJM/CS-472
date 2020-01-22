(function() {
  "use strict";

  function arrayToList(arr) {
    let retVal = {

      rest : null

    };

    for (let i = 0; i < arr.length; i++) {

      if (retVal.rest === null) { // if its first element in list
        retVal.value = arr[i]; // dynamically adding value attribute to
        // retVal object
        retVal.rest = {

          rest : null
        };
      } else {
        let counter = retVal;
        while (counter.rest !== null) {
          counter = counter.rest;
        }
        counter.value = arr[i];
        counter.rest = {

          rest : null
        };

      }

    }

    return retVal;
  };
  console.log();

  function listToArray(list) {

    let arr = [];

    while (list !== null) {
      if (list.value !== undefined)
        arr.push(list.value);
      list = list.rest;
    }

    return arr;

  }

  console.log(listToArray({
    value : 1,
    rest : {
      value : 2,
      rest : {
        value : 3,
        rest : null
      }
    }

  }).toString())



  describe("Test suite using mocha for ArrayToList and ListToArray", function () {
    it("reverseArray(C,B,A) ABC", function () {
      assert.equal(arrayToList([ 1, 2, 3 ]).toString(),"[object Object]")
    })

    it("reverseArrayInPlace(C,B,A) ABC", function () {
      assert.equal(reverseArrayInPlace(["C","B","A"]).toString(), ["A","B","C"])
    })

  });
}());
