(function () {
  "use strict";
  // Working with prototype
  /**
   *
   */
  function workingWithPrototype() {
    console.log("Start: workingWithPrototype()");
    let animal = {
      jumps: null
    };

    let rabbit = {
      __proto__: animal,
      jumps: true
    };

    console.log(rabbit.jumps);// true
    delete rabbit.jumps;
    console.log(rabbit.jumps);// null
    delete animal.jumps;
    console.log(rabbit.jumps);// undefined

    console.log("End of : workingWithPrototype()");

  }

  function searchingAlgorithm() {
    console.log("Start : searchingAlgorithm() ");
    let head = {
      glasses: 1
    };

    let table = {
      pen: 3,
      __proto__: head
    };

    let bed = {
      sheet: 1,
      pillow: 2,
      __proto__: table
    };

    let pockets = {
      money: 2000,
      __proto__: bed
    };

    console.log(pockets.pen);
    console.log(bed.glasses);
    console.log(table.money);
    console.log("End of: searchingAlgorithm() ");

  }

  function whereItWrites() {
    console.log(" Start whereItWrites");
    let animal = {
      eat() {
        this.full = true;
      }
    };

    let rabbit = {
      __proto__: animal
    };

    rabbit.eat();

    console.log(animal.full);
    console.log(rabbit.full);

    /*
    We have rabbit inheriting from animal.

    If we call rabbit.eat(), which object receives the full property: animal or rabbit?

    The answer: rabbit.

    That’s because this is an object before the dot, so rabbit.eat() modifies rabbit.

    Property lookup and execution are two different things.

    The method rabbit.eat is first found in the prototype, then executed with this=rabbit
    * */
    console.log("end of whereItWrites");
  }

  function WhyTwoHamstersAreFull() {
    console.log("start WhyTwoHamstersAreFull()")
    let hamster = {
      stomach: [],
      eat(food) {
        this.stomach.push(food);
      }

    };

    let speedy = {
      __proto__: hamster,
      stomach: []

    };

    let lazy = {
      __proto__: hamster,
      stomach: []
    };

    speedy.eat("apple");
    console.log(speedy.stomach);

    console.log(lazy.stomach);
    console.log("end ofWhyTwoHamstersAreFull()");

  }

  /**
   *
   */
  function changePrototypePage31() {
    console.log("start : changePrototypePage31()")

    function Rabbit() {
    }

    Rabbit.prototype = {
      eats: true
    };

    let rabbit = new Rabbit();
    delete Rabbit.prototype.eats;//changing prototype value through delete value
    console.log(rabbit.eats);

    console.log("End changePrototypePage31()");

  }


  function deferPage39() {

    console.log("Start deferPage39()");
    Function.prototype.defer = function (ms) {

      setInterval(function () {
        console.log("Hello");
      }, ms);


    };

    function func() {
      console.log("Defer testing");

    }

    //Add method f.defer(ms) to functions

    func.defer(3000);
    console.log("end of deferPage39()");
  }

  function decoratingPage39() {
    console.log("start decoratingPage39()");
    Function.prototype.defer = function (ms) {
      let f = this;
      return function (...args) {
        setInterval(() => f.apply(this, args), ms);
      };
    };

    let interfaceVar = {
      color: "Red",
      decorate() {
        console.log(this.color);
      }
    };
    interfaceVar.decorate = interfaceVar.decorate.defer(3000);
    interfaceVar.decorate();
    console.log("end of decoratingPage39()");

  }

  workingWithPrototype();
  searchingAlgorithm();
  whereItWrites();
  WhyTwoHamstersAreFull();
  changePrototypePage31();
  deferPage39();
  decoratingPage39();
})();
