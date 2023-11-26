// Extend keyword does the 2 major things 1. it will extend the all properties and metods from parent class. 2. he will create the __proto__ and link that subclass to the parentclass's prototype object.

class scStudent {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  login() {
    console.log("Login Successful");
  }
}

const user1 = new scStudent("Phill", 2);
user1.login();

class collegeStudent extends scStudent {
  constructor(paidname, paiduser, accountbalance) {
    super(accountbalance); // in the previous the new keyword automatically set the the __proto__ and give the scStudents's prototype object refference to the collenge student class's constructor but but but now the super keyword will set the __proto__ for the collegeStudent earlier he setted the __proto__ for constructur but now he will set for the whole class and then pass him to the whole class of scStudetn's refference then the super keyword are (calling.) and he had the reffernce to the scStudent so then he will make new execution context. and in that execution context he will store first the labels name,score
  }
  showBalance() {
    console.log(this.accountbalance++);
  }
}

const user2 = new collegeStudent("Julia", "jul", 2332);
user2.showBalance();
