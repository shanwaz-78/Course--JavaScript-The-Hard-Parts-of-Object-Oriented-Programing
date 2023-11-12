class parent {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  login() {
    // Login will automatically set to the prototype of the parent.
    console.log("Login");
  }
}
const user2 = new parent("Phill", 3);

class subClass extends parent {
  // whenever i will use the extend keyword the parent class will be set automatically of the subClass.
  constructor(name, score, age) {
    super(name, score, age); // whenever we want to use the same constructor method we must use super.
    this.age = age;
  }
}
const user3 = new subClass("Suzzy", 4, 21);
console.log(user3.age);
// Seprate instance. from all.
class scStudent {
  constructor(name) {
    this._name = name;
  }
  implement() {
    console.log("name is " + scStudent.capitalize(this.name));
  }
  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1); // the static runs only once and it runs only once.
  }
  get name() {
    // getters
    return this._name;
  }
  // also we can make getter and setter private.
  set name(newName) {
    // setters
    this._name = newName;
  }
}

const user5 = new scStudent("Phill");
user5.implement();
user5.name = "Suzy";
console.log(user5.name);

// higher order functions.
function userCreator(arr, instructions) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(instructions(arr[i]));
  }
  return output;
}

function multiplyBy2(input) {
  return 2 * input;
}
const array = [1, 2, 3];
const user = userCreator(array, multiplyBy2);
console.log(user);
