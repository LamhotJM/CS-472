(function () {
  "use strict";


    class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }

      greeting() {
        return ("Greetings, my name is " + this.name + " and I am " + this.age + " years old");
      }

      salute() {
        return ("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
      }
    }

    class Student extends Person {
      constructor(name, age, field) {
        super(name, age);
        this.field = field;
      }

      greeting() {
        return ("Their greeting is “Hey, my name is " + this.name + " and I am studying " + this.field + ".");
      }
    }

    class Professor extends Person {
      constructor(name, age, department) {
        super(name, age);
        this.department = department;
      }

      greeting() {
        return ("Good day, my name is " + this.name + " and I am in the " + this.department + " department.");
      }
    }


  const objPerson = new Person("A person", 25);
  objPerson.salute();

  const objStudent = new Student("Lamhot", 25, "WAP");
  objStudent.greeting();
  objStudent.salute();

  const objProfessor = new Professor("Prof Keith", 20, "Computer Science");
  objProfessor.salute();

  /** list of test suite using mocha */
  describe("Test suite for classSyntax ", function () {
    it("Testing Person Class -> objPerson.greeting()", function () {
      assert.equal( objPerson.greeting().toString(), "Greetings, my name is A person and I am 25 years old");
    });

    it("Testing Person Class -> objPerson.salute()", function () {
      assert.equal( objPerson.salute().toString(), "Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
    });

    it("Testing Student Class -> objStudent.greeting()", function () {
      assert.equal(objStudent.greeting().toString(), "Their greeting is “Hey, my name is Lamhot and I am studying WAP.");
    });

    it("Testing Student Class -> objStudent.salute()", function () {
      assert.equal( objStudent.salute().toString(), "Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
    });

    it("Testing Professor Class -> objProfessor.greeting()", function () {
      assert.equal( objProfessor.greeting().toString(), "Good day, my name is Prof Keith and I am in the Computer Science department.");
    });

    it("Testing Professor Class -> objProfessor.salute()", function () {
      assert.equal( objProfessor.salute().toString(), "Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
    });
  });

})();
