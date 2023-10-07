//Get current time and date
var today = dayjs().format("dddd, MMMM DD, YYYY")
var now = dayjs().format("HH:mm:ss");
console.log(now);
console.log(today);
var currentTimeEl = document.getElementById('currentDay');
currentTimeEl.textContent = today;

//Build out hour times
var timeRelative = []
var hours = '00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23'.split(',');

var hoursForLabel = [];
hoursForLabel.push("12AM");
for (i=1; i<12; i++) {
  hoursForLabel.push(i + "AM");
}
hoursForLabel.push("12PM");
for (i=1; i<13; i++) {
  hoursForLabel.push(i + "PM");
}

//Determine relative time blocks
for (var i = 0; i < hours.length; i++) {
  hourToAdd = hours[i] + ":00:00";
  if (dayjs().format("HH:00:00") == hourToAdd) {
    timeRelative.push("present");
  } else if (hourToAdd < now) {
    timeRelative.push("past");
  } else {
    timeRelative.push("future");
  }
}

//Build out time blocks
var mainViewEl = document.getElementById("main-view");

for (i = 9; i < 18; i++) {
  var relativeEl = document.createElement('div');
  var relativeElInnerDiv = document.createElement('div');
  var relativeElTextArea = document.createElement('textarea');
  var relativeElButton = document.createElement('button');
  var relativeElInnerI = document.createElement('i');

  if (timeRelative[i] == "past") {
    relativeEl.setAttribute('class', 'row time-block past');
  } else if(timeRelative[i] == "present") {
    relativeEl.setAttribute('class', 'row time-block present');
  } else {
    relativeEl.setAttribute('class', 'row time-block future');
  }

  relativeEl.setAttribute('id', 'time-block-' + i)
  relativeElInnerDiv.setAttribute('class', "col-2 col-md-1 hour text-center py-3");
  relativeElInnerDiv.textContent = hoursForLabel[i]
  relativeElTextArea.setAttribute('class', "col-8 col-md-10 description");
  relativeElTextArea.setAttribute('id', "scheduler-text-" + i);
  relativeElTextArea.textContent = localStorage.getItem(i);
  relativeElTextArea.setAttribute('rows', '3');
  relativeElButton.setAttribute('class', "btn saveBtn col-2 col-md-1");
  relativeElButton.setAttribute('id', 'time-button-' + i)
  relativeElButton.setAttribute('aria-label', 'save');
  relativeElInnerI.setAttribute('class', 'fas fa-save');
  relativeElInnerI.setAttribute('area-hidden', "true");

  relativeEl.append(relativeElInnerDiv);
  mainViewEl.append(relativeEl);
  relativeEl.append(relativeElInnerDiv);
  relativeEl.append(relativeElTextArea);
  relativeEl.append(relativeElButton);
  relativeElButton.append(relativeElInnerI);

  relativeElButton.addEventListener('click', saveEvent);

}

//Takes an event object and saves to local storage for later retrieval.
function saveEvent(event) {
  console.log("event.srcElement.parentElement.id.split('-')[2] ", event.srcElement.parentElement.id.split('-')[2]);
  var parentElNumber = event.srcElement.parentElement.id.split('-')[2];
  var textArea = document.getElementById('scheduler-text-' + parentElNumber);
  console.log(textArea.value);
  localStorage.setItem(parentElNumber, textArea.value);
}