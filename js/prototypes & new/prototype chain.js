// const obj = {
//   name: "Phill",
//   age: 22,
//   sayHello(){
//     console.log('Hello');
//   }
// };

// const creator = Object.create(obj);
// creator.name = "Shanwaz";
// creator.designation = "Developer";

// console.log(creator.sayHello());

// Let's dig into it. first we declare a constant creator and using Object.create() we are creating an Object(obj) when we create an object using Object.create() he will always returns us an empty object and he will set the obj as a prototype of the creator and then we dynimically decalred properties into creator then we are looking for creator.age which is not defind in creator first it will find in creator object he couldn't find then he will go to his prototype which is are obj and in the obj he found it so will return us the age from it's protoype.

function userCreator(name, score) {
  const newUser = Object.create(userFunction);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunction = {
  increment: function () {
    console.log("Hello");
  },
};
const user1 = userCreator("Suzy", 21);
console.log(user1); // newUser;
user1.increment(); // -> Hello, user1 doesn't have property of increment but he still accesble because of Object.create() technique;
