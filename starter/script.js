// save reference to important DOM elements
var timeDisplayed = $("#currentDay");

// create the function that displays the current time
var currentDate = moment().format("dddd, Do MMMM");
timeDisplayed.text(currentDate);
// setInterval(function () {
//   currentDate = moment().format("dddd, Do MMMM");
//   timeDisplayed.text(currentDate);
// }, 1000);

$("#textarea-hour").css({
  "background-color": "yellow",
  border: "2px solid red",
});

$("#text-area-9am").css({ "background-color": "red" });

$("btn saveBtn").on("click", function () {
  localStorage.setItem("9am-text", m9);
  let nineAmTextAreaValue = localStorage.getItem("9am-text");
  textBox.text(nineAmTextAreaValue);
});

// localStorage.setItem("9am-text",m9)
// localStorage.setItem("10am-text",m10)
// localStorage.setItem("11am-text",m11)
// localStorage.setItem("12pm-text",m12)
// localStorage.setItem("1pm-text",m1)
// localStorage.setItem("2pm-text",m2)
// localStorage.setItem("3pm-text",m3)
// localStorage.setItem("4pm-text",m4)
// localStorage.setItem("5pm-text",m5)
