

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

// append current date to page

$("#currentDay").append(date);

