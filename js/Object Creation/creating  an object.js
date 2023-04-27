// Supponse we creating a quiz game and we have to store users data we can use objects;

const user = {
  name : 'Phill',
  score : 4,
  increment : function () {
  return ++user.score; // In (.) Dot we are saying apply that functionality to that object user;
  },
};
console.log(user.increment());