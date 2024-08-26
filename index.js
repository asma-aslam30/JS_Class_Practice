var str = "Governor House Assignment";

for (var i = 0; i < str.length; i++) {
  var char = str.charAt(i);
  console.log("Character: " + char);
}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var array2 = ["asma", "apple", "mango", "banana", "melon", "aslam"];

for (var i = 0; i < array.length; i++) {
  for (var j = 0; j < array2.length; j++) {
    // console.log(array[i], array2[j]);
  }
}

var arr = [
  ["asma", "aslam"],
  ["misbah", "aslam"],
  ["neha", "aslam"],
];

for (var i = 0; i < arr.length; i++) {
  //console.log(arr[i]);
  for (var j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

var ar = [1, 2, [3, 4, 5], [5], [3, 43, 23], [2, 34, 24]];

for (var i = 0; i < ar.length; i++) {
  if (Array.isArray(ar[i])) {
    for (var j = 0; j < ar[i].length; j++) {
      console.log(ar[i][j]);
    }
  } else {
    console.log(ar[i]);
  }
}

var names = ["ali", "aslam", "ahmed", "saba", "nargis", "hira", "rida", "noor"];
var fatherName = ["sheikh"];

for (var i = 0; i < names.length; i++) {
  for (var j = 0; j < fatherName.length; j++) {
    console.log(names[i] + " " + fatherName[j]);
  }
}


var names = ["nida", "nimra", "misbah"];
var fatherName = ["shafiq"];
for (var i = 0; i < names.length; i++) {
  for (var j = 0; j < fatherName.length; j++) {
    console.log(names[i] + " " + fatherName[j]);
  }
}

for(var i=0;i<5;i++){
  console.log(i);
}

for(var i=0;i<5;i++){
  break;
  console.log(i);
}
// break;  illegal ese hi kahin nh likh sakhty 

var str= "vsvav";
console.log(str[3]);