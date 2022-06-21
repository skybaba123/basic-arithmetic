const Fn = prompt("First Number");
const op = prompt("use + - / *");
const Sn = prompt("second number");

if (op === "+") {
  alert(+Fn + +Sn);
} else if (op === "-") {
  alert(+Fn - +Sn);
} else if (op === "/") {
  alert(+Fn / +Sn);
} else if (op === "*") {
  alert(+Fn * +Sn);
} else {
  alert(`You entered an invalid operator.
  use + - / * `);
}
