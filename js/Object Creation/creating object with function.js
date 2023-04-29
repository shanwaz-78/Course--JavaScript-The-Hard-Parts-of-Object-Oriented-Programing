function userCreator(name,score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;
  };
  return newUser;
};

const user1 = userCreator('Julli',4);
const user2 = userCreator('Phill',5);