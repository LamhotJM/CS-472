(function () {
  "use strict";


  const person = function () {
    return {name: "Lamhot"};
  };
  const teach = Object.create(person());
  teach.name = "Paul Corazza";
  teach.course = function (subject) {
    return this.name + " is now teaching " + subject;
  };


  /** list of test suite using mocha */
  describe("Object Create", function () {
    it("teach.course(\" MPP\")", function () {
      assert.equal(teach.course("MPP"), "Paul Corazza is now teaching MPP");
    });

  });

})();
