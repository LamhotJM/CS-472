let hamster={
  stomach: [],
  eat(food)
  {
    this.stomach.push(food);
  }

};

let speedy={
  __proto__:hamster,
  stomach: []

};

let lazy={
  __proto__:hamster,
  stomach:[]
};

speedy.eat("apple");
alert(speedy.stomach);

alert(lazy.stomach);


