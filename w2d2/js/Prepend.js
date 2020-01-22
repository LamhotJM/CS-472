(function () {
  function prepend(number, list) {
    let obj = {};
    obj.value = number;
    obj.rest = list;
    return obj;
  }

  console.log(prepend(10, prepend(20, null)).value);

  describe("Test suite using mocha for Prepend", function () {
    it("prepend(10, prepend(20, null))", function () {
      assert.equal(prepend(10, prepend(20, null)).value, 10)
    })

  });

}());
