function Biscuitmold() {
  this.name = "prince";
  this.shape = "circle";
  this.color = "brown";
}
console.log(new Biscuitmold());

function Student(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
}
var student1 = new Student("asma", 20, "aslamasma486@gmail.com");
var student2 = new Student("misbah", 40, "misbahasma486@gmail.com");
var student3 = new Student("hira", 20, "aslamasma486@gmail.com");
var student4 = new Student("rida", 20, "aslamasma486@gmail.com");
var student5 = new Student("aqsa", 20, "aslamasma486@gmail.com");
var student6 = new Student("noor", 20, "aslamasma486@gmail.com");
var student7 = new Student("komal", 20, "aslamasma486@gmail.com");
var student8 = new Student("ali", 20, "aslamasma486@gmail.com");
console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);
console.log(student5);
console.log(student6);
console.log(student7);
console.log(student8);

//  ===================constructor methods=====================

function Obj(name, number) {
  this.name = name;
  this.number = number;
  this.gettinginfo = function () {
    console.log(this.name, this.number);
  };
}

var obj1 = new Obj("asma", 123456789);
var obj2 = new Obj("misbah", 987654321);
var obj3 = new Obj("hira", 123456789);

obj1.gettinginfo();
obj2.gettinginfo();
obj3.gettinginfo();

function Board(stName) {
  this.stName = stName;
  this.allDetails = function () {
    return this.stName;
  };
}
var board1 = new Board("asma");
// console.log(board1.allDetails());
console.log(board1);
//  ====================Prototypes==============================

function Board(stName) {
    this.stName = stName;  // Initializes the stName property
  }
  
  Board.prototype.allDetails = function () {
    return this.stName;  // Returns the stName property
  };
  
  var board2 = new Board("asma");  // Creates a new instance of Board
  console.log(board2.allDetails());  // Calls allDetails method and logs the output
  

  



