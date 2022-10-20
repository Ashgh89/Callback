// callbacks
// synchronous vs. asynchronous
function myFirst() {
  console.log("First");
}

function mySecond() {
  console.log("Second");
}

myFirst();
mySecond();

//
// function test1() {
//   setTimeout(function () {
//     console.log("I am the first function");
//   }, 5000);
// }

function test2() {
  console.log("I am the second function");
}
// test1();
test2();

// Callback: because of async

// synchronous
console.log("React");
console.log("JS");
console.log("CSS");
// async
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

//
function test4(param) {
  console.log(`The test 4 is ${param}`);
}
// Higher order function
function test5(num1, num2, myCallback) {
  let multi = num1 * num2;
  myCallback(multi);
}

// call
test5(20, 3, test4); // the test 4 is 60

// higher order function
function example(func) {
  console.log("Just a normal text");
  func();
}

// callback
function example2() {
  console.log("I am a callback function");
}

example(example2);

//--------------------------
function myFunc(name) {
  console.log("i am calling with", name);
}
function functionWithCallback(callback) {
  console.log("I have a callback here");
  callback("functionWithCallback");
}
// call
functionWithCallback(myFunc);

//
function startTrip(param) {
  console.log(`I've been to ${param}`);
}
// startTrip("Iceland");

function startTrip2(param, callback) {
  console.log(`I've been to ${param}`);
  callback();
}

function stillInIceland() {
  console.log("But i am not anymore in Iceland");
}

startTrip2("Iceland", stillInIceland);

// why callbacks? because of async
// Higher order
function sayHello(name, callback) {
  console.log("Hi", name);
  callback();
}
function callMe() {
  console.log("I am a callback");
}
sayHello("Mila", callMe);

//-----------------------------

function hello() {
  console.log("hello world");
}
function sayHi(name) {
  console.log("hello", name);
}

setTimeout(hello, 2000);
sayHi("David");

//
function ali() {
  console.log("Ali is from Hamburg");
}
function ali2() {
  console.log("Ali2 is from Berlin");
}
// sync
ali();
ali2();

// async
function abdul() {
  setTimeout(function () {
    console.log("Abdul is from Frankfurt");
  }, 3000);
}

function abdul2() {
  console.log("Abdul is here");
}

abdul();
abdul2();

//--------------------

// Higher order function
function hello22(x) {
  console.log("Hello");
  x();
}
function func() {
  console.log("I am callback");
}
hello22(func);

//
// Higher order function
function color(callback) {
  setTimeout(() => {
    console.log(` Color 1`);
    callback();
  }, 7000);
}
function fruit() {
  console.log(`Fruit 1 `);
}

// call
// color();
// fruit();

// CALL
color(fruit);
