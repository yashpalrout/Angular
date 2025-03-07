"use strict";
let lname = 'John';
//lname = 10;
// you cannot reassign a already defined varaible
let yname = "Yashpal";
let newname = yname.toUpperCase();
console.log(newname + yname);
let age;
age = 23;
age = 23.5;
//age = "25";
let dob = "23";
let result = parseInt(dob);
console.log(age + result);
let isValid = true;
//console.log(isValid);//Variable 'isValid' is used before being assigned
console.log(isValid);
let empList;
empList = ["Yash", "yashu", "yashpal"];
let numList;
numList = [1, 2, 3, 4, 5];
let res = numList.filter((num) => num > 2);
let num = numList.find((num) => num = 5);
console.log(empList, numList, res, num);
