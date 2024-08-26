// var fruits="AppLe";
// console.log(fruits.toLocaleLowerCase());

// ===================assignment addition,subtraction,multiplication and division

// var a = 100;
// console.log((a *= 2));
// console.log((a -= 20));
// console.log((a += 300));
// console.log((a /= 5));
// console.log(a);
// ===========================string methods========================================

// var userinput = prompt("Enter Something");
// console.log(userinput.toLocaleLowerCase());

// var userinput = prompt("Enter Something");
// console.log(userinput.toLocaleUpperCase());

// var fruit = ["asma", "hira", "rida", "bano"];
// console.log(fruit[2].toUpperCase());

// =============================ATM============================================

// var myBalance = 4000;
// var amount = prompt("enter amount you want to witdraw");

// if (amount > myBalance) {
//   console.log("Insufficient balance!");
// } else {
//   myBalance -= amount;
//   console.log(`Withdrawal successful! New balance: ${myBalance}`);
//   console.log("Thank you for banking with us!");
// }
// var deamount = prompt("enter amount you want to deposite");

// if (deamount > myBalance) {
//   console.log("Insufficient balance!");
// } else {
//   myBalance -= deamount;
//   console.log(`Deposite successful! New balance: ${myBalance}`);
//   console.log("Thank you for banking with us!");
// }
// ===========================palindrom==============================================

// var str = prompt("enter wordphrh ");
// var reversedStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   reversedStr += str[i];
// }
// if (reversedStr === str) {
//   alert("Its palindrom");
// } else {
//   alert("Its not a palindrom word ");
// }
// ==========================Word Counter =============================================

// const inputText = prompt("Enter anything");

// let count = 0;
// let inWord = false;

// for (let i = 0; i < inputText.length; i++) {
//   const char = inputText[i];
//   const isWhitespace = char === " " || char === "\n" || char === "\t";

//   if (isWhitespace && inWord) {
//     count++;
//     inWord = false;
//   } else if (!isWhitespace && !inWord) {
//     inWord = true;
//   }
// }

// Add 1 for the last word if it's not followed by whitespace
// if (inWord) {
//   count++;
// }

// console.log("Word count:", count);

// ===========================Capital every letter of word============================

// var fName = "asma aslam";
// var result1 = "";

// for (var i = 0; i < fName.length; i++) {
//   if (i == 0 || fName[i - 1] == " ") {
//     result1 += fName[i].toUpperCase();
//   } else {
//     result1 += fName[i].toLowerCase();
//   }
// }

// console.log(result1);


// ==========================alternative==========================================

// var fName = "asma aslam";
// var result1 = "";
// var flag = true; 

// for (var i = 0; i < fName.length; i++) {
//   if (flag) {
//     result1 += fName[i].toUpperCase();
//     flag = false;  
//   } else {
//     result1 += fName[i].toLowerCase();
//   }

//   if (fName[i] == ' ') {
//     flag = true;  
//   }
// }

// console.log(result1);


// ==========================for sentence==========================================
// let text =
//   "this is a sentence. this is another sentence. here is one more sentence.";

// let sentences = text.split(". ");

// for (let i = 0; i < sentences.length; i++) {
//   if (sentences[i].length > 0) {
//     sentences[i] = sentences[i][0].toUpperCase() + sentences[i].slice(1);
//   }
// }

// let result = sentences.join(". ");

// console.log(result);

// use slice for extracting something
// =============================================================================

// var sentence1 = "hi my name is asma";
// for (var i = 0; i < sentence1.length; i++) {
//   if (sentence1.slice(i, i + 4) === "asma") {
//     console.log("Found");
//   } 
// }

// var sentence1 = "hi my name is asma";
// var username = prompt("Enter your word ", "asma");
// for (var i = 0; i < sentence1.length; i++) {
//   if (sentence1.slice(i, i + username.length) === username) {
//     console.log("Found");
//   }
// }

// ==================================================================================
// var sentence1= "hi my name is asma";
// var user5 = prompt();
// if (user5.indexOf(user5) != -1) {
//   console.log("Found");
// } else {
//   console.log("Not Found");
// }

//  indexof or lastindexof ko agr kch  na mily tw output dega (-1)

// ====================== repalce something===============================
// var words = "My School is Best";
// console.log(words.replace("school", "University"));

// // ============================replace all Schools
// var words = "My School is Best School";
// console.log(words.replaceAll("school", "University"));

// console.log(words.charAt(4));

// ==========================WORD GUESSING GAME===============================
// var word2 = ["asma", "van", "pen"];
// var secWord = word2[1];
// var playerInt = prompt("Guess the word");
// var flag = false;

// for (var i = 0; i < words.length; i++) {
  // if (playerInt === word2[i]) {          ========== for wordddd
//   if (playerInt === secWord) {
//     flag = true;
//     break;
//   }
// }

// if (flag) {
//   console.log("Win");
// } else {
//   console.log("Try again! Looserrrr");
// }

// =========================Rounding Numbers====================================

// var mis = Math.round(2.50);
// console.log(mis);
// var miss = Math.floor(2.60);
// console.log(miss);

// console.log(Math.random());

// var currentAge = prompt("Enter your age."); 
// var qualifyingAge = parseFloat (currentAge) + 1;
// console.log(qualifyingAge);

// var integerString = "24"
// console.log(integerString + 1); 
// var num = Number (integerString);
// console.log(num +1);
// var numberAsNumber = 1234; 
// var numberAsString = numberAsNumber.toString() ;
// console.log(numberAsNumber);


// var floatingNumString = "24.9876"; 
// var num = Number (floatingNumString);
// console.log(floatingNumString)

// var integerString = "24" 
// var num = Number (integerString);
// console.log(integerString)

// var myFractional = parseFloat ("1.9999");
// console.log(myFractional)

// var myFractional = parseInt ("1.9999");
// console.log(myFractional)

// var scoreAvg = Math.floor (.999999);
// console.log(scoreAvg)
// var scoreAvg = Math.ceil (.00000000000000001);
// console.log(scoreAvg)

// var scoreAvg = Math.round (.999999);
// console.log(scoreAvg)

// var scoreAvg = Math.round (1.7999999);
// console.log(scoreAvg)
// var scoreAvg = Math.round (1.5000);
// console.log(scoreAvg)


// var now= new Date();            //Date is a object      string k methods work nh karyn gy
// console.log(now);

// var dateString =now.toString();  // date string is a string
// console.log(dateString);

// var day = now.getDay()
// console.log(day);   //returnn index number



// for (let i = 1; i <= 100; i++) {
//   let suffix;

//   if (i >= 11 && i <= 13) {
//     suffix = "th";
//   } else {
//     switch (i % 10) {
//       case 1:
//         suffix = "st";
//         break;
//       case 2:
//         suffix = "nd";
//         break;
//       case 3:
//         suffix = "rd";
//         break;
//       default:
//         suffix = "th";
//         break;
//     }
//   }

//   console.log(`${i}${suffix}`);
// }


// var time=now.getTime();
// console.log(time);  //returnn date number

//===========================Chapter 31====================================

// var d = new Date();
// var currentMonth = d.getMonth();
// console.log(currentMonth)

// var dayOfMonth = d.getDate();
// console.log(currentMonth)

// var currYr = d.getFullYear();
// console.log(currYr)

// var currentHrs = d.getHours();
// console.log(currentHrs)

// var currMins = d.getMinutes();
// console.log(currMins)

// var currSecs = d.getSeconds()
// console.log(currSecs)

// var currMills = d.getMilliseconds();
// console.log(currMills)

// var millsSince = d.getTime();
// console.log(millsSince)

// var today = new Date();
// console.log(today)
// =============================new==========================
// var doomsday = new Date("June 30, 2035");
// console.log(doomsday)


// var msToday = today.getTime();
// var msDoomsday = doomsday.getTime();
// console.log(msToday)
// console.log(msDoomsday)

// var msDiff = msDoomsday - msToday;
// var dDiff = msDiff / (1000 * 60 * 60 * 24);
// dDiff = Math.floor(dDiff);
// console.log(dDiff);

// ======================alternative=============================
// var msDiff = new Date("June 30, 2035").getTime() - new Date().getTime();
// var daysTillDoom = Math.floor(msDiff / (1000 * 60 * 60 * 24));
// console.log(daysTillDoom)


// ======================get date=====================
// var da = new Date();
// console.log("Initial Date: " + da.toString());

// da.setMonth(8);
// console.log("After setting month to September: " + da.toString());

// da.setDate(22);
// console.log("After setting day of month to 22: " + da.toString());

// da.setFullYear(2098);
// console.log("After setting year to 2098: " + da.toString());

// da.setHours(24);
// console.log("After setting hours to 24: " + da.toString());

// da.setMinutes(60);
// console.log("After setting minutes to 60: " + da.toString());

// da.setSeconds(60);
// console.log("After setting seconds to 60: " + da.toString());

// da.setMilliseconds(0);
// console.log("After setting milliseconds to 0: " + da.toString());

// da.setTime(76);
// console.log("After setting time to 76 milliseconds since Unix Epoch: " + da.toString());

// ==============================Birthday Date set ===========================

// var birthdayDate = new Date();
// console.log("Initial Date: " + birthdayDate.toString());

// // Set a specific date for the meeting
// birthdayDate.setFullYear(2023);
// birthdayDate.setMonth(8); // September (months are 0-11)
// birthdayDate.setDate(30); // 30th
// birthdayDate.setHours(12); // 12 PM
// birthdayDate.setMinutes(30); // 30 minutes past the hour
// birthdayDate.setSeconds(0); // 0 seconds
// birthdayDate.setMilliseconds(0); // 0 milliseconds
// console.log("Birthday Date: " + birthdayDate.toString());

// // Retrieve and display each component of the meeting date and time
// var year = birthdayDate.getFullYear();
// var month = birthdayDate.getMonth() + 1; // Adding 1 to month as it is zero-indexed
// var day = birthdayDate.getDate();
// var hours = birthdayDate.getHours();
// var minutes = birthdayDate.getMinutes();
// var seconds = birthdayDate.getSeconds();
// var milliseconds = birthdayDate.getMilliseconds();
// var dayOfWeek = birthdayDate.getDay(); // Sunday - Saturday : 0 - 6

// console.log("Year: " + year);
// console.log("Month: " + month);
// console.log("Day: " + day);
// console.log("Hours: " + hours);
// console.log("Minutes: " + minutes);
// console.log("Seconds: " + seconds);
// console.log("Milliseconds: " + milliseconds);
// console.log("Day of Week: " + dayOfWeek); // 0 is Sunday, 1 is Monday, and so on

// // Get the time in milliseconds  
// var timeSinceEpoch = birthdayDate.getTime();
// console.log("Milliseconds: " + timeSinceEpoch);

// var meeting = {
//   year: year,
//   month: month,
//   day: day,
//   hours: hours,
//   minutes: minutes,
//   seconds: seconds,
//   milliseconds: milliseconds,
//   dayOfWeek: dayOfWeek,
// };

// console.log("\nMeeting Object:", meeting);

// // Modify the meeting date to add 7 days
// birthdayDate.setDate(birthdayDate.getDate() + 7);
// console.log("Birthday Date after adding 7 days: " + birthdayDate.toString());

// // Modify the meeting time to add 1 hour
// birthdayDate.setHours(birthdayDate.getHours() + 1);
// console.log("Birthday Date after adding 1 hour: " + birthdayDate.toString());



// ============================FUNCTION============================================

// function addTwoNumber(num1, num2) {
//   var result = parseInt(num1) + parseInt(num2);
//   console.log(result);
// }

// addTwoNumber(23, 54);
// addTwoNumber(4, 6);
// addTwoNumber(25, 98);
// addTwoNumber(2.00, 20.98);
// addTwoNumber(2, 5);
// addTwoNumber(3, 4);
// addTwoNumber(233, 354);
// addTwoNumber(234, 544);
// addTwoNumber(23.65, 54.87);

// function addition(){
//   var frs = +prompt("Enter first number ")
//   var sec = +prompt("Enter second number ")
//   result= frs+sec;
//   console.log(result)
// }
// addition()
// =====================================================================
// var array =["apple","mango","banana"];
// function myUnshift(a){
//   array[0] = a; 
// }
// myUnshift("peach")
// console.log(array)

// function myFun( one,two){
//   var fruitName = one + " " + two;
//   console.log(fruitName)

// }
// myFun("water","melon")

// function myFun(one, two = 3) {
//   var fruitName = one + " " + two;
//   console.log(fruitName);
// }

// var use1 = +prompt("Enter first number:");
// var use2 = +prompt("Enter second number:");

// // Call myFun with both use1 and use2
// myFun(use1, use2);
// function myFun(one, two = 3) {
//   var fruitName = one + two;
//   console.log(fruitName);
// }

// myFun(5); // Output: "5 3"
// myFun(5, 8); // Output: "5 8"
// myFun(5, +prompt("Enter a number"));  


// function myf (a,b){
//   var sum= a+b;
//   return sum      // return m modification hoty h 
//   // console.log(sum) extra addition nh hota h 

// }
// console.log(myf(4,5) + 5)



// ==================  ACTION EVENT LISTENER=========================================
// oop 
// event driven
// functional based
function color(){
  // document.writeln("hello asma")
  var box= document.getElementById("box")
  // document.write("box")
  box.style.backgroundColor="red"
  box.innerText="Hi guyz"
}
// function imageChange(event

// ){
//   var img= document.getElementById("image")
//   img.src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg"
//   console.log(event.target.src);

// }
// function imageChange2(){
//   var img= document.getElementById("image")
// img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_FWF2judaujT30K9sMf-tZFhMWpgP6xCemw&s";
// }
function getImage(){
  var file= document.getElementById('')
  // console.log(file.files[0]);
  
  // console.log(URL.createObjectURL(file.files[0]))
  Image.src=URL.createObjectURL(file.files[0])
  Image.style.display = 'block'
}
// url method==============create fake url ======= if file type is pic











