(function() {
  "use strict";

  /**
   *
   * @param arr
   * @returns {{rest: null}}
   */

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

  /**
   *
   * @param list
   * @returns {[]}
   */

  function listToArray(list) {

    let arr = [];

    while (list !== null) {
      if (list.value !== undefined)
        arr.push(list.value);
      list = list.rest;
    }

    return arr;

  }

  console.log()


  describe("Test suite using mocha for ArrayToList and ListToArray", function () {
    it("arrayToList([ 1, 2, 3 ]", function () {
      assert.equal(arrayToList([ 1, 2, 3 ]).toString(),"[object Object]")
    })

    it("listToArray({\n" +
      "        value : 1,\n" +
      "        rest : {\n" +
      "          value : 2,\n" +
      "          rest : {\n" +
      "            value : 3,\n" +
      "            rest : null\n" +
      "          }\n" +
      "        }\n" +
      "\n" +
      "      } -> 123", function () {
      assert.equal(listToArray({
        value : 1,
        rest : {
          value : 2,
          rest : {
            value : 3,
            rest : null
          }
        }

      }).toString(),"1,2,3")
    })

  });
}());
