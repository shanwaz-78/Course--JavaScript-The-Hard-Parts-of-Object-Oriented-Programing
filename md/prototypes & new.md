## We Can also Create object and set them to the prototype of a specific object using Object.Create() technique.
- **Without Object.Create() technique**
- 
```javascript
const obj = {
  name: "Julia",
  age: 21,
};
const newObj = {
  designation: "Developer",
};

newObj.designation; // -> 'Developer'
newObj.name; // Error
```

- **With Object.Create() technique**
```javascript
const obj = {
  name: "Julia",
  age: 21,
};

const newObj = Object.create(obj);
newObj.designation = "Developer";

newObj.designation; // -> 'Developer'
newObj.name; // -> 'Julia'
```

# Explanation.

* Object.create() always creates an empty object and in this case we are creating an object using Object.create(obj) so as i said earlier this method always creates an empty object so he will stored an empty object in newObj and (Will set the entire obj as a prototype of the newObj.)

- > **_So Whenever we'll look for name in newObj first it will check in newObj is there any name property nope, so then he will go to his prototype and the prototype is obj so he will find in the obj for the name property and he able to find there and will return us_**.TT

---

## Functions are also have an object let's look at that.

```javascript
function userCreator(num) {
  return 2 * num;
}

userCreator.name = "Julia";
console.log(userCreator(10));
console.log(userCreator.name);
```
- > **_First We Declared a function Declaration userCreator and passed a placeholder then resolve the placeholder and retunred it then we are trying to dynimically add a property into a function and what would happen function have an hidden property called protype and it's also an object the object of prototype will overwrite and will set the whole new object with property of name, then we are calling the function so it will look for the fucntion and will continue his execution then we are trying to access object property so he will go the protype object and will give us the value of name_**

## [For More Click Over This](../js/prototypes%20%26%20new/)
