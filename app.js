// var ball = document.createElement("div");
// ball.style.width = "50px";
// ball.style.height = "50px";
// ball.style.backgroundColor = "red";
// ball.style.borderRadius = "50%";
// ball.style.position = "absolute";
// ball.style.top = "0px";
// ball.style.left = "0px";
// document.body.appendChild(ball);
// var x = 0;
// var y = 0;
// var xDirection = 1;
// var yDirection = 1;
// var xSpeed = 1;
// var ySpeed = 1;
// function moveBall() {
//   x += xDirection * xSpeed;
//   y += yDirection * ySpeed;
//   ball.style.left = x + "px";
//   ball.style.top = y + "px";
//   if (x > window.innerWidth - 50) {
//     xDirection = -1;
//   }
//   if (y > window.innerHeight - 50) {
//     yDirection = -1;
//   }
//   if (x < 0) {
//     xDirection = 1;
//   }
//   if (y < 0) {
//     yDirection = 1;
//   }
// }
// setInterval(moveBall, 10);

// function findLargestNumber(num1, num2, num3) {
//   if (num1 > num2 && num1 > num3) {
//     return num1;
//   } else if (num2 > num1 && num2 > num3) {
//     return num2;
//   } else {
//     return num3;
//   }
// }

// var h1 = document.querySelector("h1");

// var numbers = prompt("Sonlarni kiriting");

// // var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var sum = 0;
// for (var i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// h1.textContent = `${sum}`;
// console.log(sum);

var n = prompt("Enter a number");
var d = [];
var k = 0;
var l = 0;
var m = 0;
var c = [];
var b = [];
var i = 0;
var j = 0;
var a = 0;
var s = 0;
var u = 0;
var p = 0;
var q = 0;
var r = 0;
var t = 0;
for (i = 0; i < n.length; i++) {
  d[i] = n.charAt(i);
}
for (i = 0; i < n.length; i++) {
  if (d[i] == d[i].toUpperCase()) {
    c[k] = d[i];
    k++;
  } else {
    b[l] = d[i];
    l++;
  }
}
for (i = 0; i < k; i++) {
  document.write(c[i] + "<br>");
}
for (i = 0; i < l; i++) {
  document.write(b[i] + "<br>");
}
