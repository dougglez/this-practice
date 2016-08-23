//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
// to avoid repititve statements, and allow the return to be able to change values based on object being referenced
  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      /* Explicit, Implicit, Default, New */

  // 3) What is the difference between call and apply?

      //Answer
//with call, you can pass in the parameters with commas
// attack.call(player1, 5, 1);
// attack.apply(player2, [10, 2]);

  // 4) What does .bind do?

      //Answer
// .bind forces 'this' to stay focused on a specified object
// var attack2 = attack.bind(player1, 5, 1);
// attack2 // returns 5 > 1 > "Firing Laser"

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
// var getUsername = function() {
//   return this.username;
// };
// var ObjConst = function (username, email, getUserName) {
//   this.username = username;
//   this.email = email;
//   this.getUsername = getUsername();
// };

var user = {
  username: 'dougglez',
  email: 'jndfg@jn.com',
  getUsername: function() {
    return this.username;
  }
};

// var user = new ObjConst ('dougglez', 'dougglez@gmail.com', getUsername());
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.
var Car = function (make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.moveCar = function () {
    this.move = 0;
    return this.move += 10;
  };
};
// NewCar.prototype.test = function () {
//   return this.make;
// };
//Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
var priusYear = getYear.call(prius);
var mustangYear = getYear.call(mustang);


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.bind(myUser)(); //Fix this

//Above you're given an object and a function. What will the getUsername function return?
//Note(no tests)
  //Answer Here
//
//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
// the root, or the window using default binding


//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
