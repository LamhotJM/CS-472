(function () {
  "use strict";


  function stringFilter(sentence, remove) {
    String.prototype.filter = function (rem) {
      return this.replace(rem, "").replace("  ", " ");
    };
    return sentence.filter(remove);

  }

  function bubbleSort(array) {
    Array.prototype.bubbleSort = function () {
      let length = this.length;
      for (let i = (length - 1); i >= 0; i--) {
        for (let j = (length - i); j > 0; j--) {
          if (this[j] < this[j - 1]) {
            let tmp = this[j];
            this[j] = this[j - 1];
            this[j - 1] = tmp;
          }
        }
      }
      return this;
    }
    return array.bubbleSort();

  }

  /** list of test suite using mocha */
  describe("Test suite for stringFilter and bubbleSort  ", function () {
    it(" stringFilter(\"Lamhot Siagian!\",'hot') equal with Lam Siagian!", function () {
      assert.equal(stringFilter("Lamhot Siagian!", 'hot'), "Lam Siagian!");
    });

    it(" bubbleSort(\"[67,55,62,2,-3,6]) expected -3,2,6,55,62,67", function () {
      assert.equal(bubbleSort([67,55,62,2,-3,6]).toString(), "-3,2,6,55,62,67");
    });

  });
})();
