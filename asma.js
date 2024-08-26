 // Prompt user for marks
var English = parseFloat(prompt("Enter your English marks......."));
var Urdu = parseFloat(prompt("Enter your Urdu marks......."));
var MathMarks = parseFloat(prompt("Enter your Math marks.......")); // Changed variable name to avoid conflict

// Total marks calculation
var totalmarks = 300;
var marksObtained = English + Urdu + MathMarks;
var percentage = (marksObtained / totalmarks) * 100;

// Display marksheet
document.write("<h2>MARKS SHEET</h2><br><br><br>");
document.write("ENGLISH = " + English + "<br>");
document.write("URDU = " + Urdu + "<br>");
document.write("MATH = " + MathMarks + "<br><br>"); // Changed variable name to avoid conflict
document.write("TOTAL MARKS = " + marksObtained + "<br>");
document.write("PERCENTAGE = " + Math.round(percentage));
