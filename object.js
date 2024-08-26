var fruit = {
  name: "Watermelon",
  color: "Green",
  taste: "Sweet",
  price: 5.99,
  quantity: 10,
};

console.log(fruit);
console.log(fruit.price); // dot notation
console.log(fruit["price"]); // bracket notation

var animal = {
  name: "Lion",
  age: 5,
  color: "Golden",
  sound: "Roar",
  food: ["meat", "water"],
  address: {
    street: "Main",
    city: "New York",
    state: "NY",
  },
  quantity: "10",
};
console.log(animal);
console.log(animal.sound); // dot notation
console.log(animal["food"]); //


bracket notation
console.log(animal["food"[1]]); // bracket notation
console.log(animal["address"]["city"]); // bracket notation
console.log(animal.address.street);

// how to update the property of object
animal.address.city = "Campus";
console.log(animal["address"]["city"]); // bracket notation

//  how to add property or value

animal.hands = {};
console.log(animal);
animal.hands.left = 1;
animal.hands.right = 1;
console.log(animal);
console.log(animal.quantity);

animal.food.push("Wheat", "human");
console.log(animal.food);
animal.food.pop();
console.log(animal.food);
console.log(animal.color.toUpperCase());

// how to delete the property
delete animal.food;
console.log(animal);

// how to chack the position the value is present or not

console.log("name" in fruit);
console.log("food" in fruit);

// =========================Chapter # 71(Object Methods)===============================

var student = {
  name: "John",
  age: 20,
  School: "Rose Petal",
  getSchoolName: function () {
    return this.School;
  },
  getAge: function () {
    console.log("age");
  },
};
console.log(student.getSchoolName());
student.getAge();

//  ================THIS KEYWORD===========================

console.log(this); //this keyword ko agr kch na mily tw return kary ga undefined agr blank page p print karwae gy this ko tw return kary ga window k obj ko

var obj = {
  name: "John",
  getSchoolName: function () {
    // return object jahan s call kar rhy hyn
    console.log(this);
    console.log(this.name);
  },
};
obj.getSchoolName(); // this keyword object ko return kary ga
// onclick m jis cheez ko target karyn gy usy ko return kary ga

// ========================FOR IN LOOP ==============================
var student = {
  name: "John",
  age: 20,
  School: "Rose Petal",
  favColor: "Green",
  FavFruit: "Mango",
  BestFriend: "Micheal",
  FatherName: "Naich",
  MotherName: "Nalini",
  Class: "Intermediate",
  RollNo: {
    RollNo: 10,
    Batch:2
  },
  Address: { // Fixed the typo here
    city: "Karachi",
    country: "Pakistan", 
    street:"07"
  }
};

for (var key in student) {
  if (typeof student[key] === "object") { // Check if the value is an object
    for (var innerKey in student[key]) {
      console.log(innerKey + " : " + student[key][innerKey]); // Access nested object properties
    }
  } else {
    console.log(key + " : " + student[key]); // Access non-object properties
  }
}




