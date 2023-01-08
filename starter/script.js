// save reference to important DOM elements
var timeDisplayed = $("#currentDay");

// create the function that displays the current time
function displayTime() {
  var currentDate = moment().format("dddd, Do MMMM");
  timeDisplayed.text(currentDate);
}
setInterval(displayTime, 1000);


function hourTracker() {
let currentHour = moment().format("HH");

        // loop over time blocks
        $(".time-block").each(function () {
          var blockHour = parseInt($(this).attr("id").split("hour")[1]);
          console.log( blockHour, currentHour)

          //check if we've moved past this time
          if (blockHour < currentHour) {
              $(this).addClass("past");
              $(this).removeClass("future");
              $(this).removeClass("present");
          }
          else if (blockHour === currentHour) {
              $(this).removeClass("past");
              $(this).addClass("present");
              $(this).removeClass("future");
          }
          else {
              $(this).removeClass("present");
              $(this).removeClass("past");
              $(this).addClass("future");
          }
      })
  }
  hourTracker();
})



$("#textarea-hour").css({
  "background-color": "yellow",
  border: "2px solid white",
});

$("btn saveBtn").on("click", function () {
  localStorage.setItem("#textarea-hour", m9);
  let nineAmTextAreaValue = localStorage.getItem("#textarea-hour");
  textBox.text(nineAmTextAreaValue);
});

// localStorage.setItem("9am-input",m9)
// localStorage.setItem("10am-input",m10)
// localStorage.setItem("11am-input",m11)
// localStorage.setItem("12pm-input",m12)
// localStorage.setItem("1pm-input",m1)
// localStorage.setItem("2pm-input",m2)
// localStorage.setItem("3pm-input",m3)
// localStorage.setItem("4pm-input",m4)
// localStorage.setItem("5pm-input",m5)

//Calendar showing background colors based on current time
//give each div a property called data-time and make value '9' etc.
// if data-time < moment.js time - show as grey
// if data-time = moment.js time - show as red
// if data-time > moment.js time - show as green
