//The app should:

//Display the current day at the top of the calendar when a user opens the planner.

//Present timeblocks for standard business hours when the user scrolls down.

///Color-code each timeblock based on past, present, and future when the timeblock is viewed.

//Allow a user to enter an event when they click a timeblock.

//Save the event in local storage when the save button is clicked in that timeblock.

//Persist events between refreshes of a page.

$(document).ready(function(){
//save button clicks
$(".saveBtn").on("click", function(){
    console.log("Saved");

    //this is creating an id element to the html or it is letting the user click on the TIME button
    let timeID = $(this).parent().attr("id");
    //this is letting the user input text into the description
    let value = $(this).siblings(".description").val();

    console.log(timeID);
    console.log(value);

    // this stores the timeID and value to the local storage
    localStorage.setItem(timeID ,value)

    //this shows the message inside of the class .notificcation that its been logged
    $(".notification").addClass("show");


    //this hides the message inside of the class .notificcation that its been logged after 5 seconds
    setTimeout(function(){
        $(".notification").removeClass("show");
    }, 5000
    )
})


function hourUpdate() {

    // this uses the moment to log the current hour
    let currentHour = moment().hours();
    console.log(currentHour)

    // $(".time-block").each(function(){
    //     let blockHour = parseInt($(this).attr("id").split("-")[1]);
    //     alert(blockHour);
    // })


    for(i=0; i < $(".time-block").length; i++){
        let hour = parseInt($(".time-block")[i].getAttributes(".id").split("-")[1])
        if(hour-1 < currentHour)
        $(".time-block")[i].classList.add("past")

        }else if (hour === currentHour){
        $(".time-block")[i].classList.add("past")
        $(".time-block")[i].classList.remove("present")

        }else{
            $(".time-block")[i].classList.remove("past")
            $(".time-block")[i].classList.remove("present")
            $(".time-block")[i].classList.add("future")
        }
}
hourUpdate());

let interval = setInterval(hourUpdate, 15000);

$("#hour-9. description").val(localStorage.getItem("hour-9"))
$("#hour-10. description").val(localStorage.getItem("hour-10"))
$("#hour-11. description").val(localStorage.getItem("hour-11"))
$("#hour-12. description").val(localStorage.getItem("hour-12"))
$("#hour-1. description").val(localStorage.getItem("hour-1"))
$("#hour-2. description").val(localStorage.getItem("hour-2"))
$("#hour-3. description").val(localStorage.getItem("hour-3"))
$("#hour-4. description").val(localStorage.getItem("hour-4"))
$("#hour-5. description").val(localStorage.getItem("hour-5"))

$("#currentDay").text(moment().format("dddd", "MMM", "Do"))




