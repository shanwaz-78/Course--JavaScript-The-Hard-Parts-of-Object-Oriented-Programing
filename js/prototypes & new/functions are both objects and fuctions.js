function userCreator(num) {
  return 2 * num;
}

userCreator.name = "Julia";
console.log(userCreator(10));
console.log(userCreator.name);

// functions are also objects let's dig into it;
// starts with line 5, we are trying to dynimically add a property into a function and what would happen function have an hidden property called protype and it's also an object the object of prototype will overwrite and will set the whole new object with property of name, then we are calling the function so it will look for the fucntion and will continue his execution then we are trying to access object property so he will go the protype object and will give us the value of name;
