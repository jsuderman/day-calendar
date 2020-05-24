

//current day is displayed
    //- find a way to link current day thru local machine?
    // - place current date at top of calendar
        // a function for the date?

// create time blocks by each hour of business day
    // for loop for each hour?

// create color coded blocks based on the time
    // if else statement or just if statements? based on the current time?
        // if time has past - color 1
        // if it is the current hour - color 2
        // if the time is in the future - color 3

// click on time block to enter data
    // add event listener function on click 
    // make timeblock fillable? 

// add save button 
    // when save button is clicked, 
        // save text in local storage
            // function - on click - 
            // function? to save to local storage

// function of refreshed page, items stay on page
    // funstion of local storage 

// display current day

var date = moment().format('LLLL')
console.log(date)

date,toString()
console.log(date)
// append current date to page

$("#currentDay").append(date);

// time var to create color coded time block
var nineEL = document.getElementById("nine")
var tenEL = document.getElementById("ten")
var elevenEL = document.getElementById("eleven")
var twelveEL = document.getElementById("twelve")
var oneEL = document.getElementById("one")
var twoEL = document.getElementById("two")
var threeEL = document.getElementById("three")
var fourEL = document.getElementById("four")
var fiveEL = document.getElementById("five")
var currentTime = parseInt(moment().format('H'));
console.log(currentTime)

// if statements to determine which color based on time
if (currentTime > nineEL) {
    $(".nine").css("background-color","grey")
}  else if (currentTime === nineEl) {
    $(".nine").css("background-color","red")
}   if (currentTime < nineEL) {
    $(".nine").css("background-color","green")
}

if (currentTime > tenEL) {
    $(".ten").css("background-color","grey")
}  else if (currentTime === tenEl) {
    $(".ten").css("background-color","red")
}   if (currentTime < tenEL) {
    $(".ten").css("background-color","green")
}

if (currentTime > elevenEL) {
    $(".eleven").css("background-color","grey")
}   else if (currentTime === elevenEl) {
    $(".eleven").css("background-color","red")
}   if (currentTime < elevenEL) {
    $(".eleven").css("background-color","green")
}

if (currentTime > twelveEL) {
    $(".twelve").css("background-color","grey")
}   else if (currentTime === twelveEl) {
    $(".twelve").css("background-color","red")
}   if (currentTime < twelveEL) {
    $(".twelve").css("background-color","green")
}

if (currentTime > oneEL) {
    $(".one").css("background-color","grey")
}   else if (currentTime === oneEl) {
    $(".one").css("background-color","red")
}   if (currentTime < oneEL) {
    $(".one").css("background-color","green")
}
if (currentTime > twoEL) {
    $(".two").css("background-color","grey")
}  else if (currentTime === twoEl) {
    $(".two").css("background-color","red")
}   if (currentTime < twoEL) {
    $(".two").css("background-color","green")
}

if (currentTime > threeEL) {
    $(".three").css("background-color","grey")
}   else if (currentTime === threeEl) {
    $(".three").css("background-color","red")
}   if (currentTime < threeEL) {
    $(".three").css("background-color","green")
}

if (currentTime > fourEL) {
    $(".four").css("background-color","grey")
}   else if (currentTime === fourEl) {
    $(".four").css("background-color","red")
}   if (currentTime < fourEL) {
    $(".four").css("background-color","green")
}

if (currentTime > fiveEL) {
    $(".five").css("background-color","grey")
}   else if (currentTime === fiveEl) {
    $(".five").css("background-color","red")
}   if (currentTime < fiveEL) {
    $(".five").css("background-color","green")
}

// save to local storage 

var storage = document.querySelectorAll("form-control");
var text = document.querySelector('.text');
var saveButton = document.querySelector(".saveBtn");



saveButton.addEventListener("click", function(event) {
    //event.preventDefault();

    var storage = document.querySelectorAll("form-control").value;

    localStorage.setItem("", text);
    console.log(storage)
    
});


