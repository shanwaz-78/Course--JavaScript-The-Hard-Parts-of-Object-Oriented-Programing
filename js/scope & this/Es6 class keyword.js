function userCreate(name, score) {
  this.name = name;
  this.score = score;
}

userCreate.prototype.login = function () {
  this.score++;
};
const user1 = new userCreate("Phill", 4);
user1.login(); // -> 'Login'

    // There is noooo change in the syntactic sugar(under the hood working.) between this function and the class.
class userCreate {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  };
  login() {
    console.log(this.score++); // the login will automatically store in the prototype of userCreate
  };
};

const user2 = new userCreate('Phill',4);
user2.login();
