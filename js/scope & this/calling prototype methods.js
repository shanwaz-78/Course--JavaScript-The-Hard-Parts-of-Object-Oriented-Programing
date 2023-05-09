function userCreate(name, score) {
  this.name = name;
  this.score = score;
}

userCreate.prototype.login = function () {
  this.score++;
};

const user1 = new userCreate("Phill", 4);
user1.login(); // -> 'Login'.

// we called login() function he will make new execution context in his execution cotext first thing will store this.score++ in the code execution face then he will store store in local memory the object user1 with key of this. and then in code execution he will insert the user1.score++ and then he will in his own execution context he could'nt find then he will be go to the user1 and he will find it there he couldn't able to find there and he will be look at the __proto__ and the __proto__ is the refference to the prototype object then he will look in the prototype object and he able to find score there and then he will increment it and return us.


function greetingMaker(x) {
  return function (a) {
    return a.map(elem => elem * x);
  }
}
const first = [2,3,4];
const greeting = greetingMaker(15);
console.log(greeting(first))