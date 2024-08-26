//  make a object
var obj = {
    names: "asma",
    rollno: "56456"
};
// convert into json format
console.log(JSON.stringify(obj)); // Correctly converts the object to JSON string

localStorage.setItem("name", "hira");
localStorage.clear(); // Clears all localStorage

console.log(localStorage.getItem("name")); // Will return null since localStorage is cleared

localStorage.setItem("name", "hira");
localStorage.setItem("name1", "hiraaaaa");
localStorage.setItem("name2", "asma");
localStorage.setItem("name3", "aslam");
localStorage.setItem("name4", "huma");
//   remove 1 attribute write only key value
localStorage.removeItem("name2")

var studentsObj = { name: "asma", email: "aslamasma986@gmail.com" };
localStorage.setItem("Students", JSON.stringify(studentsObj)); // Store object as a JSON string

var loc = localStorage.getItem("Students"); // Retrieve the stored JSON string
console.log(loc); // Outputs the JSON string of the students object

//   add multiple value simultaneously
const items = ['watermelon', 'ananas', 'peach', 'papaya', 'pineapple', 'orange', 'grapes', 'banana', 'mango', 'apple'];

// Initialize index for while loop
let index = 0;

// Using a while loop to store each element in localStorage
while (index < items.length) {
    // Set each element in localStorage with a unique key
    localStorage.setItem('item' + (index + 1), items[index]);
    // Increment the index
    index++;
}

// Verify by retrieving and logging the items from localStorage
index = 0; // Reset index
while (index < items.length) {
    console.log(localStorage.getItem('item' + (index + 1))); // Output each stored item
    index++;
}
