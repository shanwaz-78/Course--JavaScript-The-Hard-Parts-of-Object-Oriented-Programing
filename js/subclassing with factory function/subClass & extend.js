class parent {
  constructor(name,score){
    this.name = name;
    this.score = score;
  };
  login(){ // Login will automatically set to the prototype of the parent.
    console.log('Login');
  };
};

constuser2  = new parent('Phill',3);

class subClass extends parent { // whenever i will use the extend keyword the parent class will be set automatically of the subClass.
  constructor(name,score,age){
    super(name,score,age) // whenever we want to use the same constructor method we must use super.
    this.age = age; 
  };
}
const user3 = new subClass('Suzzy',4,21);
console.log(user3.age)  