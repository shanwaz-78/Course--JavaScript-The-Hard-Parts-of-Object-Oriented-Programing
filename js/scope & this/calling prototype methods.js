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


// Call,,we do binding with the call,apply and bind biding means we are use object's properties or methods in the function or uses functions functionality in the object call apply bind they works same but slightly different call allow us multiple array of argumnets whereas apply allow only single array of argument and bind is little tricky the bind instead of calling a function it's returns the bound function.