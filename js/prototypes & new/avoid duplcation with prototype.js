const functionStore = {
  increment: function () {
    this.score++;
  },
  increment: function () {
    console.log("you're loggeding");
  },
};

// const user1 = {
//   name: "Phil",
//   score: 4,
// };

// user1.name; // name is a proprerty of user1 object
// user1.increment; // Error because the increment property doesn't have increment.

  // we can make the prototype link between them. 1. solution

// user1.__proto__ = {
//   increment: function () {
//     console.log("you're loggeding");
//   },
// }


// user1.name; // Done 
// user1.increment(); // Done 

  // But we should use a technique to make a prototype link
   // 2. Solution.
const user1 = Object.create(functionStore); // Object.create() always always returns us an empty object. and the functionStore has bond with user1 we dont know how but there's a bong (will sentence said).
user1.name = 'Phill';
user1.age = 20;

console.log(user1.age) // -> 20;
console.log(user1.increment()) // "You're loggending", user1 doesn't have increment but he stil accesible he's accesing it from funtionStore prototype.
// we can make the protoype link using Object.create() 