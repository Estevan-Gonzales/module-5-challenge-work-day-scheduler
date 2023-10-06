//Set current date
//var today = dayjs().format("dddd, MMMM DD, YYYY");
var today = dayjs();
var now = dayjs().format("HH:mm:ss");
timeRelative = []
hours = '00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23'.split(',');
for (var i = 0; i < hours.length; i++) {
  hourToAdd = hours[i] + ":00:00";
  if (dayjs().format("HH:00:00") == hourToAdd) {
    timeRelative.push("now");
  } else if (hourToAdd < now) {
    timeRelative.push("past");
  } else {
    timeRelative.push("future");
  }
}

var mainViewEl = document.getElementById("main-view");



for (i = 0; i < timeRelative.length; i++) {
  if (timeRelative[i] == "past") {
    var pastEl = document.createElement('div');
    var pastElInnerDiv = document.createElement('div');
    pastEl.setAttribute('class', 'row time-block present');
    pastElInnerDiv.setAttribute('class', "col-2 col-md-1 hour text-center py-3");

    pastEl.append(pastElInnerDiv);

    mainViewEl.append(pastEl);
  }
}





console.log(now);
console.log(today);
var currentTimeEl = document.getElementById('currentDay');
currentTimeEl.textContent = today;


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?



  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
//});
