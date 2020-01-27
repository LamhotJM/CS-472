(function () {
  "use strict";


  function Person(name) {
    this.name = name;
  }
  const objProfessor = new Person("Paul Corazza");
  Person.prototype.teach = function (subject) {
    return this.name + " is now teaching" + subject;
  };
  console.log(objProfessor.teach("MPP"));

  


    /** list of test suite using mocha */
    describe("Function Constructor", function () {
      it("objProfessor.teach(\" MPP\")", function () {
        assert.equal(objProfessor.teach(" MPP"), "Paul Corazza is now teaching MPP");
      });

    });

})();
