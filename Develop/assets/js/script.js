var dateNum = new Date();
var numHours = dateNum.getHours();
var currentDate = moment(dateNum.getFullYear() + "-" + (dateNum.getMonth()+1) + "-" + (dateNum.getDate()+1)).format("dddd, MMMM Do");

$("#currentDay").text(currentDate);
$(".calendar-input").text(" ");

var timeTextBoxes = document.getElementsByClassName("calendar-input");
var foundHourSwitch = 0;
var saveButtons = document.getElementsByClassName("saveBtn");
var storedEvents = [];

// Colors each box accordingly
for(var i = 0; i < timeTextBoxes.length; ++i) {
    if(foundHourSwitch) {
        timeTextBoxes[i].classList.add("bg-success");
    } else {
        //i + 9 because element[0] of the array is 9AM, [1] is 10AM, etc
        if((i + 9) == numHours) {
            timeTextBoxes[i].classList.add("bg-danger");
            foundHourSwitch = 1;
        }
        else {
            timeTextBoxes[i].classList.add("bg-secondary");
        }
    }
}

//Fills each textbox with local storage info, or nothing if there's no relevant storage
for(var i = 0; i < timeTextBoxes.length; ++i) {
    storedEvents = JSON.parse(localStorage.getItem("storedEntries") || "[]");
    if(storedEvents[i] != undefined) {
        timeTextBoxes[i].value = storedEvents[i];
    }
    else {
        timeTextBoxes[i].value = " ";
    }
}

// Event listeners for each save button
// Note: All types of loops repeatedly caused errors with function parameters and indexes
saveButtons[0].addEventListener("click", function(event){
    event.preventDefault();
    saveFunction(0);
});
saveButtons[1].addEventListener("click", function(event){
    event.preventDefault();
    saveFunction(1);
});
saveButtons[2].addEventListener("click", function(event){
    event.preventDefault();
    saveFunction(2);
});
saveButtons[3].addEventListener("click", function(event){
    event.preventDefault();
    saveFunction(3);
});
saveButtons[4].addEventListener("click", function(event){
    event.preventDefault();
    saveFunction(4);
});
saveButtons[5].addEventListener("click", function(event){
    event.preventDefault();
    saveFunction(5);
});
saveButtons[6].addEventListener("click", function(event){
    event.preventDefault();
    saveFunction(6);
});
saveButtons[7].addEventListener("click", function(event){
    event.preventDefault();
    saveFunction(7);
});
saveButtons[8].addEventListener("click", function(event){
    event.preventDefault();
    saveFunction(8);
});

function saveFunction(inputIndex) {
    timeTextBoxes = document.getElementsByClassName("calendar-input");
    storedEvents = JSON.parse(localStorage.getItem("storedEntries") || "[]");
    storedEvents[inputIndex] = timeTextBoxes[inputIndex].value;
    localStorage.setItem("storedEntries", JSON.stringify(storedEvents));
    console.log("Text content = " + timeTextBoxes[inputIndex].value);
    console.log("Local Storage content = " + storedEvents[inputIndex]);
}