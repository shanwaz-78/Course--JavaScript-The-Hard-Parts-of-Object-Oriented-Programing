function userCreator(name,score) {
  this.name = name;
  this.score = score;
}

userCreator.prototype.login = function () {
  console.log('Login')
};

const user1 = new userCreator('Phill',4);
user1.login(); // -> 'Login'