const obj = Object.create(null); // Object.create always create an empty object and we passed null just casually.

obj.name = 'Suzy';
obj.age = 19;
obj.score = 1;
obj.increment = function () {
  obj.score++;
};
console.log(obj)